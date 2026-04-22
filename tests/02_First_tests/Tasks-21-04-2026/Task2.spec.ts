// 2. Another one will be same context, multiple pages, and the practice which I have given. 
import {test, expect} from "@playwright/test";

test("Task-2",async({browser})=>{

    let browserContext = await browser.newContext();
    let page1 = await browserContext.newPage();
    await page1.goto("https://the-internet.herokuapp.com/broken_images"); 

    let page2 = await browserContext.newPage();
    await page2.goto("https://the-internet.herokuapp.com/challenging_dom");

    let page3 = await browserContext.newPage();
    await page3.goto("https://the-internet.herokuapp.com/drag_and_drop");
    })