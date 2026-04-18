import {test, expect} from '@playwright/test';   
//import libraries test and expect from playwright

test('Verify the title of the app.vwo.com',async({page}) =>{
    await page.goto('https://app.vwo.com');
    await expect(page).toHaveTitle("Login - VWO");
})