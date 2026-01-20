import { test } from "../Utility/index";

test("alert test", async ({ page }) => {
    await page.goto("/AutomationPractice/");
    page.on('dialog', dialog => {
        console.log(dialog.message());
        dialog.accept();
    })
    await page.locator('#alertbtn').click();
});

test("confirm alert test", async ({ page }) => {
    await page.goto("/AutomationPractice/");
    page.on('dialog', dialog => {
        console.log(dialog.message());
        dialog.dismiss();
    })
    await page.locator('#confirmbtn').click();
});

test("prompt alert test", async ({ page }) => {
    await page.goto("/AutomationPractice/");
    page.on('dialog', dialog => {
        console.log(dialog.message());
        dialog.accept();
    })
    await page.locator('#name').fill('ABC');
    await page.locator('#confirmbtn').click();
});

