import * as csv from "@fast-csv/parse";

import type { WrikeClient } from "./Client.server";
import type { WrikeFolderInstance } from "./Folder.server";
import type { WrikeTaskInstance } from "./Task.server";
import type { WrikeTaskTemplateInstance } from "./TaskTemplate.server";

type CSVRow = { template: string } & Record<string, string>;

type VideoBatchSaveConfig = {
	templateFolder: WrikeFolderInstance;
	locationFolder: WrikeFolderInstance;
};

export interface WrikeVideoBatchTaskInstance {
	importCSV: (
		file: File,
		options: csv.ParserOptionsArgs
	) => Promise<WrikeVideoBatchTaskInstance>;

	save: (config: VideoBatchSaveConfig) => Promise<void>;
}

export interface WrikeVideoBatchTaskClass {
	new (config: { task: WrikeTaskInstance }): WrikeVideoBatchTaskInstance;

	fromPermaLink: (link: string) => Promise<WrikeVideoBatchTaskInstance>;
}

export function createVideoBatchTaskClass(
	client: WrikeClient
): WrikeVideoBatchTaskClass {
	return class WrikeProjectTaskClient implements WrikeVideoBatchTaskInstance {
		static async fromPermaLink(
			link: string
		): Promise<WrikeVideoBatchTaskInstance> {
			const task = await client.Task.fromPermaLink(link);

			return new WrikeProjectTaskClient({ task });
		}

		private task: WrikeTaskInstance;
		private videos: CSVRow[] = [];

		constructor({ task }: { task: WrikeTaskInstance }) {
			this.task = task;
		}

		private addVideo(video: CSVRow) {
			this.videos.push(video);
		}

		async importCSV(
			file: File,
			options: csv.ParserOptionsArgs
		): Promise<WrikeVideoBatchTaskInstance> {
			const text = await file.text();

			return new Promise((fulfill, reject) => {
				csv.parseString(text, options)
					.on("error", (err) => reject(err))
					.on("data", (row: CSVRow) => this.addVideo(row))
					.on("end", () => fulfill(this));
			});
		}

		async save({ templateFolder, locationFolder }: VideoBatchSaveConfig) {
			console.log("Saving Video Batch: ", this.videos.length);

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

			const folder = locationFolder;

			if (!folder) {
				throw new Error("No folder");
			}

			for (let video of this.videos.reverse()) {
				const { template: templateName, ...properties } = video;
				const template = await findTemplate(templateName);

				const task = await template?.clone(properties, this.task);

				await task?.save({ folder });
			}
		}
	};
}
