class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  async goToBots() {
// After clicking Automation
await this.page.locator('a[name="automations"]').click();

// Wait for the bots table to finish rendering
await this.page.waitForSelector('div.rio-toolbar', { state: 'visible', timeout: 15000 });

// Wait for the page to load
await this.page.waitForLoadState('load');
}
}

module.exports = DashboardPage;
