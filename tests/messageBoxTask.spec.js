import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import { BotsPage } from "../pages/botsPAge";
import { BotEditorPage } from "../pages/botEditorPage";

const YOUR_EMAIL="niteshthebest1@gmail.com";
const YOUR_PASSWORD="Auto@123";

test("Create a Message Box Task Bot", async ({ page }) => {

  // POM Objects
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const bots = new BotsPage(page);
  const editor = new BotEditorPage(page);

  // Go to login
  await login.goto();

  await expect(login.emailInput).toBeVisible();

  // Login
  await login.login(YOUR_EMAIL, YOUR_PASSWORD);

  // Navigate to Automation -> Bots
  await dashboard.goToBots();

  // Create Task Bot
  await bots.createTaskBot();

  const uniqueBotName = `Bot_${Date.now()}`;

  await editor.fillBotDetails(uniqueBotName);

  // Add message box action
  await editor.addMessageBox();

  // Configure message box
  await editor.configureMessageBox();

  await editor.saveConfiguration();

});
