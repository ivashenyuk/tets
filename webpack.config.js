'use strict';

module.exports = {
	entry: "./dist/script",
	output: {
		filename: "script.js",
		library: "index"
	},

	watch: true,

	watchOptions: {
		aggregateTimeout: 100
	}
};