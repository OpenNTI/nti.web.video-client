import type { LoaderFunction } from "remix";
import { json } from "remix";
import { getSessionUser } from "~/api/auth.server";

import { Service } from "~/api/models/Credential.server";
import { WrikeClient } from "~/api/wrike/Client.server";

export type Space = {
	id: string;
	title: string;
};

export type SpacesResponse = {
	spaces: Space[];
};

export const loader: LoaderFunction = async ({ request }) => {
	const user = await getSessionUser(request);
	const wrikeCred = await user?.getCredentials(Service.wrike);

	if (!wrikeCred) {
		throw new Response("Forbidden", { status: 403 });
	}

	const Wrike = new WrikeClient(wrikeCred);
	const spaces = await Wrike.Space.getAll();

	return json({
		spaces: spaces.map((s) => ({ id: s.id, title: s.title })),
	});
};
