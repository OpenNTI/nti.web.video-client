import path from "path";

import { useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
	Form,
	LinksFunction,
	LoaderFunction,
	ActionFunction,
	useActionData,
	useTransition,
	json,
	redirect,
	unstable_createMemoryUploadHandler,
	unstable_parseMultipartFormData,
} from "remix";
import type { ActualFileObject } from "filepond";
import * as HTMLParser from "node-html-parser";

import Page from "~/components/Page";
import FileInput from "~/components/FileInput";
import { useBlob, useObjectURL } from "~/components/hooks/use-object-url";
import { getSessionUser } from "~/api/auth.server";
import * as CSV from "~/api/utils/CSV.server";

const VendorOrder = ["Getty Images", "Shutterstock", "Unknown"];

type ImageObject = {
	"@type": "ImageObject";
	description: string;
	author: {
		name: string;
	};
};

type Inventory = {
	type: "video" | "photo" | "audio" | "unknown";
	filename: string;
	vendor: string;

	code?: string;
	url?: string;
	headline?: string;
	creditline?: string;
};

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
	const inventory = (await getAssetInventory(file)).sort(
		(a, b) => VendorOrder.indexOf(a.vendor) - VendorOrder.indexOf(b.vendor)
	);

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

	return json({ csv });
};

export default function AssetInventory() {
	const transition = useTransition();
	const action = useActionData();

	const [files, setFiles] = useState<ActualFileObject[] | undefined>(
		undefined
	);

	const showSaving =
		transition.state === "loading" || transition.state === "submitting";
	const showDownload = !showSaving && action;
	const showForm = !showSaving && !showDownload;

	const csv = useBlob(action?.csv, "text/csv;charset=utf-8;");
	const downloadURL = useObjectURL(csv);

	return (
		<Page title="Asset Inventory">
			<Form method="post" encType="multipart/form-data">
				{!showDownload || !downloadURL ? null : (
					<Stack
						spacing={2}
						alignItems="center"
						justifyItems="center"
					>
						<Button variant="contained">
							<a
								href={downloadURL}
								download="asset-inventory.csv"
							>
								Download
							</a>
						</Button>
					</Stack>
				)}
				{!showSaving ? null : (
					<Stack
						spacing={2}
						alignItems="center"
						justifyItems="center"
					>
						<CircularProgress />
						<Typography variant="subtitle2">
							Generating...
						</Typography>
					</Stack>
				)}
				{!showForm ? null : (
					<Stack
						spacing={2}
						alignItems="center"
						justifyItems="center"
					>
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
				)}
			</Form>
		</Page>
	);
}

const getHTML = async (url: string) => {
	const resp = await fetch(url);
	const text = await resp.text();

	console.log(text);

	return HTMLParser.parse(text, {
		blockTextElements: { style: false },
	});
};

const getImageObjectLinkData = async (url: string): Promise<ImageObject> => {
	const html = await getHTML(url);
	const linkData = html.querySelectorAll(
		"script[type='application/ld+json']"
	);

	for (let data of linkData) {
		const json = JSON.parse(data.text) as ImageObject;

		if (json["@type"] !== "ImageObject") {
			continue;
		}

		return json;
	}

	throw new Error(`Unable to load ImageObject: ${url}`);
};

const headlineFromImageObect = (obj: ImageObject) => obj.description;
const creditlineFromImageObject = (obj: ImageObject) => obj.author.name;

const TypesToExtension = {
	video: [".mp4", ".mov"],
	photo: [".jpeg", ".png", ".tif", ".webm"],
	audio: [".mp3"],
};

const getTypeFromExtension = (
	ext: string
): keyof typeof TypesToExtension | "unknown" => {
	for (let [type, extensions] of Object.entries(TypesToExtension)) {
		if (extensions.includes(ext)) {
			return type as keyof typeof TypesToExtension;
		}
	}

	return "unknown";
};

const GettyRegex = /^(gettyimages|GettyImages)\-(\d+)/;

const InfoGetters = [
	{
		// Getty Images
		handles: (filename: string, ext: string) => GettyRegex.test(filename),
		info: async (filename: string, ext: string) => {
			const match = filename.match(GettyRegex);
			const id = match?.[2];

			if (!id) {
				throw new Error(`Unable to get GettyImage id: ${filename}`);
			}

			const url = `http://www.gettyimages.com/detail/${id}`;
			const html = await getHTML(url);

			const assetDetailsScript = html.querySelector(
				'script[data-component="assetdetail"]'
			);

			const assetDetails = assetDetailsScript
				? JSON.parse(assetDetailsScript.text)
				: null;

			if (!assetDetails) {
				throw new Error(
					`Unable to get Getty Images asset details: ${url}`
				);
			}

			return {
				vendor: "Getty Images",
				code: id,
				url,

				headline: assetDetails.asset.title,
				creditline: assetDetails.asset.photographer,
				collection: assetDetails.asset.collectionDisplayName,
			};
		},
	},
	{
		//Shutterstock
		handles: (filename: string, ext: string) =>
			filename.startsWith("shutterstock"),
		info: async (filename: string, ext: string) => {
			const parts = filename.split("_");
			const id = parts[parts.length - 1];
			const url = `https://www.shutterstock.com/image-photo/${id}`;

			const imageObject = await getImageObjectLinkData(url);

			return {
				vendor: "Shutterstock",
				code: id,
				url,

				headline: headlineFromImageObect(imageObject),
				creditline: creditlineFromImageObject(imageObject),
			};
		},
	},
];

async function getAssetInventory(file: File): Promise<Inventory[]> {
	const report = await parseReport(file);
	const sources = report["Collected source files:"] as string[];

	const inventories = sources.reduce(
		(acc: Promise<Inventory>[], source: string) => {
			const extension = path.extname(source);
			const filename = path.basename(source, extension);

			const getter = InfoGetters.find((g) =>
				g.handles(filename, extension)
			);

			if (!getter) {
				return [
					...acc,
					Promise.resolve({
						type: getTypeFromExtension(extension),
						vendor: "Unknown",
						filename: path.basename(source),
					}),
				];
			}

			return [
				...acc,
				getter.info(filename, extension).then((info) => ({
					type: getTypeFromExtension(extension),
					filename: path.basename(source),
					...info,
				})),
			];
		},
		[]
	);

	return Promise.all(inventories);
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
