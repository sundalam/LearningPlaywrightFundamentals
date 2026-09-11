import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('Ratna');
  await page.getByRole('textbox', { name: 'Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('12345');
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.getByTestId('login-button').click();
  await page.waitForTimeout(50000);
});