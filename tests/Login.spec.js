const { test, expect } = require('@playwright/test');
const Login = require('../pages/login.js');
require('dotenv').config();

test('Login test', async ({ page }) => {

    const loginPage = new Login(page);

    await loginPage.goto();
console.log('Email:', process.env.USER_EMAIL);
console.log('Password loaded:', !!process.env.USER_PASSWORD);
    await loginPage.loginuser(
        `${process.env.USER_EMAIL}`, `${process.env.USER_PASSWORD}`
    );
await page.pause();

});