import { Page } from "../Utility/index";

export class LoginPage {
    constructor(public page: Page) { }

    /**
     * Get the locator of username
     */
    get username() {
        return this.page.getByRole('textbox', { name: 'Username:' })
    }

    /**
     * Get the locator of password
     */
    get password() {
        return this.page.getByRole('textbox', { name: 'Password:' })
    }

    /**
     * Get the locator of login button
     */
    get loginButton() {
        return this.page.locator('span').nth(2)
    }

    /**
     * Get the locator of select user
     */
    get selectUser() {
        return this.page.getByRole('combobox')
    }

    /**
     * Get the locator of checkbox
     */
    get checkbox() {
        return this.page.getByRole('checkbox', { name: 'I Agree to the terms and' })
    }

    /**
     * Get the locator of alert
     */
    get signInButton() {
        return this.page.getByRole('button', { name: 'Sign In' })
    }

    /**
     * Navigate to login page
     */
    async navigateToLoginPage() {
        await this.page.goto("/loginpagePractise/")
    }

    /**
     * Login to the application
     * @param username 
     * @param password 
     */
    async login(username: string, password: string) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }

    async selectRoleAndSubmit(role: string) {
        await this.selectUser.selectOption(role)
        await this.checkbox.check()
        await this.signInButton.click()
    }

}