import type { StrategyVerifyCallback } from "remix-auth";
import type {
	OAuth2Profile,
	OAuth2StrategyVerifyParams,
} from "remix-auth-oauth2";
import { OAuth2Strategy } from "remix-auth-oauth2";

export type WrikeStrategyOptions = {
	clientID: string;
	clientSecret: string;
	callbackURL: string;
	scope?: string;
};

export type WrikeStrategyExtraParams = {
	scope: string;
};

export type WrikeProfile = {
	id: string;
	firstName: string;
	lastName: string;
	_json: {
		kinds: string;
		data: [
			{
				id: string;
				firstName: string;
				lastName: string;
			}
		];
	};
	provider: string;
};

export class WrikeStrategy<User> extends OAuth2Strategy<
	User,
	WrikeProfile,
	WrikeStrategyExtraParams
> {
	private readonly userInfoURL =
		"https://www.wrike.com/api/v4/contacts?me=true";
	private scope: string | undefined;

	constructor(
		options: WrikeStrategyOptions,
		verify: StrategyVerifyCallback<
			User,
			OAuth2StrategyVerifyParams<WrikeProfile, WrikeStrategyExtraParams>
		>
	) {
		super(
			{
				authorizationURL: "https://login.wrike.com/oauth2/authorize/v4",
				tokenURL: "https://login.wrike.com/oauth2/token",
				clientID: options.clientID,
				clientSecret: options.clientSecret,
				callbackURL: options.callbackURL,
			},
			verify
		);

		this.scope = options.scope;
	}

	protected authorizationParams(): URLSearchParams {
		const params = new URLSearchParams();

		if (this.scope) {
			params.set("scope", this.scope);
		}

		return params;
	}

	protected async userProfile(accessToken: string): Promise<WrikeProfile> {
		const response = await fetch(this.userInfoURL, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});

		const payload: WrikeProfile["_json"] = await response.json();
		const data = payload.data[0];

		return {
			id: data.id,
			firstName: data.firstName,
			lastName: data.lastName,
			_json: payload,
			provider: "wrike",
		};
	}
}
