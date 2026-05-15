import{test, expect} from "@playwright/test";
test("Handle Shadow DOM",async({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/");
    await page.getByTitle('user name field').fill('Jenny');
    await page.waitForTimeout(4000);
    await page.getByPlaceholder('Enter pizza name').fill('Margherita');
    // await page.locator('#training').fill('Automation Testing Training'); unable to access directly as it is in ShadowRoot close
    // await page.getByPlaceholder('user password field').fill('abc@1234'); unable to access directly as it is inside sgadowroot close 
    await page.getByText('Click to practice iframe inside shadow dom scenario').click();
    await page.waitForTimeout(5000);
    


})