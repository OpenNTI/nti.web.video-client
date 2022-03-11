import type { WrikeClient } from "./Client.server";

export interface WrikeFolderInstance {
	id: string | undefined;
	title: string;
	project: boolean;

	save: (config: FolderSaveConfig) => Promise<WrikeFolderInstance>;

	getSubFolders: () => Promise<WrikeFolderInstance[]>;
}

export interface WrikeFolderClass {
	new (raw: FolderRaw): WrikeFolderInstance;

	fromSpace: (
		spaceId: string,
		params: Record<string, any>
	) => Promise<WrikeFolderInstance[]>;
	fromIDs: (ids: string[]) => Promise<WrikeFolderInstance[]>;
	fromPermaLink: (id: string) => Promise<WrikeFolderInstance>;
	create: (
		title: string,
		description: string,
		project: boolean
	) => Promise<WrikeFolderInstance>;
}

type FolderRaw = {
	id?: string;
	title: string;
	description?: string;
	project: boolean;
	childIds?: string[];
};

type TreeResponse = {
	kind: string;
	data: FolderRaw[];
};

type FolderSaveConfig = {
	parentFolderId: string;
};

export function createFolderClass(client: WrikeClient): WrikeFolderClass {
	return class WrikeFolderClient implements WrikeFolderInstance {
		static async fromSpace(
			spaceId: string,
			params: Record<string, any>
		): Promise<WrikeFolderInstance[]> {
			const resp = await client.get<TreeResponse>(
				`/spaces/${spaceId}/folders`,
				params
			);

			return resp.data.map((r) => new WrikeFolderClient(r));
		}

		static async fromIDs(ids: string[]): Promise<WrikeFolderInstance[]> {
			const resp = await client.get<TreeResponse>(
				`folders/${ids.join(",")}`
			);

			return resp.data.map((r) => new WrikeFolderClient(r));
		}

		static async fromPermaLink(link: string): Promise<WrikeFolderInstance> {
			const tree = await client.get<TreeResponse>("folders", {
				permalink: link,
			});

			const folder = tree.data[0];

			return new WrikeFolderClient(folder);
		}

		static async create(
			title: string,
			description: string,
			project: boolean
		): Promise<WrikeFolderInstance> {
			return new WrikeFolderClient({ title, description, project });
		}

		constructor(private raw: FolderRaw) {}

		get id() {
			return this.raw.id;
		}
		get title() {
			return this.raw.title;
		}
		get description() {
			return this.raw.description;
		}
		get project() {
			return this.raw.project;
		}
		get childIds() {
			return this.raw.childIds;
		}

		async save(config: FolderSaveConfig) {
			const resp = await client.post<FolderRaw>(
				`folder/${config.parentFolderId}/folders`,
				{
					title: this.title,
					description: this.description ?? "",
					project: this.project ?? false,
				}
			);

			this.raw = resp;

			return this;
		}

		async getSubFolders() {
			if (!this.id) {
				throw new Error("Unable to get sub tree without folder id");
			}

			const resp = await client.get<TreeResponse>(
				`/folders/${this.id}/folders`,
				{ project: false }
			);

			return resp.data.map((raw) => new WrikeFolderClient(raw));
		}
	};
}
