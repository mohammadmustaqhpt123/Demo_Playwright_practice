import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.husqvarna.com/in/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByPlaceholder('What are you looking for?').fill('Tractor');
  await page.getByRole('link', { name: 'Garden Tractor TC 130 Garden Tractors TC 130' }).click();
  await expect(page.getByRole('heading', { name: 'HUSQVARNA TC 130' })).toHaveText('HUSQVARNA TC 130');
  await expect(page.locator('span').filter({ hasText: '508 cm³' })).toHaveText('508 cm³');
  await expect(page.locator('span').filter({ hasText: '13 kW' })).toHaveText('13 kW');
 });