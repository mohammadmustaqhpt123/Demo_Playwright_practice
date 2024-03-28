import { test, expect } from '@playwright/test';
for(let i=0; i<100; i++){
test(`test demoqa ${i}`, async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('heading', { name: 'Elements' }).click();
  await page.locator('li').filter({ hasText: 'Text Box' }).click();
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('mak');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('mak@gmail.com');
  await page.getByPlaceholder('name@example.com').press('Tab');
  await page.getByPlaceholder('Current Address').fill('New York');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('New york');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#name')).toContainText('Name:mak');
  await expect(page.locator('#permanentAddress-wrapper #permanentAddress')).toHaveValue('New york');
  await expect(page.locator('#email')).toContainText('Email:mak@gmail.com');
  await expect(page.locator('#output')).toContainText('Current Address :New York');
  await expect(page.locator('#output')).toContainText('Permananet Address :New york');
  await page.getByText('Check Box').click();
  await page.locator('#tree-node').getByRole('img').nth(3).click();
  await page.getByLabel('Toggle').click();
  await page.locator('li').filter({ hasText: /^Desktop$/ }).getByLabel('Toggle').click();
  await page.locator('li').filter({ hasText: /^Documents$/ }).getByLabel('Toggle').click();
  await page.locator('li').filter({ hasText: /^Downloads$/ }).getByLabel('Toggle').click();
  await page.locator('li').filter({ hasText: /^WorkSpace$/ }).getByLabel('Toggle').click();
  await page.locator('li').filter({ hasText: /^Office$/ }).getByLabel('Toggle').click();
  await page.locator('label').filter({ hasText: 'Classified' }).getByRole('img').first().click();
  await page.locator('label').filter({ hasText: 'Private' }).locator('path').first().click();
  await expect(page.locator('#result')).toContainText('You have selected :');
  await page.getByText('Radio Button').click();
  await page.getByText('Yes').click();
  await expect(page.getByRole('paragraph')).toContainText('You have selected Yes');
  await page.locator('li').filter({ hasText: 'Web Tables' }).click();
  await page.getByPlaceholder('Type to search').click();
  await page.getByPlaceholder('Type to search').fill('Alden');
  await expect(page.getByRole('grid')).toContainText('Alden');
  await page.locator('li').filter({ hasText: 'Buttons' }).click();
  await page.getByRole('button', { name: 'Double Click Me' }).click();
  await page.getByRole('button', { name: 'Click Me', exact: true }).click();
  await expect(page.locator('#dynamicClickMessage')).toContainText('You have done a dynamic click');
  await page.getByRole('button', { name: 'Right Click Me' }).click({
    button: 'right'
  });
  await expect(page.locator('#rightClickMessage')).toContainText('You have done a right click');
  await page.locator('li').filter({ hasText: /^Links$/ }).click();
});

}