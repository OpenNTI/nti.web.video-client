import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
	Form,
	LinksFunction,
	LoaderFunction,
	ActionFunction,
	redirect,
	unstable_createMemoryUploadHandler,
	unstable_parseMultipartFormData,
} from "remix";
import type { ActualFileObject } from "filepond";

import Page from "~/components/Page";
import FileInput from "~/components/FileInput";
import { getSessionUser } from "~/api/auth.server";

export const links: LinksFunction = () => [
	{
		rel: "stylesheet",
		href: "https://unpkg.com/filepond@^4/dist/filepond.css",
	},
];

export const load: LoaderFunction = async ({ request }) => {
	const user = await getSessionUser(request);

	if (!user) {
		throw redirect("/login");
	}
};

export const action: ActionFunction = async ({ request }) => {
	const UploadHandler = unstable_createMemoryUploadHandler({
		maxFileSize: 10_000_000, //10mb?
	});

	const formData = await unstable_parseMultipartFormData(
		request,
		UploadHandler
	);

	const file = formData.get("report") as File;

	console.log("Got Report: ", await parseReport(file));

	return null;
};

export default function AssetInventory() {
	const [files, setFiles] = useState<ActualFileObject[] | undefined>(
		undefined
	);

	return (
		<Page title="Asset Inventory">
			<Form method="post" encType="multipart/form-data">
				<Stack spacing={2} alignItems="center" justifyItems="center">
					<Typography variant="subtitle1">
						After Effects Dependency Report
					</Typography>
					<Typography variant="subtitle2">
						File &gt; Dependencies &gt; Collect Files
					</Typography>
					<br />
					<FileInput
						name="report"
						storeAsFile
						files={files}
						onupdatefiles={(items) =>
							setFiles(items.map((f) => f.file))
						}
					/>
					<Button variant="contained" type="submit">
						Compile
					</Button>
				</Stack>
			</Form>
		</Page>
	);
}

async function parseReport(file: File) {
	const text = await file.text();

	const lines = text.split("\r");

	const groups: Record<string, string[]> = {};
	let currentSection: string | null = null;

	for (let line of lines) {
		const parts = line.split("\t");
		const depth = parts.length - 1;
		const lineText = parts[depth].trim();

		if (depth === 0) {
			groups[lineText] = groups[lineText] ?? [];
			currentSection = lineText;
		} else {
			if (!currentSection) {
				throw new Error("Invalid Report");
			}

			groups[currentSection].push(lineText);
		}
	}

	return groups;
}
