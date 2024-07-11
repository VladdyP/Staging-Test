const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '24m16h',
  e2e: {
    baseUrl: 'https://app.staging-inspirusconnects.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
