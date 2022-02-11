import type { LoaderFunction, ActionFunction } from "remix";
import { redirect } from "remix";

import { authenticateUser } from "~/api/auth.server";
import { Service } from "~/api/models/Credential.server";

export const loader: LoaderFunction = () => redirect("/login");

export const action: ActionFunction = async ({ request, params }) => {
	//NOTE: this object.keys trick only works if the enum keys are exact matches for the values
	if (!params.service || !Object.keys(Service).includes(params.service)) {
		throw new Error("Unsupported Service");
	}

	console.log("Service: ", params.service);

	await authenticateUser(params.service as Service, request, {
		success: "",
		failure: "",
	});
};
