import { test, expect } from "@playwright/test";

test.describe.only('context handler', () => {
    test.describe.configure({ mode: 'parallel' });
    test.beforeEach(async ({ page }) => {
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        test.setTimeout(120000);
    })
    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test("tabs test @smoke", async ({ page }) => {
        test.slow();
        //  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        await test.step("open new tab", async () => {
            const [childPage] = await Promise.all([
                page.waitForEvent("popup"),
                page.locator("fieldset a#opentab").click(),
            ]);
            await childPage.waitForLoadState();
            await expect(childPage.locator('//p[contains(text(),"Need Help? email us")]//following-sibling::span')).toHaveText('info@qaclickacademy.com')
        });
    });

    test("windows test @smoke", async ({ page, context }) => {
        //  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        const [newWindow] = await Promise.all([
            context.waitForEvent("page"),
            page.locator("#openwindow").click(),
        ]);
        await newWindow.waitForLoadState();
        await expect(newWindow.locator('//p[contains(text(),"Need Help? email us")]//following-sibling::span')).toHaveText('info@qaclickacademy.com')
    });


});