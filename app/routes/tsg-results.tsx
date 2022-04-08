import type {LoaderFunction} from "remix";
import {redirect, useLoaderData} from "remix";
import {getSessionUser} from "~/api/auth.server";
import Page from "~/components/Page";
import {Service} from "~/api/models/Credential.server";
import React from "react";


export const loader: LoaderFunction = async ({request}) => {
	// get session user
	const user = await getSessionUser(request);
	if (!user) {
		throw redirect("/login");
	}

	// TODO: importing google like this is probably not the best practice, I'll have to investigate to find a better option
	// https://remix.run/docs/en/v1/pages/gotchas#server-code-in-client-bundles
	// https://developers.google.com/docs/api/quickstart/nodejs
	const {google} = require('googleapis');
	const token = (await user.getCredentials(Service.google))?.accessToken;

	// Collect URL parameters and set default values
	// TODO: is there a better way to define default values?
	const search = new URLSearchParams(new URL(request.url).search);
	const params = {
		url: search.get("url") ?? "",
		sheet: search.get("sheet") != "" ? search.get("sheet") : "Master Review Tracker",
		row: search.get("row") != "" ? search.get("row") : '5',
		column: search.get("column") != "" ? search.get("column") : 'I',
		title: ""

	}

	// collect list of script Doc links from the Tracking Document
	const sheets = google.sheets('v4');
	const spreadsheet = await sheets.spreadsheets.get(
		{
			// TODO: use the OAUTH token
			// auth: 'AIzaSyBW4hVX-R3FAwOtAOtjSvPqWsBuYDCkX1c',
			oauth_token: token,
			spreadsheetId: getIDFromURL(params.url),
			includeGridData: true,
			// ex: SheetName!I5:I
			ranges: [`${params.sheet}!${params.column}${params.row}:${params.column}`]
		}
	);
	const sheetData = collectLinksFromColumn(spreadsheet)
	const links = sheetData.links.filter(String);
	params.title = sheetData.title;

	// collect title and text from each of the Google Docs links
	const docs = google.docs('v1');
	let file_text = [];
	for (let i = 0; i < links.length; i++) {
		const document = await docs.documents.get({
			oauth_token: token,
			documentId: links[i]
		});
		file_text.push(extractTranscriptText(document));
	}

	// return user data, sheet data, and list of files
	return {user: user.userId, sheetData: params, files: file_text};
};

/**
 * Gets the spreadsheet or document ID from a URL.
 * @param {string}  url The URL to collect the ID from.
 */
function getIDFromURL(url: string) {
	return new URL(url).pathname.split('/')[3];
}

/**
 * Collects all hyperlinks from a column within a given sheet in a given spreadsheet.
 * @param {object}  response    The response from the Google Spreadsheet API containing the spreadsheet data.
 *
 * @return {[string]} An array containing all the links found in the specified location.
 */
function collectLinksFromColumn(response: any) {
	let title = response.data.properties.title;
	let rows = response.data.sheets[0].data[0].rowData;
	let links: string[] = new Array(rows.length);
	for (let i = 0; i < rows.length; i++) {
		const row: string = rows[i].values[0].hyperlink;
		if (row) {
			links.push(getIDFromURL(row));
		}
	}
	return {title: title, links: links};
}

/**
 * Gets the text content from a paragraph element.
 * @param {object}  element The element within a paragraph object.
 *
 * @return The text content found in the element.
 */
function readParagraphElement(element: any) {
	let text_run = element.textRun;
	if (!text_run) {
		return '';
	}
	return text_run.content;
}

/**
 * Collects the text content from the second column in a script document.
 * @param  response The elements that make up the Doc object.
 *
 * @return An object that contains the title of the document, and a string containing the title and cell content of
 * the table, separated by two new lines.
 */
function extractTranscriptText(response: any) {
	// assume the transcript text is in the second column
	// console.log(response);
	let elements = response.data.body.content;
	const columnIndex: number = 1;
	let text: string = '';
	let title: string = readParagraphElement(elements[1].paragraph.elements[0]);
	text += title + '\n';
	// - - - - - - - - - -
	for (const value of elements) {
		if ('table' in value) {
			let table = value.table;
			for (const row of table.tableRows) {
				const cell = row.tableCells[columnIndex].content;
				text += extractParagraphText(cell);
			}
		}
	}
	text = text.replace(/^\s*$(?:\r\n?|\n)/gm, '').replace(/$\n/gm, '\n\n');
	// console.log("TITLE: ", title);
	return {'title': title, 'text': text};
}

/**
 * Extracts all text from a structural element.
 * @param {object}  element The structural element that contains text.
 *
 * @return {string} A string containing all the text found in the element.
 */
function extractParagraphText(element: any) {
	let text: string = '';
	for (const value of element) {
		for (const elem of value.paragraph.elements) {
			text += readParagraphElement(elem);
		}
	}
	return text;
}


export default function TsgResults() {
	// create download links for each Google Docs text collected by the server
	const data = useLoaderData();
	let fileLinks = [];
	for (let i = 0; i < data.files.length - 1; i++) {
		let text = data.files[i].text;
		let title = data.files[i].title;
		fileLinks.push(<li><a href={'data:text/plain;charset=utf-8,' + encodeURIComponent(text)}
							  download={title}>{title}</a></li>);
	}
	return (
		<Page title="Teleprompter Script Generator Results:">
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
