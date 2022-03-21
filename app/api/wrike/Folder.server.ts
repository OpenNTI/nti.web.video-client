import type { WrikeClient } from "./Client.server";

type ProjectInfoRaw = {
	ownerId: string;
};

type FolderRaw = {
	id?: string;
	title: string;
	description?: string;
	project?: ProjectInfoRaw;
	childIds?: string[];
	parentIds?: string[]; //only present if the folder is fetched by id...
};

type TreeResponse = {
	kind: string;
	data: FolderRaw[];
};

type FolderSaveConfig = {
	parentFolderId: string;
};

export interface WrikeFolderInstance {
	id: string | undefined;
	title: string;
	project?: ProjectInfoRaw;

	save: (config: FolderSaveConfig) => Promise<WrikeFolderInstance>;

	getParentFolder: () => Promise<WrikeFolderInstance>;
	getChildFolders: () => Promise<WrikeFolderInstance[]>;
	findConfigFolder: (name: string) => Promise<WrikeFolderInstance | null>;
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
		project?: ProjectInfoRaw
	) => Promise<WrikeFolderInstance>;
}

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
			project?: ProjectInfoRaw
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
		get parentIds() {
			return this.raw.parentIds;
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

		private parentFolder: Promise<WrikeFolderInstance> | undefined;
		async getParentFolder() {
			const load = async () => {
				if (!this.parentIds || this.parentIds.length === 0) {
					throw new Error("Unable to get parent");
				}

				const resp = await client.Folder.fromIDs([this.parentIds[0]]);

				return resp[0];
			};

			this.parentFolder = this.parentFolder ?? load();
			return this.parentFolder;
		}

		private childFolders: Promise<WrikeFolderInstance[]> | undefined;
		async getChildFolders() {
			const load = () => {
				if (!this.childIds) {
					throw new Error("Unable to get sub folders");
				}

				return client.Folder.fromIDs(this.childIds);
			};

			this.childFolders = this.childFolders ?? load();
			return this.childFolders;
		}

		private configFolderCache = new Map<
			string,
			Promise<WrikeFolderInstance | null>
		>();
		//Look for a folder that is a direct child of this folder, if its not there start looking up ^
		async findConfigFolder(name: string) {
			const find = async () => {
				const children = await this.getChildFolders();

				for (let child of children) {
					if (child.title === name) {
						return child;
					}
				}

				const parent = await this.getParentFolder();

				return parent.findConfigFolder(name);
			};

			if (!this.configFolderCache.has(name)) {
				this.configFolderCache.set(name, find());
			}

			const folder = await this.configFolderCache.get(name);

			return folder ?? null;
		}
	};
}
