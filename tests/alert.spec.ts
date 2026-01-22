import { test, AutomationPracticePage } from "../Utility/index";

test("alert test", async ({ page }) => {
    await page.goto("/AutomationPractice/");
    const automationPracticePage = new AutomationPracticePage(page)
    page.on('dialog', dialog => {
        console.log(dialog.message());
        dialog.accept();
    })
    await automationPracticePage.clickOnAlertOrConfirmButton(automationPracticePage.AlertButton);
});

test("confirm alert test", async ({ page }) => {
    await page.goto("/AutomationPractice/");
    const automationPracticePage = new AutomationPracticePage(page)
    page.on('dialog', dialog => {
        console.log(dialog.message());
        dialog.dismiss();
    })
    await automationPracticePage.clickOnAlertOrConfirmButton(automationPracticePage.ConfirmButton);
});

test("prompt alert test", async ({ page }) => {
    await page.goto("/AutomationPractice/");
    const automationPracticePage = new AutomationPracticePage(page)
    page.on('dialog', dialog => {
        console.log(dialog.message());
        dialog.accept();
    })

    await automationPracticePage.enterNameInAlert('ABC');
    await automationPracticePage.clickOnAlertOrConfirmButton(automationPracticePage.ConfirmButton);
});

