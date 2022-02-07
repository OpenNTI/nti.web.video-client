#!/usr/bin/env node
"use strict";

const args = require("command-line-args");

const options = [
	{
		name: "help",
		alias: "h",
		type: Boolean,
		description: "Display this usage guide",
	},
	{
		name: "port",
		alias: "p",
		type: Number,
		description: "Specify HTTP port",
		defaultValue: 3333,
	},
	{
		name: "env",
		alias: "e",
		type: String,
		description:
			"Which environment to run the sandbox in (testing, staging, production)",
		defaultValue: "testing",
	},
	{
		name: "tablesPort",
		alias: "t",
		type: Number,
		description: "Specify local DynamoDB port",
		defaultValue: 5000,
	},
];

const config = args(options);

if (config.help) {
	console.log(
		require("command-line-usage")([
			{ header: "NextThought LMS Bridge" },
			{ header: "Options", optionList: options },
		])
	);
	return;
}

require("concurrently")([
	{ command: "npm run start:watch" },
	{ command: "npm run start:sandbox" },
]);
