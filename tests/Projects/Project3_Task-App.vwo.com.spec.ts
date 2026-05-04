import {test, expect} from '@playwright/test';

test("Verify error message for invalid credentials for app.vwo.com",async({page}) =>{
    await page.goto('https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage');
    await page.getByRole('textbox',{name:'email'}).fill('invalid@gmail.com');
    await page.locator("input[id='page-free-trial-step1-cu-gdpr-consent-checkbox']").check();
    await page.locator("//button[text()='Create a Free Trial Account']").click();
    await expect (page.locator('//div[text()="gmail.com doesn\'t look like a business domain. Please use your business email."]')).toBeVisible();
})