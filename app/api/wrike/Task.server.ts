import type { WrikeClient } from "./Client.server";
import type { WrikeFolderInstance } from "./Folder.server";

const SaveBlackList = [
	"accountId",
	"createdDate",
	"updatedDate",
	"permalink",
	"scope",
	"priority",
	"dates",
];

type CustomFieldInstance = {
	id: string;
	value: any;
};

export type TaskRaw = {
	id?: string | undefined;
	title: string;
	description?: string;
	parents?: string[];
	parentIds?: string[];
	superTasks?: string[];
	superTaskIds?: string[];
	subTaskIds?: string[];
	accountId?: string[];
	createdDate?: string;
	updatedDate?: string;
	customStatusId?: string;
	permalink?: string;
	scope?: string;
	priority?: string;
	dates?: any;
	effortAllocation?: any;
	billingType?: any;
	finance?: any;
	sharedIds?: any;
	responsibleIds?: any;
	customFields?: CustomFieldInstance[];
} & {};

export type TaskResponse = {
	kind: string;
	data: TaskRaw[];
};

type TaskSaveConfig = {
	folder?: WrikeFolderInstance;
};

export interface WrikeTaskInstance {
	raw: TaskRaw | undefined;
	id: string | undefined;
	title: string;
	parents: string[] | undefined;

	addSubTasks: (tasks: WrikeTaskInstance[]) => void;
	setSuperTask: (task: WrikeTaskInstance) => void;

	getSaveData: () => TaskRaw;

	save: (config: TaskSaveConfig) => Promise<void>;
}

export interface WrikeTaskClass<T = WrikeTaskInstance> {
	new (task: TaskRaw): T;

	fromPermaLink: (link: string) => Promise<T>;

	fromTitle: (title: string, folder: WrikeFolderInstance) => Promise<T>;

	fromRaw: (task: TaskRaw) => T;
}

export function createTaskClass(client: WrikeClient): WrikeTaskClass {
	return class WrikeTaskClient implements WrikeTaskInstance {
		static async fromPermaLink<
			T extends typeof WrikeTaskClient = typeof WrikeTaskClient
		>(this: T, permalink: string): Promise<InstanceType<T>> {
			const raw = await rawFromPermaLink(permalink, client);

			return this.fromRaw(raw);
		}

		static async fromTitle<
			T extends typeof WrikeTaskClient = typeof WrikeTaskClient
		>(
			this: T,
			title: string,
			folder: WrikeFolderInstance
		): Promise<InstanceType<T>> {
			const raw = await rawFromTitle(title, folder, client);

			return this.fromRaw(raw);
		}

		static fromRaw<
			T extends typeof WrikeTaskClient = typeof WrikeTaskClient
		>(this: T, task: TaskRaw) {
			return new WrikeTaskClient(task) as InstanceType<T>;
		}

		raw: TaskRaw;

		private superTask: WrikeTaskInstance | undefined;
		private subTasks: WrikeTaskInstance[] = [];

		constructor(task: TaskRaw) {
			this.raw = task;
		}

		get id(): string | undefined {
			return this.raw.id;
		}

		get title(): string {
			return this.raw.title;
		}

		get parents(): string[] | undefined {
			return this.raw.parentIds;
		}

		addSubTasks(tasks: WrikeTaskInstance[]) {
			tasks.forEach((t) => t.setSuperTask(this));

			this.subTasks = [...this.subTasks, ...tasks];
		}

		setSuperTask(task: WrikeTaskInstance) {
			this.superTask = task;
		}

		getSaveData(): TaskRaw {
			const { title, parents, ...extraData } = this.raw;
			const data = { ...extraData } as TaskRaw;

			if (title) {
				data.title = title;
			}

			if (parents) {
				data.parents = parents;
			}

			if (this.superTask?.id) {
				data.superTasks = [this.superTask.id];
			}

			for (let prop of SaveBlackList) {
				delete data[prop as keyof TaskRaw];
			}

			return data;
		}

		async save(config: TaskSaveConfig) {
			return this.id ? this.update(config) : this.create(config);
		}

		private async create(config: TaskSaveConfig) {
			const { folder } = config;

			if (!folder?.id) {
				throw new Error("Provide a location to save a new task to.");
			}

			const payload = {
				...this.getSaveData(),
			};

			if (folder?.id) {
				payload.parents = [folder.id];
			}

			const resp = await client.post<TaskResponse>(
				`folders/${folder.id}/tasks`,
				fixPayload(payload as {})
			);

			const task = resp.data[0];

			this.raw = task;

			console.log("Saving Sub Tasks: ", this.subTasks.length);
			for (let subTask of this.subTasks) {
				await subTask.save(config);
			}
		}

		private update(config: TaskSaveConfig) {
			throw new Error("Cannot update tasks");
		}
	};
}

const PayloadKeyMap = {
	sharedIds: "shareds",
	responsibleIds: "responsibles",
	customStatusId: "customStatus",
};

function fixPayload(payload: Record<string, string>) {
	const newPayload = { ...payload };

	for (let [key, fix] of Object.entries(PayloadKeyMap)) {
		if (newPayload[key]) {
			newPayload[fix] = newPayload[key];
			delete newPayload[key];
		}
	}

	return newPayload;
}

const Fields = [
	"parentIds",
	"description",
	"customFields",
	"sharedIds",
	"responsibleIds",
	"subTaskIds",
];

export async function rawFromPermaLink(permalink: string, client: WrikeClient) {
	const resp = await client.get<TaskResponse>(`tasks`, {
		permalink,
		fields: Fields,
	});

	return resp.data[0];
}

export async function rawFromIds(
	ids: string[],
	client: WrikeClient
): Promise<TaskRaw[]> {
	const resp = await client.get<TaskResponse>(`tasks/${ids.join(",")}`);

	return resp.data;
}

export async function rawFromTitle(
	title: string,
	folder: WrikeFolderInstance,
	client: WrikeClient
): Promise<TaskRaw> {
	const resp = await client.get<TaskResponse>(`folders/${folder.id}/tasks`, {
		title,
		fields: Fields,
	});

	if (resp.data.length > 1) {
		throw new Error("Found multiple tasks");
	}

	return resp.data[0];
}
