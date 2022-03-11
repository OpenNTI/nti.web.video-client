import type { WrikeClient } from "./Client.server";

type WrikeCustomStatusInstance = {
	id: string;
	name: string;
};

type WorkflowRaw = {
	id: string;
	name: string;
	customStatuses: WrikeCustomStatusInstance[];
};

type WorkflowResponse = {
	type: string;
	data: WorkflowRaw[];
};

export type WrikeWorkFlowInstance = {
	id: string;
	name: string;
	customStatuses: WrikeCustomStatusInstance[];
};

export type WrikeWorkFlowClass = {
	new (raw: WorkflowRaw): WrikeWorkFlowInstance;

	fromName(name: string): Promise<WrikeWorkFlowInstance>;
};

export function createWorkFlowClass(client: WrikeClient): WrikeWorkFlowClass {
	return class WrikeWorkflowClient implements WrikeWorkFlowInstance {
		static async fromName(name: string) {
			const resp = await client.get<WorkflowResponse>("workflows");
			const raw = resp.data.find((d) => d.name === name);

			if (!raw) {
				throw new Error("Workflow not found");
			}

			return new WrikeWorkflowClient(raw);
		}

		constructor(private raw: WorkflowRaw) {}

		get id() {
			return this.raw.id;
		}
		get name() {
			return this.raw.name;
		}
		get customStatuses() {
			return this.raw.customStatuses;
		}
	};
}
