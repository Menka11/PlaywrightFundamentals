import {test, expect} from '@playwright/test';


test.describe("Handle various dropdown",()=>{
    test("Custom dropdown practice",async({page})=>{
        await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns")

    });

    test("Select box variants practice",async({page})=>{
        await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");

    })

})