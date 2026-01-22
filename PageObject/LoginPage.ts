import { Page } from "../Utility/index";

export class LoginPage {

    page: Page
    constructor(page: Page) {
        this.page = page
    }

    get username() {
        return this.page.locator('#username')
    }

    get password() {
        return this.page.locator('#password')
    }

    get submitButton() {
        return this.page.locator('#loginBtn')
    }

    async login(username: string, password: string) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.submitButton.click()
    }
}