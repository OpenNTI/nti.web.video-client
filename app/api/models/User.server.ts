import z from "zod";
import { v4 as uuid } from "uuid";

import Table from "../database/Table.server";

import Base from "./Base.server";
import Credential, { Service, Tokens } from "./Credential.server";

const Existing = new Map();

export const setCached = (user: User) => (
	Existing.set(user.userId, user), user.userId
);
export const getCached = (userId: string) => Existing.get(userId);

class OauthId extends Base {
	static TableName = "OauthIds";
	static Schema = Base.Schema.extend({
		profileId: z.string(),
		service: z.nativeEnum(Service),
		userId: z.string(),
	});

	static async findOrCreate(profileId: string, service: Service) {
		const table = this.getTable();
		const existing = await table.get({ profileId, service });

		if (existing) {
			return existing;
		}

		return table.put({ profileId, service, userId: uuid() });
	}

	data: z.infer<typeof OauthId.Schema> | undefined;

	get profileId() {
		return this.data?.profileId ?? "";
	}

	get service() {
		return this.data?.service ?? "";
	}

	get userId() {
		return this.data?.userId ?? "";
	}
}

export default class User {
	static async getForOauth(profileId: string, service: Service) {
		const oauthId = await OauthId.findOrCreate(profileId, service);

		if (!oauthId) {
			return null;
		}

		return new User(oauthId.userId);
	}

	static async getForId(userId: string) {
		return new User(userId);
	}

	userId: string;

	private credentials: Map<Service, Credential>;

	constructor(userId: string) {
		this.userId = userId;
		this.credentials = new Map();
	}

	setCredentials(service: Service, tokens: Tokens) {
		return Credential.addOrUpdate(this.userId, service, tokens);
	}

	async getCredentials(service: Service) {
		if (!this.credentials.has(service)) {
			const cred = await Credential.getCredential(this.userId, service);

			if (cred) {
				this.credentials.set(service, cred);
			}
		}

		return this.credentials.get(service);
	}

	async hasCredentials(service: Service) {
		const cred = await this.getCredentials(service);

		return Boolean(cred);
	}
}
