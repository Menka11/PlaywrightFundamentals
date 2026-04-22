import {chromium, Browser, BrowserContext, Page} from "playwright"

async function run(){
    //level-1: Launch Browser - Heaviest operation, do it once
    let browser: Browser = await chromium.launch({headless: false});
    console.log("Browser launch");

    //level-2- create context - fresh session, isolated cookies

    let browserContext: BrowserContext = await browser.newContext();
    console.log("Browser Context created");

    //level-3- create page - tab in the browser

    let page: Page = await browserContext.newPage();
    console.log("Page created");

    await page.goto("https://app.vwo.com");
    console.log("Navigate to app.vwo.com", await page.title());

        //cleanup

        await page.close();
        await browserContext.close();
        await browser.close();
}

run();