import { renderToString } from "react-dom/server";
import createEmotionServer from "@emotion/server/create-instance";
import { RemixServer } from "remix";
import type { EntryContext } from "remix";

import { cache } from "./theme.material";

function renderPage(html: string, css: string) {
	const page = html.replace("__cfg:STYLES__", css);

	return `<!DOCTYPE html>${page}`;
}

export default function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext
) {
	const styleServer = createEmotionServer(cache);

	const markup = renderToString(
		<RemixServer context={remixContext} url={request.url} />
	);

	const styleChunks = styleServer.extractCriticalToChunks(markup);
	const styles = styleServer.constructStyleTagsFromChunks(styleChunks);

	responseHeaders.set("Content-Type", "text/html");

	return new Response(renderPage(markup, styles), {
		status: responseStatusCode,
		headers: responseHeaders,
	});
}
