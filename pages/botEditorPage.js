class BotEditorPage {
  constructor(page) {
    this.page = page;

    // Bot Metadata
    this.botName = page.locator('input[name="botName"]');
    this.description = page.locator('textarea[name="botDescription"]');
    this.createBtn = page.locator('button:has-text("Create")');

    // Message Box action
    this.searchBox = page.locator('input[placeholder="Search actions"]');
    this.messageBoxAction = page.locator('text=Message Box');
    
    // Message Box Config
    this.titleInput = page.locator('input[placeholder="Enter Title"]');
    this.messageInput = page.locator('textarea[placeholder="Enter Message"]');
    this.saveBtn = page.locator('button:has-text("Save")');
  }

  async fillBotDetails(name, desc) {
    await this.botName.fill(name);
    await this.description.fill(desc);
    await this.createBtn.click();
  }

  async addMessageBox() {
    await this.searchBox.fill("Message Box");
    await this.messageBoxAction.dblclick();
  }

  async configureMessageBox(title, message) {
    await this.titleInput.fill(title);
    await this.messageInput.fill(message);
    await this.saveBtn.click();
  }
}

module.exports = { BotEditorPage };
