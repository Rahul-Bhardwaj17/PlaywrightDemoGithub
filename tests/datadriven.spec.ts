import { test, expect } from "@playwright/test";
import dataDriveSample from "../sampleData/dataDrivenSample.json";

const users = dataDriveSample.data;
// const users = [
//     { username: "admin", password: "admin123" },
//     { username: "user1", password: "user123" }
// ];

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
