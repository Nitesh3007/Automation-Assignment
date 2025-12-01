const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  use: {
    headless: false,
    baseURL: "https://community.cloud.automationanywhere.digital",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  timeout: 60000
});
