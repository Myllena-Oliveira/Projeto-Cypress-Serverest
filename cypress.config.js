const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
require('dotenv').config();

module.exports = defineConfig({
    e2e: { 
        baseUrl: "https://front.serverest.dev",
        specPattern: "cypress/e2e/**/*.{cy.js,feature}",
        env: {
            frontEmail: process.env.CYPRESS_FRONT_EMAIL, 
            frontPassword: process.env.CYPRESS_FRONT_PASSWORD,
            apiEmail: process.env.CYPRESS_API_EMAIL,
            apiPassword: process.env.CYPRESS_API_PASSWORD,
            allure: true,
            allureResultsPath: 'allure-results'
        },
        async setupNodeEvents(on, config) {
            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)],
            });
            on("file:preprocessor", bundler);
            await addCucumberPreprocessorPlugin(on, config);
            require('@shelex/cypress-allure-plugin/writer')(on, config);
            return config;
         },
    }
});