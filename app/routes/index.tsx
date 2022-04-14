import type { LoaderFunction, ActionFunction } from "remix";
import { redirect, Link } from "remix";
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

	return { user: user.userId };
};

export default function Index() {
	return (
		<Page title="Video Tooling:">
			<Stack spacing={2} alignItems="center" justifyItems="center">
				<Link to="/projects/create">
					<Button variant="contained">New Project</Button>
				</Link>
				<Link to="/video-batch">
					<Button variant="contained">Video Batch</Button>
				</Link>
				<Link to="tasks/asset-inventory">
					<Button variant="contained">Asset Inventory</Button>
				</Link>
				<Link to="/tsg">
					<Button variant="contained">Teleprompter Script Generator</Button>
				</Link>
			</Stack>
		</Page>
	);
}
