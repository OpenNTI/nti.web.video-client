import * as path from "path";

import { Config } from "@jest/types";
import { defaults as JestConfig } from "jest-config";

const config: Config.InitialOptions = {
	verbose: Boolean(process.env.CI),
	rootDir: path.resolve("."),
	setupFilesAfterEnv: ["<rootDir>/test/jest/setup.ts"],
	transform: {
		"\\.[jt]sx?$": [
			"babel-jest",
			{ configFile: "./test/jest/babel.config.js" },
		],
	},
};

export default config;
