const { defineConfig } = require("Cypress");

const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on('task', {
        lighthouse: lighthouse(),
      });

      return config;
    },
    specPattern: 'cypress/integration/*.js'
  },
      
};

