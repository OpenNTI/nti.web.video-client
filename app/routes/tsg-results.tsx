import type {LoaderFunction} from "remix";
import {redirect, useLoaderData} from "remix";
import JSZip from "jszip";

import {getSessionUser} from "~/api/auth.server";
import Page from "~/components/Page";
import {Service} from "~/api/models/Credential.server";
import GAPI from "~/api/Google/GAPI.server";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const loader: LoaderFunction = async ({request}) => {

	// get session user
	const user = await getSessionUser(request);
	if (!user) {
		throw redirect("/login");
	}

	// generate teleprompter script
	const token = (await user.getCredentials(Service.google))?.accessToken;
	if (!token) {
		throw new Error('Could not find GAPI access token.');
	}
	const gapi = new GAPI(request, token, null);
	return gapi.generateTeleprompterScripts();
};

/**
 * Creates download links for each Google Docs text collected by the server from the Tracking Sheet.
 * @constructor
 * @return A document containing download links to all the text documents, as well as some information about the initial request.
 */
export default function TsgResults() {
	// create download links for each Google Docs text collected by the server
	const data = useLoaderData();
	let fileLinks = [];
	let metaJSON = [];
	let zip = new JSZip();
	for (let i = 0; i < data.files.length; i++) {
		const text = data.files[i].text;
		const title = data.files[i].title + '.txt';
		metaJSON.push(data.files[i].meta);
		zip.file(title, text);
		fileLinks.push(<li><a href={'data:text/plain;charset=utf-8,' + encodeURIComponent(text)}
							  download={title}>{title}</a></li>);
	}
	const { Parser } = require('json2csv');
	const parser = new Parser()
	const csv = parser.parse(metaJSON);
	zip.file("meta.json", JSON.stringify(metaJSON));
	zip.file("meta.csv", csv);

	function downloadAll(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		// src: https://stuk.github.io/jszip/documentation/examples/download-zip-file.html
		zip.generateAsync({type: "base64"}).then(function (base64) {
			window.location = "data:application/zip;base64," + base64;
		}, function (err) {
			throw Error(err);
		});
	}

	return (
		<Page title="Teleprompter Script Generator Results">
			<Stack spacing={2} alignItems="center" justifyItems="center">
				<Button variant="contained" onClick={this.downloadAll}>Download All Documents</Button>
			</Stack>
			<ul style={{margin: "0px 50px"}}>
				<hr/>
				<li><strong>Tracking Sheet: </strong>{data.sheetData.title}</li>
				<li><strong>Sheet: </strong>{data.sheetData.sheet}</li>
				<li><strong>Row: </strong>{data.sheetData.row}</li>
				<li><strong>Column: </strong>{data.sheetData.column}</li>
				<li><strong>Documents created: </strong>{data.files.length}</li>
				<hr/>
			</ul>
			<ul style={{margin: "0px 50px"}}>
				{fileLinks}
			</ul>
		</Page>
	);
}
