const { expect } = require('@playwright/test');

class MessageBoxPage {
  constructor(page) {
    this.page = page;
  }

  async addMessageBox() {
    // Search Message Box
    await this.page.locator('input[placeholder="Search actions"]').fill("Message Box");

    // Double click Message Box in actions panel
    await this.page.getByText('Message Box', { exact: false }).first().dblclick();

    // Right panel fields
    this.titleField = this.page.locator('input[name="title"]');
    this.messageField = this.page.locator('textarea[name="message"]');

    // Assert fields visible
    await expect(this.titleField).toBeVisible();
    await expect(this.messageField).toBeVisible();

    // Fill message box fields
    await this.titleField.fill("Automation Test Title");
    await this.messageField.fill("This is a test message");
  }

  async save() {
    await this.page.getByText("Save", { exact: true }).click();

    // Wait for save confirmation (toast)
    await this.page.waitForSelector('text=Bot saved successfully', { timeout: 10000 });
  }
}

module.exports = MessageBoxPage;
