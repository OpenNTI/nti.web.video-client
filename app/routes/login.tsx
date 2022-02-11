import type { LoaderFunction } from "remix";
import { redirect, useLoaderData, Form } from "remix";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import GoogleIcon from "@mui/icons-material/Google";

import { getSessionUser } from "~/api/auth.server";
import { Service } from "~/api/models/Credential.server";

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
		<Container maxWidth="md" sx={{ mt: 10 }}>
			<Paper elevation={3} sx={{ py: 3 }}>
				<Typography align="center" variant="h5" component="h1" mb={5}>
					Sign in with your NextThought account to continue:
				</Typography>
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
			</Paper>
		</Container>
	);
}
