import {test, expect} from '@playwright/test';

test("Cookies-set, get and delete cookies",async({page, context})=>{
    await page.goto("https://app.vwo.com/#/login");
    //get cookies

    let getCookies = await context.cookies('https://app.vwo.com/#/login');
    console.log("Cookies:", getCookies);

    //set cookies
    await context.addCookies([{
        name:"myCookie- added by me",
        value:"123456",
        domain:"app.vwo.com",
        path: '/'
}]);

    //get cookies after adding new cookie
    let getCookiesAfterAdding = await context.cookies('https://app.vwo.com/#/login');
    console.log("-----------Cookies after adding new cookie-----------",getCookiesAfterAdding);

    //clear cookies

    await context.clearCookies();
    let getCookiesAfterClearing = await context.cookies('https://app.vwo.com/#/login');
    console.log("-----------Cookies after clearing cookies-----------",getCookiesAfterClearing);

})