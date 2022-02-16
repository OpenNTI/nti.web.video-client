import type Credential from "../models/Credential.server";

import type { WrikeFolderClass } from "./Folder.server";
import { createFolderClass } from "./Folder.server";
import type { WrikeProjectClass } from "./Project.server";
import { createProjectClass } from "./Project.server";
import { createTaskClass, WrikeTaskClass } from "./Task.server";

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
	Project: WrikeProjectClass;
	Folder: WrikeFolderClass;
	Task: WrikeTaskClass;

	constructor(private credentials: Credential) {
		this.Project = createProjectClass(this);
		this.Folder = createFolderClass(this);
		this.Task = createTaskClass(this);
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
