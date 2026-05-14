import {test, expect} from '@playwright/test';

test.only("Handling SVG from practice page",async({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/svg');

    await page.locator('id=circle-red').click();

    
    const output = await page.getByTestId('.shapes-output').textContent();
    expect(output).toContain('red-circle');
   
})