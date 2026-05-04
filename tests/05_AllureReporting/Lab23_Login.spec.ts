import{test, expect} from '@playwright/test';
import * as allure from "allure-js-commons";

test('Verify login functionality',async({page})=>{

    await allure.epic("login test");
    await allure.description("This test is to verify login functionality of VWO application");
    await allure.severity("critical");
    await allure.story("login with invalid credentials");

    await page.goto("https://app.vwo.com/#/login");
    await page.fill("#login-username","opg73@singleuseemail.site");
    await page.fill("#login-password","wingify@4321");
    await page.click("#js-login-btn");
    await page.waitForURL(/#\/(dashboard|home)/,{timeout: 15000});
    await page.waitForTimeout(3000);
    await expect(page).toHaveTitle("Login-VWO");

    
})