import { test, expect, PageManager } from "../Utility/index";

test("validate login test flow with valid credentials", async ({ page }) => {
    await page.goto("/loginpagePractise/");
    const pageManager = new PageManager(page)
    await pageManager.loginPracticePage.login("rahulshettyacademy", "learning", "Teacher");
    await expect(page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/');
})
