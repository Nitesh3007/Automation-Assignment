class BotEditorPage {
  constructor(page) {
    this.page = page;

    // Bot Metadata
    this.botName = page.locator(
      'input.textinput-cell-input-control[name="name"]'
    );
    this.createBtn = page.locator('button[name="submit"]');

    // Message Box action
    this.searchBox = page.locator('input[placeholder="Search actions"]');
    this.messageBoxAction = page.locator("text=Message Box");

    // Message Box Config
    this.titleInput = page.locator('input[placeholder="Enter Title"]');
    this.messageInput = page.locator('textarea[placeholder="Enter Message"]');
    this.saveBtn = page.locator('button:has-text("Save")');
    this.inputField = page.locator('input.editor-palette-search__input');

    // Quick add button
    this.quickAddButton = page.locator(
      'button[data-path="TaskbotNodeQuickAdd"][name="taskbot-node-quick-add"]'
    )

    // Quick add search button
    this.quickAddSearchInput=page.locator(
      'input.textinput-cell-input-control[name="quick-add-search"]'
    )
  }

  async fillBotDetails(name) {
    await this.botName.fill(name);
    await this.createBtn.click();
  }

  async addMessageBox() {

    // Click on the "Quick add" button
    await this.quickAddButton.click();

    // Type "Message Box" in the quick-add search input and press Enter
    await this.quickAddSearchInput.fill("Message Box");
    await this.quickAddSearchInput.press("Enter");

  }

  async configureMessageBox() {
    // Enter a random unique message in the content input
    const contentInput = this.page.locator(
      'div.textinput-cell-input-content[name="content"]'
    );
    await contentInput.fill(`Random Message ${Date.now()}`);

  }

  async saveConfiguration() {
    // Click the "Save" button
    const saveButton = this.page.locator(
      'button[name="save"][data-input-status="INTERACTIVE"]'
    );
    await saveButton.click();
}
}

module.exports = { BotEditorPage };
