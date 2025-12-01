class BotsPage {
  constructor(page) {
    this.page = page;
    this.createBotBtn = page.locator('button:has-text("Create Bot")');
    this.taskBotOption = page.locator('text=Task Bot');
  }

  async createTaskBot() {
    await this.createBotBtn.click();
    await this.taskBotOption.click();
  }
}

module.exports = { BotsPage };
