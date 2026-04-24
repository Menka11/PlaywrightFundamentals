import{test} from '@playwright/test';

test('Set referer for entire context',async({browser})=>{
    let context = await browser.newContext({
        extraHTTPHeaders: {
            "referer":"https://thetestingacademy.com"
        }
    });

    let page1 = await context.newPage();
    await page1.goto("https://app.vwo.com");
    console.log("Page-1 partner referer included");

    let page2 = await context.newPage();
    await page2.goto("https://katalon-demo-cura.herokuapp.com/");
    console.log("Page-2 parter referer included");

})