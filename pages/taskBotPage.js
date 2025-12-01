import { Page } from "@playwright/test";

export class TaskBotPage {
  nameInput;
  descriptionInput;
  createButton;

  constructor(private page: Page) {
    this.nameInput = this.page.locator("input[name='name']");
    this.descriptionInput = this.page.locator("textarea[name='description']");
    this.createButton = this.page.locator("//button[text()='Create']");
  }

  async fillDetails(name: string, desc: string) {
    await this.nameInput.fill(name);
    await this.descriptionInput.fill(desc);
    await this.createButton.click();
  }
}
