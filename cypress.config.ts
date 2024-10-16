const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.opencart.ua/',
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
