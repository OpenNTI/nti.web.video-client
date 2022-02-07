/**
 * babel is only being used for testing, it is NOT used by remix
 *
 * Taken from https://github.com/sergiodxa/remix-auth
 */

module.exports = {
	presets: [
		["@babel/preset-env", { targets: { node: "current" } }],
		["@babel/preset-react", { runtime: "automatic" }],
		"@babel/preset-typescript",
	],
};
