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

			config.env.BASE_URL = process.env.BASE_URL;
			config.env.STANDARD_USER = process.env.STANDARD_USER;
			config.env.STANDARD_PASS = process.env.STANDARD_PASS;

			return config;
		},
		specPattern: "cypress/e2e/**/*.feature",
	},
});
