import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import { createForm } from "../pages/createForm";
import { formEditorPage } from "../pages/formEditorPage";

const YOUR_EMAIL = "niteshthebest1@gmail.com";
const YOUR_PASSWORD = "Auto@123";

test("Create form with upload flow", async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const form = new createForm(page);
  const editor = new formEditorPage(page);

  const browseFile = page.locator('a.preview-label__browseText');
  const textInput = page.locator('input.textinput-cell-input-control');
  const saveButton = page.locator('button[aria-label="save"]');

  //locators for draggable elements
  const selectFileDraggable = '[data-item-name="Select File"] .editor-palette-item__child--is_draggable';
  const textBoxDraggable = '[data-item-name="Text Box"] .editor-palette-item__child--is_draggable';
  const dropTarget = '.editor-layout__debug-content';

  // Go to login
  await login.goto();

  await expect(login.emailInput).toBeVisible();

  // Login
  await login.login(YOUR_EMAIL, YOUR_PASSWORD);

  // Navigate to Automation -> Bots
  await dashboard.goToBots();

  // Create Task Bot
  await form.createTaskBot();

  const uniqueFormName = `Form_${Date.now()}`;

  await editor.fillFormDetails(uniqueFormName);

  // Drag Select File element
  await editor.dragAndDropElement(selectFileDraggable, dropTarget);

  // Drag Text Box element
  await editor.dragAndDropElement(textBoxDraggable, dropTarget);

  // Click on the 'browse' link
  await browseFile.click();

  // Click on the text input and type "this is random text"
  await textInput.click();
  await textInput.fill("this is random text");

  // Click on the 'Save' button
  await saveButton.click();
});
