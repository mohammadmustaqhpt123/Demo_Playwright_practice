import { test, expect } from '@playwright/test';

let unique= 210;

for(let i=0; i<100; i++){

test(`test automation${i}`, async ({ page }) => {
  unique+=i
  console.log(`test automation${i}`)
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('mak'+unique);
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('mak@123'+unique);
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByLabel('Mr.').check();
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('mak@123'+unique);
  await page.locator('#days').selectOption('5');
  await page.locator('#months').selectOption('5');
  await page.locator('#years').selectOption('2006');
  await page.getByLabel('Sign up for our newsletter!').check();
  await page.getByLabel('Receive special offers from').check();
  await page.getByLabel('First name *').click();
  await page.getByLabel('First name *').fill('mak'+unique);
  await page.getByLabel('Last name *').click();
  await page.getByLabel('Last name *').fill('mak'+unique);
  await page.getByLabel('Company', { exact: true }).click();
  await page.getByLabel('Company', { exact: true }).fill('mak'+unique);
  await page.getByLabel('Address * (Street address, P.').click();
  await page.getByLabel('Address * (Street address, P.').fill('mak'+unique);
  await page.getByLabel('Address 2').click();
  await page.getByLabel('Address 2').fill('mak'+unique);
  await page.getByLabel('Country *').selectOption('United States');
  await page.getByLabel('State *').click();
  await page.getByLabel('State *').fill('new york');
  await page.getByLabel('City *').click();
  await page.getByLabel('City *').fill('new york');
  await page.locator('#zipcode').click();
  await page.locator('#zipcode').fill('943823'+unique);
  await page.getByLabel('Mobile Number *').click();
  await page.getByLabel('Mobile Number *').fill('294832023'+unique);
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.locator('b')).toContainText('Account Created!');
  await expect(page.locator('#form')).toContainText('Congratulations! Your new account has been successfully created!');
  await page.getByRole('link', { name: 'Continue' }).click();
  // await page.frameLocator('iframe[name="aswift_4"]').getByLabel('Close ad').click();
  await page.locator('#accordian div').filter({ hasText: 'Men' }).nth(3).click();
  await page.getByRole('link', { name: ' Men' }).click();
  await page.getByRole('link', { name: 'Jeans' }).click();
  await page.getByRole('link', { name: ' View Product' }).first().click();
  await page.locator('#quantity').click();
  await page.locator('#quantity').click();
  await page.locator('#quantity').click();
  await page.locator('#quantity').click();
  await page.locator('#quantity').click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByPlaceholder('Your Name').click();
  await page.getByPlaceholder('Your Name').fill('mak'+unique);
  await page.getByPlaceholder('Email Address', { exact: true }).click();
  await page.getByPlaceholder('Email Address', { exact: true }).fill('mak'+unique+'@gmail.com');
  await page.getByPlaceholder('Add Review Here!').click();
  await page.getByPlaceholder('Add Review Here!').fill('mak'+unique);
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: '(6) Polo' }).click();
  await page.locator('div:nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByPlaceholder('Your Name').click();
  await page.getByPlaceholder('Your Name').fill('mak'+unique);
  await page.getByPlaceholder('Email Address', { exact: true }).click();
  await page.getByPlaceholder('Email Address', { exact: true }).fill('mak'+unique+'@gmail.com');
  await page.getByPlaceholder('Add Review Here!').click();
  await page.getByPlaceholder('Add Review Here!').fill('mak'+unique);
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: ' Home' }).click();
  await page.getByRole('link', { name: '(5) H&M' }).click();
  await page.getByRole('link', { name: ' View Product' }).nth(4).click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('link', { name: ' Contact us' }).click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('mak'+unique);
  await page.getByPlaceholder('Email', { exact: true }).click();
  await page.getByPlaceholder('Email', { exact: true }).fill('mak'+unique+'@gmail.com');
  await page.getByPlaceholder('Subject').click();
  await page.getByPlaceholder('Subject').fill('mak'+unique);
  await page.getByPlaceholder('Your Message Here').click();
  // 

  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('link', { name: 'Place Order' }).click();
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  await page.locator('input[name="name_on_card"]').fill('39q84798r'+unique);
  await page.locator('input[name="card_number"]').click();
  await page.locator('input[name="card_number"]').fill('98423094'+unique);
  await page.getByPlaceholder('ex.').click();
  await page.getByPlaceholder('ex.').fill('309'+unique);
  await page.getByPlaceholder('MM').click();
  await page.getByPlaceholder('MM').fill(''+unique);
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').fill('19'+unique);
  await page.goto('https://automationexercise.com/payment_done/3499');
  await page.getByRole('link', { name: 'Continue' }).click();
});

}