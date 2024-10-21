const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.opencart.ua/',
    defaultCommandTimeout: 10000,  // 10 секунд для команд
    pageLoadTimeout: 60000,        // 60 секунд для завантаження сторінки
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});

