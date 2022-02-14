import type { LoaderFunction } from "remix";
import { useLoaderData, redirect } from "remix";
import Button from "@mui/material/Button";
import Text from "@mui/material/Typography";

import { getSessionUser } from "~/api/auth.server";
import { Service } from "~/api/models/Credential.server";

export const loader: LoaderFunction = async ({ request }) => {
	const user = await getSessionUser(request);

	if (!user) {
		throw redirect("/login");
	}

	if (!(await user.hasCredentials(Service.wrike))) {
		throw redirect("/connect");
	}

	return { user: user.userId };
};

export default function Index() {
	const { user } = useLoaderData();

	return (
		<div>
			<Text variant="h1">Welcome {user}</Text>
			<Text variant="body1">
				For more information please contact{" "}
				<Button variant="text">support.</Button>
			</Text>
		</div>
	);
}
