import {test, expect} from '@playwright/test';

test.describe("Handle SVG",()=>{
    test("Search for MAC mini, get the cheapest MAC mini from the result",async({page})=>{
        await page.goto("https://www.flipkart.com/search");
        await page.getByPlaceholder("Search for products, brands and more").fill('mac mini');
        await page.locator('svg g path.dWptfd').first().click();
        await page.getByText('Price -- Low to High').click();
        await page.waitForTimeout(4000);
        const priceAll:any = await page.locator("//a[contains(@title,'Apple Mac Mini')]/following-sibling::a[@class='fb4uj3']//div[@class='hZ3P6w']").allInnerTexts();
        const normalizePrice= (str:any) => Number(str.replace(/[^0-9]/g, ''));
        const minimumPrice = Math.min(...priceAll.map(normalizePrice));
        const minimumPriceMacMini = priceAll.filter(price => normalizePrice(price)===minimumPrice);
        console.log(minimumPriceMacMini);
        
        })
        test("Print all class names of the states and click on the UP.",async({page})=>{
            await page.goto("https://simplemaps.com/svg/country/in");
            await page.evaluate(() => window.scrollBy(0, window.innerHeight));
            const stateElements = await page.locator('svg>path[class]').all();
            const stateNames = await Promise.all(stateElements.map(el => el.getAttribute('class')));
            console.log(stateNames);
            await page.locator("svg>path[class='sm_state sm_state_INUP']").click();

        })
})