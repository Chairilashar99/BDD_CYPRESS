const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
	require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
	require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			const bundler = createBundler({
				plugins: [createEsbuildPlugin(config)],
			});

			on("file:preprocessor", bundler);
			addCucumberPreprocessorPlugin(on, config);

			config.env.CYPRESS_BASE_URL = process.env.CYPRESS_BASE_URL;
			config.env.CYPRESS_STANDARD_USER = process.env.CYPRESS_STANDARD_USER;
			config.env.CYPRESS_STANDARD_PASS = process.env.CYPRESS_STANDARD_PASS;

			return config;
		},
		specPattern: "cypress/e2e/**/*.feature",
	},
});
