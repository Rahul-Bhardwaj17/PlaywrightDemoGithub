import { Page, Locator } from "@playwright/test";

export class AutomationPracticePage {

    page: Page;
    constructor(page: Page) {
        this.page = page
    }

    get AlertButton() {
        return this.page.locator('#alertbtn');
    }

    get ConfirmButton() {
        return this.page.locator('#confirmbtn');
    }

    get enterName() {
        return this.page.locator('#name');
    }

    async clickOnAlertOrConfirmButton(buttonType: Locator) {
        await buttonType.click();
    }

    async enterNameInAlert(name: string) {
        await this.enterName.fill(name);
    }
} 