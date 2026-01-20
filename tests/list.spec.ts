import { test, expect, Locator } from "@playwright/test";

test("list test", async ({ page }) => {
    await page.goto("/AutomationPractice/");
    const radioBtns: Locator = page.locator('input[type="radio"]');
    const radioBtnsCount = await radioBtns.count();
    console.log(`radio button Count is ${radioBtnsCount}`);
    const randomNumber: number = getRandomInt(0, 3);
    console.log(`random number is ${randomNumber}`);
    await radioBtns.nth(randomNumber).click();
    await expect(radioBtns.nth(randomNumber)).toBeChecked();
});

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;

    // 0.2 * 6 = 1.2
    // 1.2 + 0 = 1.2
    // Math.floor(1.2) = 1
}
