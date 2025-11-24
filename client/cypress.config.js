// client/cypress/cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Assumes React runs on 3000
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx}',
  },
});