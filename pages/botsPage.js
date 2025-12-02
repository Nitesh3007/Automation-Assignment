class BotsPage {
  constructor(page) {
    this.page = page;
  }

  async createTaskBot() {
  // Now click the Create button
  await this.page.locator('button[name="createOptions"]').click();

// Click on Task Bot
  await this.page.locator('button[name="createTaskbot"]').click();
  }
}

module.exports = { BotsPage };
