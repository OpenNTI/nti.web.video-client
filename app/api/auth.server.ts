import { redirect } from "remix";
import { Authenticator } from "remix-auth";
import { GoogleStrategy } from "remix-auth-google";

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
			},
			async (profile) => profile
		),
		Service.google
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

	try {
		if (!profile.id) {
			console.log("NO ID?!?!: ", profile);
			throw "what";
		}

		let currentUser = await getSessionUser(request);

		if (!currentUser) {
			currentUser = await User.getForOauth(profile.id, service);
			session.set("userId", setCached(currentUser));
		}

		await currentUser.setCredentials(service, {
			accessToken: accessToken,
			refreshToken: refreshToken,
		});
	} catch (e) {
		console.log("Setting Current User Failed: ", e);
		throw redirect(redirects.failure);
	}

	throw redirect(redirects.success, {
		headers: {
			"Set-Cookie": await sessionStorage.commitSession(session),
		},
	});
};
