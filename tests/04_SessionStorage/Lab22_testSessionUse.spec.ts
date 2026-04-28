import {test, expect} from '@playwright/test';

test.use({
    storageState: "./auth/user-session.json"
});
test("Use of saved session",async({page})=>{
    await page.goto("https://app.vwo.com/#/login");
    await page.waitForTimeout(5000);


})