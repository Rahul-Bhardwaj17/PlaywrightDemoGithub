import { test, dataDrivenSample, LoginPage } from "../Utility/index";

const users = dataDrivenSample.data;

for (const user of users) {
    test(`login with a ${user.username}`, async ({ page }) => {
        await page.goto("/login");
        const loginPage = new LoginPage(page)
        await loginPage.login(user.username, user.password);
    });
}

users.forEach(user => test(`login with ${user.username}`, async ({ page }) => {
    await page.goto("/login");
    const loginPage = new LoginPage(page)
    await loginPage.login(user.username, user.password);
}));
