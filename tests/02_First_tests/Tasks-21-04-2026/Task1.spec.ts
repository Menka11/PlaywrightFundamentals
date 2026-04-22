// 1. First one is browser with multiple context, one browser with multiple context and multiple pages.

import {test, expect} from '@playwright/test';

test("Task-1", async({browser})=>{
    // 1st browser context
    let browserContext1 = await browser.newContext();
    let page1 = await browserContext1.newPage();
    await page1.goto("https://the-internet.herokuapp.com/broken_images");

    //2nd browser context
    let browserContext2 = await browser.newContext();
    let page2 = await browserContext2.newPage();
    await page2.goto("https://the-internet.herokuapp.com/checkboxes");

    //3rd browser context
    let browserContext3 = await browser.newContext();
    let page3 = await browserContext3.newPage();
    await page3.goto("https://the-internet.herokuapp.com/disappearing_elements");

})