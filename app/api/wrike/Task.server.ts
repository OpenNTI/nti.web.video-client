import type { WrikeClient } from "./Client.server";
import type { WrikeFolderInstance } from "./Folder.server";

export type TaskRaw = {
	id?: string | undefined;
	title: string;
	parents?: string[];
	superTasks?: string[];
	accountId?: string[];
	createdDate?: string;
	updatedDate?: string;
	customStatusId?: string;
	permalink?: string;
	scope?: string;
	priority?: string;
	dates?: any;
} & {};

type TaskResponse = {
	kind: string;
	data: TaskRaw[];
};

type TaskSaveConfig = {
	folder?: WrikeFolderInstance;
};

export interface WrikeTaskInstance {
	id: string | undefined;
	title: string;
	parents: string[] | undefined;
	superTasks: string[] | undefined;
	properties: {};

	clone: () => TaskRaw;

	save: (config: TaskSaveConfig) => Promise<void>;
}

export interface WrikeTaskClass {
	fromTitle: (
		title: string,
		folder: WrikeFolderInstance
	) => Promise<WrikeTaskInstance>;

	fromRaw: (task: TaskRaw) => WrikeTaskInstance;

	fromTemplate: (
		template: WrikeTaskInstance,
		task: TaskRaw
	) => WrikeTaskInstance;
}

export function createTaskClass(client: WrikeClient): WrikeTaskClass {
	return class WrikeTaskClient implements WrikeTaskInstance {
		static async fromTitle(title: string, folder: WrikeFolderInstance) {
			const resp = await client.get<TaskResponse>(
				`folders/${folder.id}/tasks`,
				{ title, fields: ["description", "customFields"] }
			);

			if (resp.data.length > 1) {
				throw new Error("Found multiple tasks");
			}

			return WrikeTaskClient.fromRaw(resp.data[0]);
		}

		static fromRaw(task: TaskRaw) {
			return new WrikeTaskClient(task);
		}

		static fromTemplate(template: WrikeTaskInstance, task: TaskRaw) {
			return new WrikeTaskClient({
				...template.clone(),
				...task,
			});
		}

		public id: string | undefined;
		public title: string;
		public parents: string[] | undefined;
		public superTasks: string[] | undefined;
		public properties: {};

		constructor(task: TaskRaw) {
			const { id, title, parents, superTasks, ...properties } = task;

			this.id = id;
			this.title = title;
			this.parents = parents;
			this.superTasks = superTasks;

			this.properties = properties;
		}

		clone(): TaskRaw {
			const c = { title: this.title, ...this.properties } as TaskRaw;

			if (this.parents) {
				c.parents = this.parents;
			}

			if (this.superTasks) {
				c.superTasks = this.superTasks;
			}

			delete c.accountId;
			delete c.createdDate;
			delete c.updatedDate;
			delete c.customStatusId;
			delete c.permalink;
			delete c.scope;
			delete c.priority;
			delete c.dates;

			return c;
		}

		async save(config: TaskSaveConfig) {
			return this.id ? this.update(config) : this.create(config);
		}

		private async create(config: TaskSaveConfig) {
			const { folder } = config;

			if (!folder?.id) {
				throw new Error("Provide a folder to save a new task to.");
			}

			const resp = await client.post<TaskResponse>(
				`folders/${folder.id}/tasks`,
				{
					...this.clone(),
					parents: [folder.id],
				}
			);

			const { id, title, parents, superTasks, ...properties } =
				resp.data[0];

			this.id = id;
			this.title = title;
			this.parents = parents;
			this.superTasks = superTasks;

			this.properties = properties;
		}

		private update(config: TaskSaveConfig) {
			throw new Error("Cannot update tasks");
		}
	};
}
