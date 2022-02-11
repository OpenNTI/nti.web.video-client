import { createCookieSessionStorage } from "remix";

export const sessionStorage = createCookieSessionStorage({
	cookie: {
		name: "nti.session",
		sameSite: "lax",
		path: "/",
		secrets: ["N3xtTh0ught!!C"],
	},
});
