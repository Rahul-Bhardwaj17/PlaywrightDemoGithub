import { test, expect, chromium } from "../Utility/index";

test("sample test", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle(/Playwright/);
});

test("sample test 1", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle(/Playwright/);
});