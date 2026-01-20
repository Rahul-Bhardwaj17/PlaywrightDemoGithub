import { test, expect } from "@playwright/test";

test("validatelogin test flow", async ({ page }) => {
    await page.goto("/loginpagePractise/");
    await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');
    await page.getByRole('textbox', { name: 'Password:' }).fill('learning');

    await page.locator('span').nth(2).click();
    await page.getByRole('combobox').selectOption('Teacher');
    await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
    await page.getByRole('button', { name: 'Sign In' }).click();

    //Soft assertion
    //   await expect.soft(page).toHaveURL('https://rahulshettyaca');
    // Hard assertion
    console.log('i am executing');
    await expect.soft(page).toHaveURL('/angularpractice/shop');
    console.log('check to execute');
    await expect(page).toHaveURL(/angularpractice?\//);
    const logo = page.locator('//a[text()="ProtoCommerce"]');
    await expect(logo).toHaveText("ProtoCommerce");

    //sendkey
    //fill
    //sendkeys ==> type
    //fill ==> fill
});
