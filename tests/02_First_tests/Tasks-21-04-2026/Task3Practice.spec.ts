import {chromium} from 'playwright';
import {test, expect} from '@playwright/test';

test("Task-3 for Practice",async()=>{
    let browser = await chromium.launch({headless: false});
    let browserContext = await browser.newContext();
    let page1 = await browserContext.newPage();
    await page1.goto("https://the-internet.herokuapp.com/drag_and_drop");

    let page2 = await browserContext.newPage();
    await page2.goto("https://the-internet.herokuapp.com/disappearing_elements");

    let page3 = await browserContext.newPage();
    await page3.goto("https://the-internet.herokuapp.com/entry_ad");


})