import {test, expect} from '@playwright/test';

test("Basic AUth",async({browser})=>{
    const context = await browser.newContext({
        httpCredentials:{
            username: 'admin',
            password: 'admin'
        }
    })
    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByText('Basic Auth').click();
    await context.close();

})