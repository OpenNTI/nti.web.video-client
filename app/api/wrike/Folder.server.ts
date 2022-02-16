import type { WrikeClient } from "./Client.server";

export interface WrikeFolderInstance {
	id: string | undefined;
	title: string;
	project: boolean;
	save: (config: FolderSaveConfig) => Promise<WrikeFolderInstance>;
}

export interface WrikeFolderClass {
	// new (): WrikeFolderInstance;

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

		id: string | undefined;
		title: string;
		description: string | undefined;
		project: boolean;
		childIds: string[] | undefined;

		constructor(folder: FolderRaw) {
			this.id = folder.id;
			this.title = folder.title;
			this.description = folder.description;
			this.project = folder.project;
			this.childIds = folder.childIds;
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

			this.id = resp.id;
			this.title = resp.title;
			this.description = resp.description;
			this.project = resp.project;
			this.childIds = resp.childIds;

			return this;
		}
	};
}
