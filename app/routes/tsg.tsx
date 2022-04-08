import type {LoaderFunction} from "remix";
import {Form, redirect, useTransition} from "remix";
import {getSessionUser} from "~/api/auth.server";
import Page from "~/components/Page";
import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const loader: LoaderFunction = async ({request}) => {

	const user = await getSessionUser(request);
	if (!user) {
		throw redirect("/login");
	}

	return {user: user.userId};
};

export default function TeleScriptGenerator() {
	const transition = useTransition();
	return (
		<Page title="TSG:">
			<Form method="get" encType="multipart/form-data" action="/tsg-results">
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
						label="Sheet Name (optional)"
						variant="outlined"
						disabled={transition.state === "submitting"}
					/>
					<TextField
						name="row"
						label="Starting Row (optional)"
						variant="outlined"
						disabled={transition.state === "submitting"}
					/>
					<TextField
						name="column"
						label="Data Column (optional)"
						variant="outlined"
						disabled={transition.state === "submitting"}
					/>
					<Button type="submit" variant="contained">
						{transition.state === "submitting"
							? "Generating..."
							: "Generate"}
					</Button>
				</Stack>
			</Form>
		</Page>
	);
}
