import { test, expect, LoginPracticePage } from "../Utility/index";

test("validate login test flow with valid credentials", async ({ page }) => {
    await page.goto("/loginpagePractise/");
    const loginPage = new LoginPracticePage(page)
    await loginPage.login("rahulshettyacademy", "learning", "Teacher");
    await expect(page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/');
})
