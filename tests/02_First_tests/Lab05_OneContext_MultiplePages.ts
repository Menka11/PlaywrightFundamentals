import {chromium} from 'playwright';

async function multiPageTest(){
    let browser = await chromium.launch ({headless: false});
    let browserContext = await browser.newContext();

    //page1
    let page1 = await browserContext.newPage();
    await page1.goto("https://app.vwo.com");
    console.log("Page1");

    //page2
    let page2 = await browserContext.newPage();
    await page2.goto("https://www.google.com");
    console.log("Page2");

    //cleanup
    page1.close();
    page2.close();
    browserContext.close();
    browser.close();
}

multiPageTest();