import {test, expect} from '@playwright/test';

test('Goto with different waitUntil option',async({page})=>{
    
    await page.goto("https://app.vwo.com",{waitUntil:"commit"});
    console.log("commit: server responded");

    await page.goto("https://app.vwo.com",{waitUntil:"domcontentloaded"});
    console.log("domcontentloaded: HTML parsed");

    await page.goto("https://app.vwo.com",{waitUntil:"load"});
    console.log("load: all resources loaded");
     
    await page.goto("https://app.vwo.com",{waitUntil:"networkidle"});
    console.log("networkidel: no requests for 500ms");
})