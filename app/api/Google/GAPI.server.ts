import {docs_v1, google} from 'googleapis';

interface tsgParams {
	column: string | null;
	sheet: string | null;
	row: string | null;
	title: string;
	url: string;
}

export default class GAPI {
	params: tsgParams;
	token: string;

	constructor(request: Request, token: string) {
		// Collect URL parameters and set default values
		const search = (new URL(request.url)).searchParams;
		this.params = {
			url: search.get("url") ?? "",
			sheet: search.get("sheet") != "" ? search.get("sheet") : "Master Review Tracker",
			row: search.get("row") != "" ? search.get("row") : '5',
			column: search.get("column") != "" ? search.get("column") : 'I',
			title: "",
		}
		this.token = token;
	}

	async generateTeleprompterScripts() {
		// collect list of Doc links from the Tracking Document
		const sheetData = await collectLinksFromColumn(this.params)
		const links = sheetData.links.filter(String);
		this.params.title = sheetData.title;

		// collect title and text from each of the Google Docs links
		let file_text = [];
		for (let i = 0; i < links.length; i++) {
			file_text.push(await extractTranscriptText(this.token, links[i]));
		}

		// return params and {title, text} for each doc found in the tracking sheet
		return {sheetData: this.params, files: file_text};
	}
}


/**
 * Gets the spreadsheet or document ID from a URL.
 * @param {string}  url The URL to collect the ID from.
 */
function getIDFromURL(url: string) {
	return new URL(url).pathname.split('/')[3];
}

/**
 * Collects all hyperlinks from a column within a given sheet in a given spreadsheet.
 * @param {tsgParams}  params	URL params from the teleprompter script generator.
 *
 * @return {[string]} An object containing the title of the spreadsheet, and an array containing all the links
 * found in the specified location.
 */
// TODO: should I use a different type for response?
async function collectLinksFromColumn(params: tsgParams) {
	const googleSheets = google.sheets('v4');
	const response = await googleSheets.spreadsheets.get(
		{
			// TODO: use the OAUTH token
			auth: 'AIzaSyBW4hVX-R3FAwOtAOtjSvPqWsBuYDCkX1c',
			// oauth_token: token,
			spreadsheetId: getIDFromURL(params.url),
			includeGridData: true,
			ranges: [`${params.sheet}!${params.column}${params.row}:${params.column}`] // ex: SheetName!I5:I
		}
	);
	// check that data appears as expected
	if (!(response.data.properties && response.data.properties.title)) {
		throw Error("Failed to find spreadsheet title");
	}
	const title = response.data.properties.title;

	if (!(response.data.sheets && response.data.sheets[0].data && response.data.sheets[0].data[0].rowData)) {
		throw Error("Failed to get spreadsheet data");
	}
	const rows = response.data.sheets[0].data[0].rowData;

	// collect hyperlinks from rows
	const links: string[] = new Array(rows.length);
	for (let row of rows) {
		if (row.values) {
			const link = row.values[0].hyperlink;
			if (link) {
				links?.push(getIDFromURL(link));
			}
		} else {
			console.log("Found row with no data");
		}

	}
	return {title: title, links: links};
}

/**
 * Collects the text content from the second column in a script document.
 * @param  	token:string		The OAuth token.
 * @param	documentId:string 	The id for the GoogleDoc.
 *
 * @return An object that contains the title of the document, and a string containing the title and cell content of
 * the table, separated by two new lines.
 */
async function extractTranscriptText(token: string, documentId: string) {
	const docs = google.docs('v1');
	const response = await docs.documents.get({
		oauth_token: token,
		documentId: documentId,
	});

	// validate response matches expected format
	if (!response.data.body) {
		throw Error("Failed to get data from Google Doc");
	}
	if (!response.data.body.content) {
		throw Error("Failed to find content in Google Doc body");
	}
	const elements = response.data.body.content;
	if (!(elements[1] && elements[1].paragraph && elements[1].paragraph.elements)) {
		throw Error("Failed to find title in Google Doc");
	}
	const title: string = readParagraphElement(elements[1].paragraph.elements[0]);
	const columnIndex: number = 1;
	let text: string = '';
	text += title + '\n';
	// - - - - - - - - - -
	for (const value of elements) { // elements in the document
		if (value.table) {
			const table = value.table;
			if (table.tableRows) {
				for (const row of table.tableRows) {  // rows in the table
					if (row.tableCells) {
						const cell = row.tableCells[columnIndex].content;  // column in the row
						if (cell) {
							text += extractParagraphText(cell);
						}

					}
				}
			}
		}
	}
	text = text.replace(/^\s*$(?:\r\n?|\n)/gm, '').replace(/$\n/gm, '\n\n');
	return {'title': title, 'text': text};
}

/**
 * Extracts all text from a structural element found in a Google Docs response object.
 * @param docs_v1.Schema$StructuralElement[]  element The structural element that contains text.
 *
 * @return {string} A string containing all the text found in the element.
 */
function extractParagraphText(element: docs_v1.Schema$StructuralElement[]) {
	let text: string = '';
	for (const value of element) {
		if (value.paragraph && value.paragraph.elements) {
			for (const elem of value.paragraph.elements) {
				text += readParagraphElement(elem);
			}
		}
	}
	return text;
}

/**
 * Helper method the text content from a paragraph element in a Google Docs response object.
 * @param docs_v1.Schema$ParagraphElement  element The element within a paragraph object.
 *
 * @return The text content found in the element.
 */
function readParagraphElement(element: docs_v1.Schema$ParagraphElement) {
	return element?.textRun?.content ?? '';
}
