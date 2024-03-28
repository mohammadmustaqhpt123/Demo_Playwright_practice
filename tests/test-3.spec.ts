import { test, expect } from '@playwright/test';
for(let i=0; i<100; i++){
test(`test ${i}`, async ({ page }) => {
  console.log('test' + i);
  await page.goto('https://demoqa.com/');
  await page.locator('.card-up').first().click();
  await page.getByText('Text Box').click();
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('Mak');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('mak@gmail.com');
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('Newyork');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('New york');
  await page.getByRole('button', { name: 'Submit' }).click();
 
});

}