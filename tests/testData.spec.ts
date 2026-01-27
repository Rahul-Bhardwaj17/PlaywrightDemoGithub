import { test, expect, sampleData, excelData } from "../Utility/index";
// import * as excelData from "xlsx";

// Define the interface for your Excel data structure
interface LoginData {
    username: string;
    password: string;
    userRole: string;
    // Add other columns from your Excel file here if needed
}

test("validatelogin test a flow q", async ({ page }) => {
    await page.goto("/loginpagePractise/");
    // await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');
    // await page.getByRole('textbox', { name: 'Password:' }).fill('learning');
    await page.getByRole('textbox', { name: 'Username:' }).fill(sampleData.loginData.username);
    await page.getByRole('textbox', { name: 'Password:' }).fill(sampleData.loginData.password);

    await page.locator('span').nth(2).click();
    // await page.getByRole('combobox').selectOption('Teacher');
    await page.getByRole('combobox').selectOption(sampleData.loginData.userRole);
    await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
    await page.getByRole('button', { name: 'Sign In' }).click();

    //Soft assertion
    //   await expect.soft(page).toHaveURL('https://rahulshettyaca');
    // Hard assertion
    console.log('i am executing');
    await expect.soft(page).toHaveURL('/angularpractice/shop');
    console.log('check to execute');
    await expect(page).toHaveURL(/angularpractice?\//);
    const logo = page.locator('//a[text()="ProtoCommerce"]');
    await expect(logo).toHaveText("ProtoCommerce");

    //sendkey
    //fill
    //sendkeys ==> type
    //fill ==> fill
});

// Read Excel data before describing tests
const workbook = excelData.readFile('./Utility/sampleData/sampleExcelData.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const loginDataFromExcel: LoginData[] = excelData.utils.sheet_to_json(sheet);

// Data-driven testing: iterate over each row in Excel
for (const userData of loginDataFromExcel) {
    test(`validatelogin test a flow a with excel input - User: ${userData.username}`, async ({ page }) => {
        await page.goto("/loginpagePractise/");

        await page.getByRole('textbox', { name: 'Username:' }).fill(userData.username);
        await page.getByRole('textbox', { name: 'Password:' }).fill(userData.password);

        await page.locator('span').nth(2).click();
        await page.getByRole('combobox').selectOption(userData.userRole);
        await page.getByRole('checkbox', { name: 'I Agree to the terms and' }).check();
        await page.getByRole('button', { name: 'Sign In' }).click();

        // Assertions
        console.log(`Testing with user: ${userData.username}`);
        await expect.soft(page).toHaveURL('/angularpractice/shop');
        await expect(page).toHaveURL(/angularpractice?\//);
        const logo = page.locator('//a[text()="ProtoCommerce"]');
        await expect(logo).toHaveText("ProtoCommerce");
    });
}
