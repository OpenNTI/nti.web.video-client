import type { LoaderFunction, ActionFunction } from "remix";
import {
	useLoaderData,
	redirect,
	unstable_createMemoryUploadHandler,
	unstable_parseMultipartFormData,
	Form,
} from "remix";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { getSessionUser } from "~/api/auth.server";
import { Service } from "~/api/models/Credential.server";
import { WrikeClient } from "~/api/wrike/Client.server";
import Page from "~/components/Page";

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

export const action: ActionFunction = async ({ request }) => {
	const user = await getSessionUser(request);
	const wrikeCred = await user?.getCredentials(Service.wrike);

	if (!wrikeCred) {
		throw new Response("Forbidden", { status: 403 });
	}

	const UploaderHandler = unstable_createMemoryUploadHandler({
		maxFileSize: 10_000_000, //10mb?
		filter: ({ mimetype }) => mimetype === "text/csv",
	});

	const formData = await unstable_parseMultipartFormData(
		request,
		UploaderHandler
	);

	const Wrike = new WrikeClient(wrikeCred);
	const project = await Wrike.Project.fromPermaLink(
		formData.get("location") as string
	);

	const csv = formData.get("project") as File;

	await project.importCSV(csv, { headers: true });

	await project.save({
		templatePermaLink: formData.get("templates") as string,
	});

	return null;
};

export default function Index() {
	return (
		<Page title="Upload a project CSV file:">
			<Form method="post" encType="multipart/form-data">
				<Stack spacing={2} alignItems="center" justifyItems="center">
					<TextField
						name="location"
						label="Location (PermaLink)"
						variant="outlined"
						defaultValue="https://www.wrike.com/open.htm?id=846418953"
					/>
					<TextField
						name="templates"
						label="Templates (PermaLink)"
						variant="outlined"
						defaultValue="https://www.wrike.com/open.htm?id=845756005"
					/>
					<input type="file" name="project" />
					<Button variant="contained" type="submit">
						Upload
					</Button>
				</Stack>
			</Form>
		</Page>
	);
}
