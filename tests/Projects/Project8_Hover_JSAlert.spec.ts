import {test, expect} from '@playwright/test';
import { json } from 'node:stream/consumers';
test("Handle Hover action on menu and verify the result",async({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
    await page.getByTestId('nav-add-ons').hover();
    await page.getByTestId('test-id-Wifi').click();
    const output = await page.getByTestId('hover-output').textContent();
    const jsonOutput = JSON.parse(output!);
    console.log(jsonOutput);
    expect(jsonOutput).toMatchObject({
        clicked: '📶\nWi-Fi', 
        testId: 'test-id-Wifi', 
        at: expect.any(String)
    });
})

test('Handle right click and verify the result',async({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
    await page.getByTestId('ctx-target').click({'button':'right'});
    let allActions=[];
    allActions = await page.locator('//button[@class="context-menu-item"]').allInnerTexts();

    const totalActions = allActions.length;
    
    for(let i=0; i< totalActions; i++){
        let normalizedAction = allActions[i].replace(/\n.*/s,'');
        await page.locator(`//span[text()='${normalizedAction}']`).click();
        const output = await page.getByTestId('ctx-output').textContent();
        const jsonOutput = JSON.parse(output!);
        expect(jsonOutput).toMatchObject({
            action: normalizedAction.toLowerCase(),
            label: normalizedAction,
            target: "ctx-target",
            at: expect.any(String)
    })
        await page.getByTestId('ctx-target').click({'button':'right'});

    }
})