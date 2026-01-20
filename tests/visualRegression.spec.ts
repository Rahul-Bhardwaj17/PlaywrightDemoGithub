import { test, expect } from "@playwright/test";

test("radio button test on mobile", async ({ page }) => {
    await page.goto("/AutomationPractice/", { waitUntil: "domcontentloaded" });
    await page.waitForURL("/AutomationPractice/");
    const radio2Btn = page.locator("input[value='radio2']");
    await radio2Btn.click();
    await expect(radio2Btn).toBeChecked({ timeout: 20000 });
    await expect(radio2Btn).toHaveScreenshot('radio3Btn.png');
    //  await expect(page).toHaveScreenshot();
});