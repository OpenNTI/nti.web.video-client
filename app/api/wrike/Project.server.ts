import * as csv from "@fast-csv/parse";

import type { WrikeClient } from "./Client.server";
import type { WrikeFolderInstance } from "./Folder.server";
import type { WrikeTaskInstance, TaskRaw } from "./Task.server";

type CSVRow = {
	video: string;
	template: string;
	title: string;
};

type ProjectSaveConfig = {
	templatePermaLink: string;
};

interface VideoProject {
	addTask: (template: string, properties: TaskRaw) => void;
	save: (config: {
		project: WrikeProjectInstance;
		templates: WrikeFolderInstance;
	}) => void;
}

interface WrikeProjectInstance {
	folder: WrikeFolderInstance | undefined;
	video: (name: string) => VideoProject | undefined;
	importCSV: (
		file: File,
		options: csv.ParserOptionsArgs
	) => Promise<WrikeProjectInstance>;
	save: (config: ProjectSaveConfig) => Promise<WrikeProjectInstance>;
}

export interface WrikeProjectClass {
	fromPermaLink: (link: string) => Promise<WrikeProjectInstance>;
}

export function createProjectClass(client: WrikeClient): WrikeProjectClass {
	class Video {
		private tasks: VideoTask[] = [];

		constructor(public name: string) {}

		addTask(template: string, properties: TaskRaw) {
			this.tasks.push(new VideoTask(template, properties));
		}

		async save(config: {
			project: WrikeProjectInstance;
			templates: WrikeFolderInstance;
		}) {
			const { project, templates } = config;

			const videoTask = client.Task.fromRaw({ title: this.name });
			const templateCache: Map<string, WrikeTaskInstance> = new Map();

			await videoTask.save({ folder: project.folder });

			if (!videoTask.id) {
				throw new Error("Wheres the video id");
			}

			for (let task of this.tasks) {
				const template = templateCache.has(task.template)
					? templateCache.get(task.template)
					: await client.Task.fromTitle(task.template, templates);

				if (!template) {
					continue;
				}

				const subTask = client.Task.fromTemplate(template, {
					...task.properties,
					superTasks: [videoTask.id],
				});

				await subTask.save({ folder: project.folder });
			}
		}
	}

	class VideoTask {
		constructor(public template: string, public properties: TaskRaw) {}
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

		private videos: Map<string, Video> = new Map();
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

		async save(config: ProjectSaveConfig) {
			const templateFolder = await client.Folder.fromPermaLink(
				config.templatePermaLink
			);

			if (!this.folder.id) {
				throw new Error("Unable to find projects folder");
			}

			for (let video of this.videos.values()) {
				await video.save({ project: this, templates: templateFolder });
			}

			return this;
		}
	};
}
