class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  async goToBots() {

  // STEP 1 → Click Automation in sidebar
  await this.page.locator('a[name="automations"]').click();

  // STEP 2 → Wait for Bots node to appear
  await this.page.waitForSelector('span[title="Bots"]', { timeout: 15000 });

  // STEP 3 → Click Bots
  await this.page.getByText('Bots', { exact: true }).click();

  // STEP 4 → Confirm we reached Bots page
  await this.page.waitForSelector('button[name="createOptions"]', { timeout: 15000 });
}
}

module.exports = DashboardPage;
