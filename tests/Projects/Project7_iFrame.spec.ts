import {test, expect} from '@playwright/test';
test("Handle Single frame",async({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/frames/');
    let mainFrame = page.frameLocator('//iframe[@id="frame-one"]');
    await mainFrame.getByPlaceholder('e.g. Test Automation').fill("Grandi10");
    await mainFrame.locator('//input[@id="RESULT_TextField-2"]').fill("Menka Patel");
    await mainFrame.locator('//input[@id="RESULT_TextField-3"]').fill("MH-12-AC-1234");
    await mainFrame.locator('//select[@id="RESULT_RadioButton-1"]').click();
    await mainFrame.locator('//select[@id="RESULT_RadioButton-1"]').selectOption('Hatchback');
    await mainFrame.locator('//input[@id="RESULT_TextField-4"]').fill('2026');
    await mainFrame.locator('//textarea[@id="RESULT_TextArea-1"]').fill('This is practice of iframe');
    await mainFrame.getByTestId('vehicle-submit').click();
    let output = await mainFrame.locator('//div[@id="vehicle-output"]').innerText();
    expect(output).toContain( 'Grandi10');
})

test("Handle multiple frame",async({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');
    const mainFrame = page.frameLocator('//frame[@name="main"]');
    const sideFrame = page.frameLocator('//frame[@name="side"]');
    const footerFrame = page.frameLocator('//frame[@name="footer"]');
    await expect(mainFrame.locator('//h2[@id="main-heading"]')).toBeVisible();
    await sideFrame.getByTestId('side-link-registration').click();
    await expect(mainFrame.locator('//h1')).toContainText('Vehicle registration');
    await mainFrame.getByPlaceholder('e.g. Test Automation').fill("Grandi10");
    await mainFrame.locator('//input[@id="RESULT_TextField-2"]').fill("Menka Patel");
    await mainFrame.locator('//input[@id="RESULT_TextField-3"]').fill("MH-12-AC-1234");
    await mainFrame.locator('//select[@id="RESULT_RadioButton-1"]').click();
    await mainFrame.locator('//select[@id="RESULT_RadioButton-1"]').selectOption('Hatchback');
    await mainFrame.locator('//input[@id="RESULT_TextField-4"]').fill('2026');
    await mainFrame.locator('//textarea[@id="RESULT_TextArea-1"]').fill('This is practice of iframe');
    await mainFrame.getByTestId('vehicle-submit').click();
    let output = await mainFrame.locator('//div[@id="vehicle-output"]').innerText();
    expect(output).toContain( 'Grandi10');

    await expect(footerFrame.getByTestId('footer-build')).toBeVisible();

    await sideFrame.getByTestId('side-link-footer').click();
    await expect(mainFrame.getByTestId('footer-build')).toBeVisible();
});

test("Handle nested frame",async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/frames/nested-iframes");
    const frameLevel1 = page.frameLocator('//iframe[@id="pact1"]');
    const frameLevel2 = frameLevel1.frameLocator('//iframe[@id="pact2"]');
    const frameLevel3 = frameLevel2.frameLocator('//iframe[@id="pact3"]');

    await frameLevel1.locator('//input[@id="inp_val"]').fill("Jira");
    await frameLevel2.locator('#jex').fill('Playwright');
    await frameLevel3.locator('#glaf').fill('TypeScript');

})