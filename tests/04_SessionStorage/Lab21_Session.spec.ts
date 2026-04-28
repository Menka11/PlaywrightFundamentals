import { chromium } from 'playwright';

async function saveSession() {
    let browser = await chromium.launch({headless: false});
    let browserContext = await browser.newContext();
    let page = await browserContext.newPage();

    await page.goto("https://app.vwo.com/#/login");
    await page.getByRole('textbox', { name: 'email' }).fill('abcd@test.com');
    await page.getByRole('textbox', { name: 'password' }).fill('abc@123');
    await page.locator("//button[@data-qa='sibequkica']").click();

    await page.waitForTimeout(5000);

    await browserContext.storageState({path: "./auth/user-session.json"});

    console.log("Session saved successfully");

    await browser.close();

}

saveSession();
