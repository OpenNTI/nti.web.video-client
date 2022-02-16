import type { LoaderFunction } from "remix";
import { redirect, useLoaderData, Form } from "remix";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GoogleIcon from "@mui/icons-material/Google";

import { getSessionUser } from "~/api/auth.server";
import { Service } from "~/api/models/Credential.server";
import Page from "~/components/Page";

type LoginLoaderData = {
	hasGoogleCred: Boolean;
};

export const loader: LoaderFunction = async ({
	request,
}): Promise<LoginLoaderData> => {
	const user = await getSessionUser(request);

	const hasGoogleCred = user
		? await user.hasCredentials(Service.google)
		: false;

	if (hasGoogleCred) {
		redirect("/");
	}

	return {
		hasGoogleCred,
	};
};

export default function Login() {
	const { hasGoogleCred } = useLoaderData<LoginLoaderData>();

	return (
		<Page title="Sign in to your NextThought account:">
			<Stack spacing={2} alignItems="center" justifyItems="center">
				<Form action="/auth/google" method="post">
					<Button
						startIcon={<GoogleIcon />}
						variant="contained"
						type="submit"
					>
						{hasGoogleCred
							? "Signed In To Google"
							: "Sign In To Google"}
					</Button>
				</Form>
			</Stack>
		</Page>
	);
}
