const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '24m16h',
  env: {
    canyonBaseUrl: 'https://www.canyon.com/en-us/',
  },
  e2e: {
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
