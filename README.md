# Automation-Assignment
This repository contains UI automation and API automation scripts developed using Playwright with the Page Object Model (POM) design pattern.
The automation covers three use cases:

Message Box Task Creation (UI Automation)
Form with Upload Flow (UI Automation)
Learning Instance API Flow (API Automation)

1. Install dependencies
    npm install


2. Install Playwright browsers
npx playwright install


3. Add environment variables

Create a .env file:

AA_USERNAME=your-email
AA_PASSWORD=your-password

▶️ Running the Tests
Run all tests
npx playwright test

Run UI tests only
npx playwright test tests/ui

Run API tests only
npx playwright test tests/api

Run with headed mode
npx playwright test --headed

Show HTML report
npx playwright show-report

