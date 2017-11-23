'use strict';

module.exports = {
	entry: "./dist/script",
	output: {
		filename: "script.js",
	},

	watch: true,

	watchOptions: {
		aggregateTimeout: 100
	}
};