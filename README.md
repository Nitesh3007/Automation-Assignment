This repository contains **UI automation** and **API automation** scripts developed using **Playwright** with the **Page Object Model (POM)** design pattern.
The automation covers three use cases:

1. **Message Box Task Creation (UI Automation)**
2. **Form with Upload Flow (UI Automation)**
3. **Learning Instance API Flow (API Automation)**

## 🚀 Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Install Playwright browsers

```bash
npx playwright install
```

### 3. Add environment variables

Create a `.env` file:

```
LOGIN_USERNAME=your-email
LOGIN_PASSWORD=your-password

```

---

##  Running the Tests

### Run all tests

```bash
npx playwright test
```

### Run UI tests only

```bash
npx playwright test tests/ui
```

### Run API tests only

```bash
npx playwright test tests/api
```

### Show HTML report

```bash
npx playwright show-report
```

---


# 🛠 Tools & Frameworks Used

| Component      | Technology                       |
| -------------- | -------------------------------- |
| Automation     | **Playwright**                   |
| Design Pattern | **Page Object Model (POM)**      |
| Language       | **TypeScript**                   |
| Test Runner    | Playwright Test                  |
| Reporting      | Playwright HTML Report           |

---
