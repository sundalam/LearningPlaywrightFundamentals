import { test, expect } from '@playwright/test';

test('tc#1 - Verify that the CURA page is loaded', async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    let appointment_button = page.locator("#btn-make-appointment");
    await appointment_button.click();

    let username = page.locator("#txt-username");
    let password = page.locator("#txt-password");
    let login = page.locator("#btn-login");

    await username.fill("John Doe");
    await password.fill("ThisIsNotAPassword");
    await login.click();

    let verify_message = page.locator("h2");
    await expect(verify_message).toContainText("Make Appointment");

    //await expect(page).toHaveTitle(/CURA Healthcare Service/);
});