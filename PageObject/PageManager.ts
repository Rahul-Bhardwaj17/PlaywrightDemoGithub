import { Page, LoginPage, LoginPracticePage, AutomationPracticePage } from "../Utility/index";

export class PageManager {

    page: Page;
    loginPage: LoginPage;
    loginPracticePage: LoginPracticePage;
    automationPracticePage: AutomationPracticePage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.loginPracticePage = new LoginPracticePage(this.page);
        this.automationPracticePage = new AutomationPracticePage(this.page);
    }
}