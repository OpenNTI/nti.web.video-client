import type { LoaderFunction } from "remix";
import { redirect, useLoaderData, Form } from "remix";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";

import { getSessionUser } from "~/api/auth.server";
import { Service } from "~/api/models/Credential.server";
import Page from "~/components/Page";

type ConnectLoaderData = {
	hasWrikeCred: Boolean;
};

export const loader: LoaderFunction = async ({
	request,
}): Promise<ConnectLoaderData> => {
	const user = await getSessionUser(request);

	if (!user) {
		redirect("/login");
	}

	return {
		hasWrikeCred: Boolean(await user?.hasCredentials(Service.wrike)),
	};
};

export default function Connect() {
	const { hasWrikeCred } = useLoaderData<ConnectLoaderData>();

	return (
		<Page title="Connect your accounts:">
			<Stack spacing={2} alignItems="center" justifyItems="center">
				<Form action="/auth/wrike" method="post">
					<Button
						startIcon={<AddIcon />}
						variant="contained"
						type="submit"
					>
						{hasWrikeCred
							? "Connected to Wrike"
							: "Connect to Wrike"}
					</Button>
				</Form>
			</Stack>
		</Page>
	);
}
