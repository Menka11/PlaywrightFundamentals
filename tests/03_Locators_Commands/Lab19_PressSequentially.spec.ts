import {test, expect} from '@playwright/test';

test("Press sequnetially", async({page})=>{
    await page.goto('https://awesomeqa.com/practice.html');
    await page.locator("input[name='firstname']").pressSequentially('Hi! good morning',{delay:200});

    await page.goto('https://app.vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage');
    await page.waitForTimeout(2000);
    await page.goBack();
    await page.waitForTimeout(2000);
    await page.goForward();
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForTimeout(2000);

})