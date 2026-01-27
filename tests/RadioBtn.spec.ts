import { test, expect } from "../Utility/index";

// Tests running on Pixel 5 (Mobile
//test.use({ ...devices["Pixel 5"] });

test("radio button test on mobile", async ({ page }) => {
    await page.goto("/AutomationPractice/", { waitUntil: "domcontentloaded" });
    await page.waitForURL("/AutomationPractice/");
    const radio2Btn = page.locator("input[value='radio2']");
    await radio2Btn.click();
    await expect(radio2Btn).toBeChecked({ timeout: 20000 });
})

// Tests running on iPhone 13 (Another Mobile Device)
//test.describe('iPhone Tests', () => {
//test.use({ ...devices["iPhone 13"] });

test("radio button test on iPhone", async ({ page }) => {
    await page.goto("/AutomationPractice/", { waitUntil: "domcontentloaded" });
    await page.waitForURL("/AutomationPractice/");
    const radio2Btn = page.locator("input[value='radio2']");
    await radio2Btn.click();
    await expect(radio2Btn).toBeChecked({ timeout: 20000 });
});
//});

// Tests running with default desktop settings (no device override)
test.describe('Desktop Tests', () => {
    test("radio button test on desktop", async ({ page }) => {
        await page.goto("/AutomationPractice/", { waitUntil: "domcontentloaded" });
        await page.waitForURL("/AutomationPractice/");
        const radio2Btn = page.locator("input[value='radio2']");
        await radio2Btn.click();
        await expect(radio2Btn).toBeChecked({ timeout: 20000 });
    });
});