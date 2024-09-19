const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '24m16h',
  e2e: {
    baseUrl: 'https://app.staging-inspirusconnects.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000, // Default wait time for commands
    pageLoadTimeout: 60000,       // Timeout for page loads
    requestTimeout: 5000, 
    retries: {
      runMode: 2,  
      openMode: 1  
    },
  },
});
