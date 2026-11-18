const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  await page.goto('https://qa.mysalesorders.com/en-US/login');
  await page.getByRole('textbox', { name: 'Email' }).fill('m');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('muhammad.asfand@mobilelive.ca');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test9812');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('img', { name: 'audio-loading' })).toBeHidden();
  
  await expect(page.locator('h4')).toContainText('Application Dashboard');
  await expect(page.getByRole('img', { name: 'audio-loading' })).toBeHidden();
  await expect(page.locator('#root')).toContainText('Access Now');
  await page.getByRole('button', { name: 'Access Now' }).first().click();
  await page.getByRole('radio', { name: 'Yes' }).click();
  await page.getByPlaceholder('by First Name, Last Name,').click();
  await page.getByPlaceholder('by First Name, Last Name,').fill('QA');
  await page.locator('#streetNumber_VUL').click();
  await page.locator('#streetNumber_VUL').fill('123');
  await page.locator('#streetName_VUL').click({
    modifiers: ['Shift']
  });
  await page.locator('#streetName_VUL').fill('Test');
  await page.locator('#unitNumber_VUL').click({
    modifiers: ['Shift']
  });
  await page.locator('#unitNumber_VUL').fill('test');
  await page.locator('#unitType_VUL').selectOption('Upper');
  await page.locator('#city_VUL').click();
  await page.locator('#city_VUL').fill('test');
  await page.locator('#province_VUL').selectOption('Manitoba');
  await page.locator('#postalCode_VUL').click();
  await page.locator('#postalCode_VUL').fill('R5G 0A1');
  await page.getByRole('button', { name: 'New Order' }).click();
  await expect(page.locator('#title-label')).toContainText('Quote');
  await page.pause();
});
