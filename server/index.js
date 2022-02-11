const { createRequestHandler } = require("@remix-run/architect");

const dotenv = require("dotenv");

dotenv.config();

exports.handler = createRequestHandler({
	build: require("./build"),
});
