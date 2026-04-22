import {chromium} from "playwright";

async function multiUserTest(){
    let browser = await chromium.launch({headless:false});

    //admin
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.vwo.com");
    console.log("Admin Page Title: ", await adminPage.title()); 


    //viewer
    let viewerContext = await browser.newContext();
    let viewerPage = await viewerContext.newPage();
    await viewerPage.goto("https://app.vwo.com");
    console.log("VIewer Page title", await viewerPage.title());

    //clean up
    adminContext.close();
    viewerContext.close();
    adminPage.close();
    viewerPage.close();
    browser.close();
}

multiUserTest();