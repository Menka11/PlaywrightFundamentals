import {test, expect} from '@playwright/test';

test("Verify invalid credentials with getByRole",async({page})=>{
    await page.goto('https://app.vwo.com/#/login');
    await page.getByRole('textbox',{name:'email'}).fill('abcd@test.com');
    await page.getByRole('textbox',{name:'password'}).fill('abc@123');
    await page.locator("//button[@data-qa='sibequkica']").click();
    await page.locator("//div[@data-qa='rixawilomi']").isVisible();

    await expect(page.locator("//div[@data-qa='rixawilomi']")).toHaveText("Your email, password, IP address or location did not match");
    await expect(page.locator("//div[@data-qa='rixawilomi']")).toContainText("did not match");
})
