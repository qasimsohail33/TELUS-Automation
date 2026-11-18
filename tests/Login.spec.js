const { test, expect } = require('@playwright/test');
const Login = require('../pages/login.js');

test('Login test', async ({ page }) => {

    const loginPage = new Login(page);

    await loginPage.goto();

    await loginPage.loginuser(
        'muhammad.asfand@mobilelive.ca', 'Test9812'
    );
await page.pause();

});