import {test, expect} from '@playwright/test';
import { exitCode } from 'node:process';

test('simple goto - users load by default',async({page})=>{
    await page.goto("https://example.com")
    
    // no waitunitil sepcified -defaluts tp load 
    let title = await page.title();
    console.log("Title", title);

    await expect(page).toHaveURL("https://example.com");
    console.log("URL verified");

})

test("Navigating with curtom refere all",async({page})=>{
    await page.goto("https://app.vwo.com/loading",{

        referer: 'https://google.com/search?q=testing academy'  //referer- is tells about previous URL
    });
    console.log("Page loaded with Google as referer");
    console.log("URL: ", page.url())
});
