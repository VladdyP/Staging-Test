const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.staging-inspirusconnects.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
