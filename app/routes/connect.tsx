import type { LoaderFunction } from "remix";
import { redirect, useLoaderData, Form } from "remix";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

import { getSessionUser } from "~/api/auth.server";
import { Service } from "~/api/models/Credential.server";

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
		<Container maxWidth="md" sx={{ mt: 10 }}>
			<Paper elevation={3} sx={{ py: 3 }}>
				<Typography align="center" variant="h5" component="h1" mb={5}>
					Connect your accounts:
				</Typography>
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
			</Paper>
		</Container>
	);
}
