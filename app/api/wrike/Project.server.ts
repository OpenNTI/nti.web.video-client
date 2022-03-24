import * as csv from "@fast-csv/parse";

import type { WrikeClient } from "./Client.server";
import type { WrikeFolderInstance } from "./Folder.server";
import { WrikeTaskTemplateInstance } from "./TaskTemplate.server";

type CSVRow = { template: string } & Record<string, string>;

type ProjectRaw = {
	id?: string;
	title: string;
};

export type WrikeProjectInstance = {
	importCSV(
		file: File,
		options: csv.ParserOptionsArgs
	): Promise<WrikeProjectInstance>;
};

export type WrikeProjectClass = {
	new (raw: ProjectRaw, parent?: WrikeFolderInstance): WrikeProjectInstance;

	create(title: string, parent: WrikeFolderInstance): WrikeProjectInstance;
};

export function createProjectClass(client: WrikeClient): WrikeProjectClass {
	return class WrikeProjectClient implements WrikeProjectInstance {
		static create(title: string, parent: WrikeFolderInstance) {
			return new WrikeProjectClient({ title }, parent);
		}

		private videos: CSVRow[] = [];

		constructor(
			private raw: ProjectRaw,
			private parent?: WrikeFolderInstance
		) {}

		get id() {
			return this.raw?.id;
		}
		get title() {
			return this.raw?.title;
		}

		async importCSV(
			file: File,
			options: csv.ParserOptionsArgs
		): Promise<WrikeProjectClient> {
			const text = await file.text();

			return new Promise((fulfill, reject) => {
				csv.parseString(text, options)
					.on("error", (err) => reject(err))
					.on("data", (row: CSVRow) => this.videos.push(row))
					.on("end", () => fulfill(this));
			});
		}

		save() {
			return this.id ? this.update() : this.create();
		}

		private update() {
			throw new Error("Unable to update Projects (not implemented)");
		}

		private async create() {
			if (!client.userId) {
				throw new Error("No user id");
			}

			if (!this.parent?.id) {
				throw new Error("No parent id");
			}

			const templateFolder = await this.parent?.findConfigFolder(
				"templates"
			);

			if (!templateFolder) {
				throw new Error("Unable to find template folder");
			}

			const templateCache = new Map<
				string,
				Promise<WrikeTaskTemplateInstance>
			>();
			const findTemplate = (name: string) => {
				if (!templateCache.has(name)) {
					templateCache.set(
						name,
						client.TaskTemplate.fromTitle(name, templateFolder)
					);
				}

				return templateCache.get(name);
			};

			const project = await client.Folder.create(this.title, "", {
				ownerId: client.userId,
			});

			await project.save({ parentFolderId: this.parent.id });

			for (let video of this.videos.reverse()) {
				const { template: templateName, ...properties } = video;
				const template = await findTemplate(templateName);

				const task = await template?.clone(properties);

				await task?.save({ folder: project });
			}
		}
	};
}
