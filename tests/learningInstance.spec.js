import { test, expect, request } from "@playwright/test";

test.describe("Learning Instance API Automation", () => {
  let apiContext;
  let authToken;
  let baseUrl = "https://community.cloud.automationanywhere.digital"; // change if needed

  test.beforeAll(async () => {
    apiContext = await request.newContext({
      baseURL: baseUrl,
    });

    // LOGIN API
    const loginResponse = await apiContext.post("/v2/authentication", {   // <-- update exact API path  
      data: {
        username: "niteshthebest1@gmail.com",
        password: "Auto@123"
      }
    });

    // Validate Login
    expect(loginResponse.status(), "Login API failed").toBe(200);

    const loginBody = await loginResponse.json();
    console.log("Login Response:", loginBody);

    //  Bearer token extraction
    authToken = loginBody?.token;
    expect(authToken, "Token not found in Login Response").toBeTruthy();

    // Attach Authorization for next API calls
    apiContext = await request.newContext({
      baseURL: baseUrl,
      extraHTTPHeaders: {
        Authorization: authToken
      }
    });
  });

  test("Create Learning Instance & Validate", async () => {

    const payload = {
      name: "Automation-Test-Instance-" + Date.now(),
      description: "Created via Playwright API automation",
      type: "UNSTRUCTURED",     
      language: "ENGLISH"
    };

    const createResp = await apiContext.post("/cognitive/v3/learninginstances", {
      data: payload
    });

    // Validate HTTP Status Code
    expect(createResp.status(), "Instance Creation Failed").toBe(200);

    expect(createResp.timing().responseEnd - createResp.timing().requestStart)
      .toBeLessThan(3000);

    const createdBody = await createResp.json();
    console.log("Created Instance:", createdBody);
  });

});
