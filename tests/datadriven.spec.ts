// import { test } from "@playwright/test";
import { test, dataDriveSample } from "../Utility/index";

const users = dataDriveSample.data;

for (const user of users) {
    test(`login with ${user.username}`, async ({ page }) => {
        await page.goto("/login");
        await page.fill("#username", user.username);
        await page.fill("#password", user.password);
        await page.click("#loginBtn");
    });
}

users.forEach(user => test(`login with ${user.username}`, async ({ page }) => {
    await page.goto("/login");
    await page.fill("#username", user.username);
    await page.fill("#password", user.password);
    await page.click("#loginBtn");
}));
