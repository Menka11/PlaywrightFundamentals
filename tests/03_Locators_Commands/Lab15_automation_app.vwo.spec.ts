import {test, expect} from '@playwright/test';

test('locators are lazy, strict, and auto-wait',async({page})=>{
    await page.goto('https://app.vwo.com/#/login');

    //rule 
    // id -> #
    // class -> .

    //create locators - nothing happens yetv (lazy)
    let username = page.locator("#login-username");
    let password = page.locator("#login-password");
    let signinButton = page.locator("#js-login-btn");

    await username.fill('abcd@test.com');
    await password.fill('abc@`123');
    await signinButton.click();

    let errorMessage = page.locator("#js-notification-box-msg");

    await expect(errorMessage).toContainText('Your email, password, IP address or location did not match');


})