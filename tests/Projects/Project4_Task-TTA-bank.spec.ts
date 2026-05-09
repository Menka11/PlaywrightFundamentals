import {test, expect} from '@playwright/test';

test("Transfer money and verify the final balance in TTA bank application",async({page})=>{
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    await page.getByText("Sign Up").click();
    await page.getByPlaceholder('John Doe').fill('Jenny');
    await page.getByPlaceholder('you@example.com').fill('jenny@test.com');
    await page.getByPlaceholder('••••••••').fill('Test@1234');
    await page.getByText("Create Account").click();

    let initialBalance:any = await page.locator("//p[text()='Total Balance']/following-sibling::h3").innerText();
    console.log("Initial Balance:", (initialBalance));
    initialBalance = (initialBalance.replace(/[^0-9.]/g, ''));
    await page.locator('//button[normalize-space()="Transfer Funds"]').click();
    await page.locator('//input[@type="number"]').fill('10000.75');
    await page.locator('//input[@type="text"]').fill('Rent-Test');
    let tranferAmount:any = await page.locator('//input[@type="number"]').inputValue();
    await page.locator('//button[text()="Continue"]').click();
    await page.locator('//button[text()="Confirm Transfer"]').click();

    await page.locator('//button[normalize-space()="Dashboard"]').click();

    let finalBalance:any = initialBalance - tranferAmount;
    console.log("Final Balance:", finalBalance);
    await page.waitForTimeout(3000);
    expect(Number((await page.locator("//p[text()='Total Balance']/following-sibling::h3").innerText()).replace(/[^0-9.]/g,''))).toBe(finalBalance);

   

})