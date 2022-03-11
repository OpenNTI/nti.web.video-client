import {
	LoaderFunction,
	ActionFunction,
	unstable_createMemoryUploadHandler,
	unstable_parseMultipartFormData,
} from "remix";
import { redirect, Form } from "remix";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { getSessionUser } from "~/api/auth.server";
import { Service } from "~/api/models/Credential.server";
import { WrikeClient } from "~/api/wrike/Client.server";
import Page from "~/components/Page";
import { Upload } from "@mui/icons-material";

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
	const batch = await Wrike.VideoBatch.fromPermaLink(
		formData.get("batch-task") as string
	);

	await batch.importCSV(formData.get("batch") as File, { headers: true });

	await batch.save({
		templateFolder: await Wrike.Folder.fromPermaLink(
			formData.get("template-folder") as string
		),
		locationFolder: await Wrike.Folder.fromPermaLink(
			formData.get("location") as string
		),
	});

	return null;
};

export default function VideoBatch() {
	return (
		<Page title="Upload a video batch CSV file:">
			<Form method="post" encType="multipart/form-data">
				<Stack spacing={2} alignItems="center" justifyItems="center">
					<TextField
						name="template-folder"
						label="Template Folder (PermaLink)"
						variant="outlined"
					/>
					<TextField
						name="batch-task"
						label="Batch Task (PermaLink)"
						variant="outlined"
					/>
					<TextField
						name="location"
						label="Folder (PermaLink)"
						variant="outlined"
					/>
					<input type="file" name="batch" />
					<Button variant="contained" type="submit">
						Upload
					</Button>
				</Stack>
			</Form>
		</Page>
	);
}
