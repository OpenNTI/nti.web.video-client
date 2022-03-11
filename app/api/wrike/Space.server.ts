import type { WrikeClient } from "./Client.server";

type SpaceRaw = {
	id: string;
	title: string;
};

type SpaceResponse = {
	type: string;
	data: SpaceRaw[];
};

export type WrikeSpaceInstance = {
	id: string;
	title: string;
};

export type WrikeSpaceClass = {
	new (raw: SpaceRaw): WrikeSpaceInstance;

	getAll: () => Promise<WrikeSpaceInstance[]>;
};

export function createSpaceClass(client: WrikeClient): WrikeSpaceClass {
	return class WrikeSpaceClient implements WrikeSpaceInstance {
		static async getAll(): Promise<WrikeSpaceInstance[]> {
			const resp = await client.get<SpaceResponse>("/spaces");

			return resp.data.map((r) => new WrikeSpaceClient(r));
		}

		constructor(private raw: SpaceRaw) {}

		get id() {
			return this.raw.id;
		}
		get title() {
			return this.raw.title;
		}
	};
}
