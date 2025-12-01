import {test, expect} from '@playwright/test';

test('Ecom Test', async ({page}) => {

    const registerLink = page.getByRole('link', { name: 'Register' });
    const fname = page.getByRole('textbox', { name: 'First Name' });
    const lname = page.getByRole('textbox', { name: 'Last Name' });
    const email = page.getByRole('textbox', { name: 'email@example.com' });
    const phone = page.getByRole('textbox', { name: 'enter your number' });
    const occupation = page.getByRole('combobox');
    const male = page.getByRole('radio', { name: 'Male', exact: true });
    const pass = page.getByRole('textbox', { name: 'Passsword' });
    const cpass = page.getByRole('textbox', { name: 'Confirm Password' });
    const a18 = page.getByRole('checkbox');
    const registerBtn = page.getByRole('button', { name: 'Register' });
    const confirmLogin = page.locator('.btn.btn-primary');
    const userName = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const loginBtn = page.locator('#login');

    const products = page.locator('.card-body b');

    //Registration flow
    await page.goto('https://rahulshettyacademy.com/client/');
    // await registerLink.click();
    // await fname.fill('Dizzddd');
    // await lname.fill('Dzddddldkd');
    // await email.fill('dildkj3kjjkh33li@gmail.com');

    // await phone.fill('1234567890');
    // await occupation.selectOption('3: Engineer');
    // await male.check();
    // await pass.fill('Pass@123');
    // await cpass.fill('Pass@123');
    // await a18.check();
    // await registerBtn.click();
    // await expect(confirmLogin).toHaveText('Login');

    // await confirmLogin.click();
    await userName.fill('dzdz@gmail.com');
    await password.fill('Pass@123');
    await loginBtn.click();

    //await page.waitForLoadState('networkidle');
    await products.last().waitFor();

    console.log(await products.nth(0).textContent());
    console.log(await products.allTextContents());





});