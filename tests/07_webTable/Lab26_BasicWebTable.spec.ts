import {test, expect, Locator} from '@playwright/test';
test.describe("Web table gandling",()=>{
    test("Verify Helen Bennett is acuatlly living in UK",async({page})=>{
        await page.goto("https://awesomeqa.com/webtable.html");
        // in this locator - //table[@id='customers']/tbody/tr[5]/td[3]; row and column are dynamic 

        const firstPart = "//table[@id='customers']/tbody/tr[";
        const secondPart = "]/td[";
        const thirdPart = "]";

        for(let i = 2; i<=7; i++){
            for(let j = 1; j<=3; j++){
                 const dynamicXpath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
                 console.log(dynamicXpath);
                 let value = await page.locator(dynamicXpath).innerText();
                 console.log(value);
                if(value == "Helen Bennett"){
                    const countryXpath = `${dynamicXpath}/following-sibling::td`;
                    const country = await page.locator(countryXpath).innerText();
                    expect(country).toBe("UK");

                }
            }
           
        }

        async function getElementByCellValue(name: string, columnNumber: number): Promise<string>{
        const row = page.locator(`//table[@id='customers']/tbody/tr`,{hasText:`${name}`});
        const cellValue = await row.locator('td').nth(columnNumber).innerText();
        return cellValue;
        }

        const country = await getElementByCellValue(`Yoshi Tannamuri`,2);
        expect(country).toBe("Canada");
    })
})

