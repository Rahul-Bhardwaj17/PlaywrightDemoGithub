import { test, PageManager } from "../Utility/index";

let pageManager: PageManager;
test.beforeEach(async ({ page }) => {
    await page.goto("/AutomationPractice/");
    pageManager = new PageManager(page)
})

test("alert test", async ({ page }) => {
    page.on('dialog', dialog => {
        console.log(dialog.message());
        dialog.accept();
    })
    await pageManager.automationPracticePage.clickOnAlertOrConfirmButton(pageManager.automationPracticePage.AlertButton);
});

test("confirm alert test", async ({ page }) => {
    page.on('dialog', dialog => {
        console.log(dialog.message());
        dialog.dismiss();
    })
    await pageManager.automationPracticePage.clickOnAlertOrConfirmButton(pageManager.automationPracticePage.ConfirmButton);
});

test("prompt alert test", async ({ page }) => {
    page.on('dialog', dialog => {
        console.log(dialog.message());
        dialog.accept();
    })

    await pageManager.automationPracticePage.enterNameInAlert('ABC');
    await pageManager.automationPracticePage.clickOnAlertOrConfirmButton(pageManager.automationPracticePage.ConfirmButton);
});

