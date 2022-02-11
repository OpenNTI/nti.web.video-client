import type { LoaderFunction } from "remix";

import { authenticateUser } from "~/api/auth.server";
import { Service } from "~/api/models/Credential.server";

export const loader: LoaderFunction = async ({ request, params }) => {
	//NOTE: this object.keys trick only works if the enum keys are exact matches for the values
	if (!params.service || !Object.keys(Service).includes(params.service)) {
		throw new Error("Unsupported Service");
	}

	console.log("Service Callback: ", params.service);

	await authenticateUser(params.service as Service, request, {
		success: "/",
		failure: "/login",
	});
};
