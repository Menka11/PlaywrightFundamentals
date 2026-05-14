import {test, expect, Locator} from '@playwright/test';

test("Handle SVG",async({page})=>{
    await page.goto('https://www.flipkart.com/search');
    await page.locator("name[name='q']").fill("macmini");

    const svgElments: Locator = page.locator('svg');
    await svgElments.first().click();
    await page.waitForTimeout(2000);


    //1. search for macmini click on SVG ison 
    //2. print all the titles of all results 
    //3. Get the results on teh first page and Cick on the low to high button anf give me the cheapest macmini available on the flipkart 

    



})