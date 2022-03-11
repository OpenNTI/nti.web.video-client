import type Credential from "../models/Credential.server";
import { getSessionUser } from "../auth.server";
import { Service } from "../models/Credential.server";

import type { WrikeCustomFieldClass } from "./CustomField.server";
import { createCustomFieldClass } from "./CustomField.server";
import type { WrikeFolderClass } from "./Folder.server";
import { createFolderClass } from "./Folder.server";
import type { WrikeProjectClass } from "./Project.server";
import { createProjectClass } from "./Project.server";
import type { WrikeSpaceClass } from "./Space.server";
import { createSpaceClass } from "./Space.server";
import type { WrikeTaskClass } from "./Task.server";
import { createTaskClass } from "./Task.server";
import type { WrikeTaskTemplateClass } from "./TaskTemplate.server";
import { createTaskTemplateClass } from "./TaskTemplate.server";
import type { WrikeVideoBatchTaskClass } from "./VideoBatchTask.server";
import { createVideoBatchTaskClass } from "./VideoBatchTask.server";
import type { WrikeWorkFlowClass } from "./Workflow.server";
import { createWorkFlowClass } from "./Workflow.server";

const BaseURL = "https://www.wrike.com/api/v4/";

type FetchConfig = {
	method: string;
	headers: {
		Authorization: string;
		"Content-Type"?: string;
	};
	body?: string;
	signal?: AbortSignal;
};

const encodeValue = (value: any): string => {
	if (Array.isArray(value)) {
		return `[${value.map((i) => `"${encodeValue(i)}"`).join(",")}]`;
	}

	return value.toString();
};

export class WrikeClient {
	static async forSession(request: Request) {
		const user = await getSessionUser(request);
		const wrikeCred = await user?.getCredentials(Service.wrike);

		if (!wrikeCred) {
			throw new Response("Forbidden", { status: 403 });
		}

		return new WrikeClient(wrikeCred);
	}

	CustomField: WrikeCustomFieldClass;
	Folder: WrikeFolderClass;
	Project: WrikeProjectClass;
	Space: WrikeSpaceClass;
	Task: WrikeTaskClass;
	TaskTemplate: WrikeTaskTemplateClass;
	VideoBatch: WrikeVideoBatchTaskClass;
	Workflow: WrikeWorkFlowClass;

	constructor(private credentials: Credential) {
		this.CustomField = createCustomFieldClass(this);
		this.Folder = createFolderClass(this);
		this.Project = createProjectClass(this);
		this.Space = createSpaceClass(this);
		this.Task = createTaskClass(this);
		this.TaskTemplate = createTaskTemplateClass(this);
		this.VideoBatch = createVideoBatchTaskClass(this);
		this.Workflow = createWorkFlowClass(this);
	}

	private async fetch<T = {}>(
		url: string,
		method: string,
		data?: object
	): Promise<T> {
		const controller = new AbortController();
		const config: FetchConfig = {
			method,
			headers: {
				Authorization: `Bearer ${this.credentials.accessToken}`,
			},
			signal: controller.signal,
		};

		if (data && config.headers) {
			config.headers["Content-Type"] =
				"application/x-www-form-urlencoded";
		}

		if (data) {
			const params = new URLSearchParams();

			Object.entries(data).map(([key, value]) =>
				params.set(key, encodeValue(value))
			);

			config.body = params.toString();
		}

		console.log("WRIKE Request: ", url, method, config.body, data);

		setTimeout(() => controller.abort(), 10000);

		const response = await fetch(url, config);
		const json = await response.json();

		console.log("Got WRIKE Response: ", json);

		if (json.error) {
			throw new Error(json.errorDescription);
		}

		return json as T;
	}

	get<T = {}>(path: string = "", params: object = {}) {
		const url = new URL(`${BaseURL}${path}`);

		Object.entries(params).forEach(([key, value]) =>
			url.searchParams.set(key, encodeValue(value))
		);

		return this.fetch<T>(url.toString(), "GET");
	}

	post<T = {}>(path: string = "", data: object = {}) {
		return this.fetch<T>(`${BaseURL}${path}`, "POST", data);
	}
}
