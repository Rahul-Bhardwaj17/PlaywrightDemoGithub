import { test, expect, Locator } from "@playwright/test";

test("dynamic dropdown test", async ({ page }) => {
    await page.goto("/AutomationPractice/");
    const dynamicDropdown: Locator = page.locator("input[id=autocomplete]");
    await dynamicDropdown.fill("ind");
    const suggestions: Locator = page.locator('//li[@class="ui-menu-item"]//div');
    await page.waitForTimeout(1000);
    console.log(await suggestions.count());
    for (let i = 0; i < await suggestions.count(); i++) {
        const suggestion: Locator = suggestions.nth(i);
        if (await suggestion.textContent() === "India") {
            await suggestion.click();
            break;
        }
    }

})
