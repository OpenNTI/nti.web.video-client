import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { CssBaseline } from "@mui/material";

import { Provider } from "./theme.material";

export const meta: MetaFunction = () => {
	return { title: "NextThought" };
};

export default function App() {
	return (
		<Document>
			<Provider>
				<CssBaseline />
				<Outlet />
			</Provider>
		</Document>
	);
}

type DocumentProps = {
	children: JSX.Element | JSX.Element[];
};

function Document({ children }: DocumentProps) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1"
				/>
				<Meta />
				<Links />
				{typeof document === "undefined" ? "__cfg:STYLES__" : null}
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === "development" && <LiveReload />}
			</body>
		</html>
	);
}
