import {test, expect} from '@playwright/test';
test.describe("Handling various types of web table",()=>{
    test("Companies web table practice",async({page})=>{
        await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    })

    test("Tall buildings web table practice",async({page})=>{
        await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable1");
    })

    test("Sortable Admin Table",async({page})=>{
        await page.goto("https://app.thetestingacademy.com/playwright/tables/sortable");

    })
    test("Cricket scorecard — find the highest score",async({page})=>{

        await page.goto("https://app.thetestingacademy.com/playwright/tables/scorecard");

    })
})