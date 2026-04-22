import{test,expect} from '@playwright/test';

test.describe("Context Reuse",async()=>{
    test.use({
        viewport: {width: 1200, height: 1290},
        locale: 'en-US'})

    test ("Open the app.vwo.com",async({page})=>{
        await page.goto("https://app.vwo.com/#/login");
    })

    test("Open thelogin page of app.vwo.com",async({page})=>{
        await page.goto("https://vwo.com/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login");
    })
})