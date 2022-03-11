import type { WrikeClient } from "./Client.server";

type CustomFieldRaw = {
	id: string;
	title: string;
	type: string;
};

type CustomFieldResponse = {
	type: string;
	data: CustomFieldRaw[];
};

export type WrikeCustomFieldInstance = {
	id: string;
	title: string;
	type: string;
};

export type WrikeCustomFieldClass = {
	new (raw: CustomFieldRaw): WrikeCustomFieldInstance;

	fromIds: (id: string[]) => Promise<WrikeCustomFieldInstance[]>;
};

export function createCustomFieldClass(
	client: WrikeClient
): WrikeCustomFieldClass {
	return class WrikeCustomFieldClient implements WrikeCustomFieldInstance {
		static async fromIds(ids: string[]) {
			const Cls = this;
			const resp = await client.get<CustomFieldResponse>(
				`customfields/${ids.join(",")}`
			);

			return resp.data.map((raw) => new Cls(raw));
		}

		protected raw: CustomFieldRaw;

		constructor(raw: CustomFieldRaw) {
			this.raw = raw;
		}

		get id() {
			return this.raw?.id;
		}
		get title() {
			return this.raw?.title;
		}
		get type() {
			return this.raw?.type;
		}
	};
}
