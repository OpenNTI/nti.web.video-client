import Page from "~/components/Page";
import {Form, useTransition, useActionData, ActionFunction, LoaderFunction, redirect, useLoaderData, json} from "remix";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import GAPI from "~/api/Google/GAPI.server";
import React from "react";
import {getSessionUser} from "~/api/auth.server";
import {getAssetInventory} from "~/routes/tasks/asset-inventory";
import {Service} from "~/api/models/Credential.server";
import * as CSV from "~/api/utils/CSV.server";
import {useBlob, useObjectURL} from "~/components/hooks/use-object-url";


export const load: LoaderFunction = async ({request}) => {
	const user = await getSessionUser(request);

	if (!user) {
		throw redirect("/login");
	}
};

export const action: ActionFunction = async ({request}) => {
	const user = await getSessionUser(request);
	const token = (await user.getCredentials(Service.google))?.accessToken;
	if (!token) {
		throw new Error('Could not find GAPI access token.');
	}
	const formData = await request.formData();
	const gapi = new GAPI(request, token, formData);
	console.log("~~GETTING LINKS FROM SHEET~~")
	const sheetsInfo = await gapi.getLinksFromSheet()
	const sheetLinks = sheetsInfo.links.filter(String);
	let docLinks: string[] = [];
	console.log("~~GETTING LINKS FROM DOCS~~");
	for (const link of sheetLinks) {
		const foundLinks = (await gapi.getAllLinksInDocument(link)).filter(String)
		docLinks = [...docLinks, ...foundLinks];
	}
	// const foundLinks = (await gapi.getAllLinksInDocument(sheetLinks[0])).filter(String)
	// docLinks = [...docLinks, ...foundLinks];
	console.log("~~GETTING INVENTORY~~");
	const inventory = await getAssetInventory({'Collected source files': docLinks});
	console.log("FOUND INVENTORY: ", inventory);

	const csv = await CSV.format(inventory, {
		headers: [
			"headline",
			"type",
			"vendor",
			"filename",
			"code",
			"collection",
			"creditline",
			"url",
		],
	});
	return json({
		csv,
		projectName: sheetsInfo.title,
	});
}

export default function ScriptAssetInventory() {
	const transition = useTransition()
	const action = useActionData();
	const showDownload = !!action;
	const showForm = !showDownload;

	const csv = useBlob(action?.csv, "text/csv;charset=utf-8;");
	const downloadURL = useObjectURL(csv);
	return (
		<Page title={"Script Asset Inventory"}>
			<Form method="post" encType="multipart/form-data">
				{!showForm ? null : (
					<Stack spacing={2} alignItems="center" justifyItems="center">
						<TextField
							name="url"
							label="Spreadsheet URL"
							variant="outlined"
							required
							disabled={transition.state === "submitting"}
						/>
						<TextField
							name="sheet"
							label="Sheet Name (Master Review Tracker)"
							variant="outlined"
							disabled={transition.state === "submitting"}
						/>
						<TextField
							name="row"
							label="Starting Row (5)"
							variant="outlined"
							disabled={transition.state === "submitting"}
						/>
						<TextField
							name="column"
							label="Data Column (I)"
							variant="outlined"
							disabled={transition.state === "submitting"}
						/>
						<Button type="submit" variant="contained">
							{transition.state === "submitting"
								? "Generating..."
								: "Generate"}
						</Button>
					</Stack>
				)}
				{!showDownload ? null : (
					<Stack
						spacing={2}
						alignItems="center"
						justifyItems="center"
					>
						<a
							href={downloadURL}
							download={`${action?.projectName}-asset-inventory.csv`}
						>
							<Button variant="contained">Download</Button>
						</a>
					</Stack>
				)}

			</Form>
		</Page>
	)
}
