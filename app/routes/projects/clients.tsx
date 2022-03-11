import type { LoaderFunction } from "remix";
import { json } from "remix";

import { WrikeClient } from "~/api/wrike/Client.server";

export type Client = {
	title: string;
	id: string;
};

export type ClientResponse = {
	clients: Client[];
};

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);

	const spaceId = url.searchParams.get("spaceId");
	const Wrike = await WrikeClient.forSession(request);

	if (!spaceId) {
		throw new Response("Must have a spaceId", { status: 422 });
	}

	const folders = await Wrike.Folder.fromSpace(spaceId, { project: false });

	return json({
		clients: folders.map((f) => ({ id: f.id, title: f.title })),
	});
};
