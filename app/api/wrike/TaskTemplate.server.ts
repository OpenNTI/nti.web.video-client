import Mustache from "mustache";

import type { WrikeClient } from "./Client.server";
import { WrikeCustomFieldInstance } from "./CustomField.server";
import type { WrikeFolderInstance } from "./Folder.server";
import type {
	WrikeTaskClass,
	WrikeTaskInstance,
	TaskRaw,
	TaskResponse,
} from "./Task.server";

import { rawFromTitle, rawFromIds } from "./Task.server";

export type CloneData = Record<string, string>;

type CustomFieldTemplate = {
	value: string;
	definition: WrikeCustomFieldInstance;
};

export interface WrikeTaskTemplateInstance extends WrikeTaskInstance {
	clone: (
		data: CloneData,
		parent?: WrikeTaskInstance
	) => Promise<WrikeTaskInstance>;
}

export interface WrikeTaskTemplateClass
	extends WrikeTaskClass<WrikeTaskTemplateInstance> {}

function fillInTemplate(template: string, data: CloneData): string {
	if (!template) {
		return "";
	}

	return Mustache.render(template, data);
}

export function createTaskTemplateClass(
	client: WrikeClient
): WrikeTaskTemplateClass {
	return class TaskTemplateClient
		extends client.Task
		implements WrikeTaskTemplateInstance
	{
		static async fromIds(ids: string[]) {
			const Cls = this;
			const raw = await rawFromIds(ids, client);

			return raw.map((r) => new Cls(r));
		}

		static async fromPermaLink(
			permalink: string
		): Promise<TaskTemplateClient> {
			const resp = await client.get<TaskResponse>("/tasks", {
				permalink,
			});

			return this.fromRaw(resp.data[0]);
		}

		static async fromTitle(
			title: string,
			folder: WrikeFolderInstance
		): Promise<TaskTemplateClient> {
			const raw = await rawFromTitle(title, folder, client);

			return this.fromRaw(raw);
		}

		static fromRaw(task: TaskRaw) {
			return new TaskTemplateClient(task);
		}

		TemplateFields: (keyof TaskRaw)[] = ["title", "description"];
		LiteralFields: (keyof TaskRaw)[] = [
			"sharedIds",
			"responsibleIds",
			"customStatusId",
		];

		async clone(data: CloneData, superTask?: WrikeTaskInstance) {
			const templateRaw = this.raw ?? ({} as TaskRaw);

			const taskRaw = {} as TaskRaw;
			const set = (key: keyof TaskRaw, val: string) => {
				if (val) {
					taskRaw[key] = val;
				}
			};

			this.TemplateFields.forEach((key) =>
				set(key, data[key] ?? fillInTemplate(templateRaw[key], data))
			);

			this.LiteralFields.forEach((key) => {
				console.log(
					"Setting Literal Field: ",
					key,
					data[key] ?? templateRaw[key]
				);
				set(key, data[key] ?? templateRaw[key]);
			});

			if (data.titlePrefix) {
				taskRaw.title = `${data.titlePrefix} ${taskRaw.title}`;
			}

			taskRaw.title = taskRaw.title
				.replace("TEMPLATE", "")
				.replace(/\ \ /, " ");

			const customFields = (await this.getCustomFields()) ?? {};

			for (let [name, field] of Object.entries(customFields)) {
				taskRaw.customFields = [
					...(taskRaw.customFields ?? []),
					{
						id: field.definition.id,
						value: data[name] ?? field.value,
					},
				];
			}

			const task = client.Task.fromRaw(taskRaw);

			if (superTask) {
				task.setSuperTask(superTask);
			}

			const subTaskTemplates = !templateRaw.subTaskIds?.length
				? []
				: await TaskTemplateClient.fromIds(templateRaw.subTaskIds);

			const cloneData = {
				...data,
				titlePrefix: taskRaw.title,
			} as CloneData;

			this.TemplateFields.forEach((k) => delete cloneData[k]);
			this.LiteralFields.forEach((k) => delete cloneData[k]);

			const subTasks = await Promise.all(
				subTaskTemplates.map((s) => s.clone(cloneData, task))
			);

			task.addSubTasks(subTasks);

			return task;
		}

		private CustomFieldsLoader:
			| Promise<Record<string, CustomFieldTemplate> | null>
			| undefined;
		//TODO: cache this return
		private async getCustomFields(): Promise<Record<
			string,
			{ value: string; definition: WrikeCustomFieldInstance }
		> | null> {
			const loader = async () => {
				const { customFields } = this.raw ?? {};

				if (!customFields || customFields.length === 0) {
					return null;
				}

				console.log("Getting Custom Fields: ", customFields);

				const fields = await client.CustomField.fromIds(
					customFields.map((c) => c.id)
				);

				return fields.reduce((acc, field) => {
					const instance = customFields.find(
						(c) => c.id === field.id
					);

					if (field.type !== "string" || !instance) {
						return acc;
					}

					return {
						...acc,
						[field.title]: {
							value: instance.value,
							definition: field,
						},
					};
				}, {});
			};

			this.CustomFieldsLoader = this.CustomFieldsLoader ?? loader();

			return this.CustomFieldsLoader;
		}
	};
}
