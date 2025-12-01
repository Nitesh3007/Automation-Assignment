class CreateTaskPage {
  constructor(page) {
    this.page = page;
    this.nameField = page.locator('input[name="name"]');
    this.descriptionField = page.locator('textarea[name="description"]');
    this.createBtn = page.locator('button:has-text("Create")');
  }

  async createTaskBot(botName = "MessageBoxBot") {
    await this.nameField.fill(botName);
    await this.descriptionField.fill("Automation Test Bot");

    // Assertion
    await expect(this.nameField).toHaveValue(botName);

    await this.createBtn.click();

    // wait for editor page
    await this.page.waitForSelector('input[placeholder="Search actions"]');
  }
}

module.exports = CreateTaskPage;
