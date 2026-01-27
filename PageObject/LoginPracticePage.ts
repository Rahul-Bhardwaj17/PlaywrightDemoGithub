import { Page } from "../Utility/index";

export class LoginPracticePage {

    page: Page
    constructor(page: Page) {
        this.page = page
    }

    get username() {
        return this.page.getByRole('textbox', { name: 'Username:' })
    }

    get password() {
        return this.page.getByRole('textbox', { name: 'Password:' })
    }

    get dropdown() {
        return this.page.getByRole('combobox')
    }

    get radiobutton() {
        return this.page.locator('span').nth(2)
    }

    get checkbox() {
        return this.page.getByRole('checkbox', { name: 'I Agree to the terms and' })
    }

    get submitButton() {
        return this.page.getByRole('button', { name: 'Sign In' })
    }

    async login(username: string, password: string, role: string) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.radiobutton.click()
        await this.dropdown.selectOption(role)
        await this.checkbox.check();
        await this.submitButton.click()

    }
}