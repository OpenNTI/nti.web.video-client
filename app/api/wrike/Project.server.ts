import * as csv from "@fast-csv/parse";

import type { WrikeClient } from "./Client.server";
import type { WrikeFolderInstance } from "./Folder.server";
import type { TaskRaw } from "./Task.server";
import type {
	WrikeTaskTemplateInstance,
	CloneData,
} from "./TaskTemplate.server";

type CSVRow = {
	video: string;
	template: string;
} & CloneData;

type ProjectSaveConfig = {
	templatePermaLink: string;
};

interface VideoProject {
	addTask: (template: string, properties: CloneData) => void;
	save: (config: { project: WrikeProjectInstance }) => void;
}

export interface WrikeProjectInstance {
	folder: WrikeFolderInstance | undefined;
	video: (name: string) => VideoProject | undefined;
	importCSV: (
		file: File,
		options: csv.ParserOptionsArgs
	) => Promise<WrikeProjectInstance>;
	save: (config: ProjectSaveConfig) => Promise<WrikeProjectInstance>;
	findTemplate: (name: string) => Promise<WrikeTaskTemplateInstance | null>;
}

export interface WrikeProjectClass<T = WrikeProjectInstance> {
	new (config: { folder: WrikeFolderInstance }): T;
	fromPermaLink: (link: string) => Promise<T>;
}

export function createProjectClass(client: WrikeClient): WrikeProjectClass {
	class Video implements VideoProject {
		private tasks: VideoTask[] = [];

		constructor(public name: string) {}

		addTask(template: string, properties: CloneData) {
			this.tasks.push(new VideoTask(template, properties));
		}

		async save(config: { project: WrikeProjectInstance }) {
			const { project } = config;

			const videoTask = client.Task.fromRaw({ title: this.name });

			console.log("Saving Video: ", this.name, this.tasks.length);

			await videoTask.save({ folder: project.folder });

			if (!videoTask.id) {
				throw new Error("Wheres the video id");
			}

			for (let task of this.tasks.reverse()) {
				const template = await project.findTemplate(task.template);

				if (!template) {
					continue;
				}

				const subTask = await template.clone(
					task.properties,
					videoTask
				);

				await subTask.save({ folder: project.folder });
			}
		}
	}

	class VideoTask {
		constructor(public template: string, public properties: CloneData) {}
	}

	return class WrikeProjectClient implements WrikeProjectInstance {
		static async fromPermaLink(
			link: string
		): Promise<WrikeProjectInstance> {
			const folder = await client.Folder.fromPermaLink(link);

			if (!folder.project) {
				throw new Error("Not a project");
			}

			return new WrikeProjectClient({ folder });
		}

		private videos: Map<string, VideoProject> = new Map();
		private templateCache: Map<
			string,
			Promise<WrikeTaskTemplateInstance | null>
		> = new Map();

		public folder: WrikeFolderInstance;

		constructor({ folder }: { folder: WrikeFolderInstance }) {
			this.folder = folder;
		}

		async importCSV(
			file: File,
			options: csv.ParserOptionsArgs
		): Promise<WrikeProjectInstance> {
			const text = await file.text();

			return new Promise((fulfill, reject) => {
				csv.parseString(text, options)
					.on("error", (err) => reject(err))
					.on("data", (row: CSVRow) => {
						const { video, template, ...properties } = row;

						this.video(video)?.addTask(template, properties);
					})
					.on("end", () => fulfill(this));
			});
		}

		video(name: string) {
			if (!this.videos.has(name)) {
				const video = new Video(name);

				this.videos.set(name, video);

				return video;
			}

			return this.videos.get(name);
		}

		async save(config?: ProjectSaveConfig) {
			if (!this.folder.id) {
				throw new Error("Unable to find projects folder");
			}

			console.log("Saving Videos: ", Array.from(this.videos.values()));

			await Promise.all(
				Array.from(this.videos.values()).map((v) =>
					v.save({ project: this })
				)
			);

			return this;
		}

		async findTemplate(
			name: string
		): Promise<WrikeTaskTemplateInstance | null> {
			if (!this.templateCache.has(name)) {
				const loader = async () => {
					const subFolders = await this.folder.getSubFolders();
					const templateFolder = subFolders.find(
						(f) => f.title === "templates"
					);

					if (!templateFolder) {
						return null;
					}

					const template = await client.TaskTemplate.fromTitle(
						name,
						templateFolder
					);

					return template;
				};

				this.templateCache.set(name, loader());
			}

			return this.templateCache.get(name) ?? null;
		}
	};
}
