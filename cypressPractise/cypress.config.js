const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '87vwfa',
  defaultCommandTimeout: 6000,
  // env: {
  //   url: "https://karexpert.epc01.kxaction.com/patient-registration/"
  // },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/testScnerios/*.spec.js'
  },
});
