import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.husqvarna.com/in/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByPlaceholder('What are you looking for?').fill('Tractor');
  await page.locator('.hbd-navigation__search-form > div').first().click();
  await page.getByPlaceholder('What ')
  await page.getByRole('link', { name: 'Garden Tractor TC 130 Garden Tractors TC 130' }).click();
  await page.getByRole('heading', { name: 'HUSQVARNA TC 130' }).click();
});