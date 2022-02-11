import z from "zod";

import Base from "./Base.server";

export type Tokens = {
	accessToken: string;
	refreshToken: string;
};

export enum Service {
	google = "google",
}

export default class Credential extends Base {
	static TableName = "Credentials";
	static Schema = Base.Schema.extend({
		userId: z.string(),
		service: z.enum(["google"]),
		accessToken: z.string(),
		refreshToken: z.string(),
	});

	static async addOrUpdate(userId: string, service: Service, tokens: Tokens) {
		const table = await this.getTable();
		const key = { userId, service };
		console.log("adding credential: ", key);
		const existing = await table.get(key);

		if (existing) {
			await table.update({
				Key: key,
				UpdateExpression:
					"SET accessToken = :accessToken, refreshToken = :refreshToken",
				ExpressionAttributeValues: {
					":accessToken": tokens.accessToken,
					":refreshToken": tokens.refreshToken,
				},
			});
		} else {
			await table.put({
				userId,
				service,
				...tokens,
			});
		}
	}

	static async getCredential(userId: string, service: Service) {
		const table = await this.getTable();
		const existing = await table.get({ userId, service });

		return existing;
	}
}
