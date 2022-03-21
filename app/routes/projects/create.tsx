import { useCallback, useState, useRef, KeyboardEvent } from "react";
import {
	ActionFunction,
	LoaderFunction,
	LinksFunction,
	redirect,
	useFetcher,
	Form,
	unstable_createMemoryUploadHandler,
	unstable_parseMultipartFormData,
} from "remix";
import { Fetcher } from "@remix-run/react/transition";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import type { ActualFileObject } from "filepond";

import { getSessionUser } from "~/api/auth.server";
import { Service } from "~/api/models/Credential.server";
import { WrikeClient } from "~/api/wrike/Client.server";
import Page from "~/components/Page";
import InputBreadCrumb from "~/components/InputBreadCrumb";
import OnMount from "~/components/OnMount";
import FileInput from "~/components/FileInput";

import type { SpacesResponse, Space } from "./spaces";
import type { ClientResponse, Client } from "./clients";

export const loader: LoaderFunction = async ({ request }) => {
	const user = await getSessionUser(request);

	if (!user) {
		throw redirect("/login");
	}

	if (!(await user.hasCredentials(Service.wrike))) {
		throw redirect("/connect");
	}

	return null;
};

export const links: LinksFunction = () => [
	{
		rel: "stylesheet",
		href: "https://unpkg.com/filepond@^4/dist/filepond.css",
	},
];

export const action: ActionFunction = async ({ request }) => {
	const wrike = await WrikeClient.forSession(request);

	const UploadHandler = unstable_createMemoryUploadHandler({
		maxFileSize: 10_000_000, //10mb?
		filter: ({ mimetype }) => mimetype === "text/csv",
	});

	const formData = await unstable_parseMultipartFormData(
		request,
		UploadHandler
	);

	const file = formData.get("project-file") as File;
	const text = await file.text();

	console.log("Got Form Data: ", text);

	return null;
};

export default function Project() {
	const spaces = useFetcher<SpacesResponse>();
	const loadSpaces = useFetcherLoad(spaces, "/projects/spaces");
	const [space, setSpace] = useState<Space | null>(null);

	const clients = useFetcher<ClientResponse>();
	const loadClients = useFetcherLoad(
		clients,
		`/projects/clients?spaceId=${encodeURIComponent(space?.id ?? "")}`
	);
	const [client, setClient] = useState<Client | null>(null);

	const { hasValue: hasProjectName, props: projectNameProps } =
		useBufferedInput();

	const [files, setFiles] = useState<ActualFileObject[] | undefined>(
		undefined
	);

	return (
		<Page title="New Project">
			<Form method="post" encType="multipart/form-data">
				<InputBreadCrumb>
					<OnMount onMount={loadSpaces}>
						<input type="hidden" value={space?.id} name="spaceId" />
						<Autocomplete
							sx={{
								width: "100%",
								maxWidth: "300px",
							}}
							size="small"
							value={space}
							onChange={(e, o) => setSpace(o)}
							loading={spaces.state === "loading"}
							options={spaces.data?.spaces ?? []}
							getOptionLabel={(o) => o.title}
							isOptionEqualToValue={(o, v) => o.id === v.id}
							renderInput={(params) => (
								<TextField
									{...params}
									label="Space"
									variant="standard"
								/>
							)}
						/>
					</OnMount>
					{!space ? null : (
						<OnMount onMount={loadClients}>
							<input
								type="hidden"
								value={client?.id}
								name="client"
							/>
							<Autocomplete
								sx={{ width: "100%", maxWidth: "300px" }}
								size="small"
								value={client}
								onChange={(e, o) => setClient(o)}
								loading={clients.state === "loading"}
								options={clients.data?.clients ?? []}
								getOptionLabel={(o) => o.title}
								isOptionEqualToValue={(o, v) => o.id === v.id}
								renderInput={(params) => (
									<TextField
										{...params}
										label="Client"
										variant="standard"
									/>
								)}
							/>
						</OnMount>
					)}
					{!client ? null : (
						<TextField
							sx={{
								width: "100%",
								maxWidth: "300px",
							}}
							label="Project Name"
							variant="standard"
							key="project"
							inputProps={projectNameProps}
						/>
					)}
					{!hasProjectName ? null : (
						<Stack
							spacing={2}
							alignItems="center"
							justifyItems="center"
						>
							<FileInput
								name="project-file"
								storeAsFile
								files={files}
								onupdatefiles={(items) =>
									setFiles(items.map((f) => f.file))
								}
							/>
							<Button
								variant="contained"
								type="submit"
								disabled={!files || files.length === 0}
							>
								Create Project
							</Button>
						</Stack>
					)}
				</InputBreadCrumb>
			</Form>
		</Page>
	);
}

function useFetcherLoad(
	fetcher: { load: (url: string) => void } & Fetcher,
	url: string
) {
	return useCallback(() => {
		if (!fetcher.data && fetcher.state === "idle") {
			fetcher.load(url);
		}
	}, [fetcher, url]);
}

function useBufferedInput() {
	const inputRef = useRef<HTMLInputElement | undefined>();
	const timeoutRef = useRef<NodeJS.Timeout | null>();

	const [value, setValue] = useState<string>("");
	const [hasValue, setHasValue] = useState<boolean>(false);

	const onChange = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
		setValue(inputRef.current?.value ?? "");

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = setTimeout(() => {
			setHasValue(Boolean(inputRef.current?.value));

			timeoutRef.current = null;
		}, 500);
	}, []);

	const onKeyPress = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			setHasValue(Boolean(inputRef.current?.value ?? ""));
		}
	}, []);

	return {
		hasValue,
		props: {
			value,
			ref: inputRef,
			onChange,
			onKeyPress,
		},
	};
}
