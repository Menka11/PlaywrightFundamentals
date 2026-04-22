import {test, expect} from "@playwright/test";

test('fresh context like incognito', async ({ browser }) => {
    // Each newContext() is like incognito
    // No shared cookies, localStorage, etc.
    
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();
    
    // These are completely isolated
    const page1 = await context1.newPage();
    const page2 = await context2.newPage();
    
    await context1.close();
    await context2.close();
});

test('Listen for new page',async({browser})=>{
    let context = await browser.newContext();

    //listen for the new page
    context.on('page', page =>{
        console.log("new page open", page.url());
    })
    const page = await context.newPage();
    await page.goto("https://app.vwo.com");
    console.log("get the url of the page", page.url());
})