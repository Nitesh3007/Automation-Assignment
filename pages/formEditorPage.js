class formEditorPage{
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

  async fillFormDetails(name) {
    await this.botName.fill(name);
    await this.createBtn.click();
  }

  async dragAndDropElement(draggableSelector, dropTargetSelector) {
    // Locate the draggable element
    const draggable = this.page.locator(draggableSelector);
    await draggable.waitFor({ state: "visible" });

    // Locate the drop target
    const dropTarget = this.page.locator(dropTargetSelector);
    await dropTarget.waitFor({ state: "visible" });

    // Get positions
    const dragBox = await draggable.boundingBox();
    const dropBox = await dropTarget.boundingBox();

    if (!dragBox) throw new Error("Draggable element did not become visible");
    if (!dropBox) throw new Error("Drop target not found");

    // Perform human-like drag
    await this.page.mouse.move(
      dragBox.x + dragBox.width / 2,
      dragBox.y + dragBox.height / 2
    );
    await this.page.mouse.down();
    await this.page.waitForTimeout(200);

    await this.page.mouse.move(
      dropBox.x + dropBox.width / 2,
      dropBox.y + dropBox.height / 2,
      { steps: 25 }
    );

    await this.page.mouse.up();
  }

  async saveConfiguration() {
    // Click the "Save" button
    const saveButton = this.page.locator(
      'button[name="save"][data-input-status="INTERACTIVE"]'
    );
    await saveButton.click();
  }
}

module.exports = { formEditorPage };
