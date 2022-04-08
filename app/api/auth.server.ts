import { redirect } from "remix";
import { Authenticator } from "remix-auth";
import { GoogleStrategy } from "remix-auth-google";
import { OAuth2Strategy } from "remix-auth-oauth2";

import { WrikeStrategy } from "./auth-strategies/Wrike.server";
import User, { setCached } from "./models/User.server";
import { Service } from "./models/Credential.server";
import { sessionStorage } from "./session.server";

const auth = new Authenticator<any>(sessionStorage);

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
	auth.use(
		new GoogleStrategy(
			{
				clientID: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
				callbackURL: "http://localhost:3333/auth/google/callback",
				scope: "https://www.googleapis.com/auth/documents.readonly" +
					" https://www.googleapis.com/auth/spreadsheets.readonly openid profile email",
			},
			async (profile) => profile
		),
		Service.google
	);
}

if (process.env.WRIKE_CLIENT_ID && process.env.WRIKE_CLIENT_SECRET) {
	auth.use(
		new WrikeStrategy(
			{
				clientID: process.env.WRIKE_CLIENT_ID,
				clientSecret: process.env.WRIKE_CLIENT_SECRET,
				callbackURL: "http://localhost:3333/auth/wrike/callback",
				scope: "Default,wsReadWrite",
			},
			async (profile) => profile
		),
		Service.wrike
	);
}

export const getSessionUser = async (request: Request) => {
	const session = await sessionStorage.getSession(
		request.headers.get("Cookie")
	);
	const userId = session.get("userId");

	if (!userId) {
		return null;
	}

	return User.getForId(userId);
};

export const authenticateUser = async (
	service: Service,
	request: Request,
	redirects: { success: string; failure: string }
) => {
	const { accessToken, refreshToken, profile } = await auth.authenticate(
		service,
		request
	);
	const session = await sessionStorage.getSession(
		request.headers.get("Cookie")
	);

	console.log(profile);

	try {
		if (!profile.id) {
			console.log("NO ID?!?!: ", profile);
			throw "what";
		}

		let currentUser = await getSessionUser(request);

		if (!currentUser) {
			console.log("Setting Current User: ", profile.id, service);
			currentUser = await User.getForOauth(profile.id, service);

			if (!currentUser) {
				throw new Error("Unable to get user");
			}

			session.set("userId", setCached(currentUser));
		}

		await currentUser.setCredentials(service, {
			accessToken: accessToken,
			refreshToken: refreshToken,
		});
	} catch (e) {
		throw redirect(redirects.failure);
	}

	throw redirect(redirects.success, {
		headers: {
			"Set-Cookie": await sessionStorage.commitSession(session),
		},
	});
};
