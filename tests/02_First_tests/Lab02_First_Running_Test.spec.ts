import {test, expect} from '@playwright/test';


test("Verify our first TC",async({page})=>{
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login-VWO");
    const imageVWO = page.locator("img");
    await expect(imageVWO).toBeVisible();
    
})