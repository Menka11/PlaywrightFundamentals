import {test, expect} from '@playwright/test';

test.describe("Multiple Elements Handling",()=>{
    test("Multiple Elements",async({page})=>{
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
        const elementsTexts = await page.locator("a.list-group-item").allInnerTexts();
        console.log(elementsTexts.length);

        const elementsTextsAll = await page.locator("a.list-group-item").all();
        console.log(elementsTextsAll.length);

        for (let elementText of elementsTexts) {
            if(elementText.includes("My Account")){
                await page.getByText(elementText).first().click();
                break;
        }
    }

    for(let elementTextAll of elementsTextsAll){
        console.log(await elementTextAll.getAttribute("href"));
    }

})
})
