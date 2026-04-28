import{test, expect} from '@playwright/test';

test("Css locators- find span are present",async({page})=>{
    await page.goto('https://awesomeqa.com/css/');

    const allSpan = page.locator('div.first span'); //--> CSS advanced locator div.first span:nth-child(2n+1) - select odd span (2n)- selects even span 
    const count = await allSpan.count();
    console.log("Total Span: "+count);

    const span1 = await allSpan.first().textContent();
    const span2 = await allSpan.nth(1).textContent();
    const span3 = await allSpan.nth(2).textContent();
    const span5 = await allSpan.nth(4).textContent();
    const lastSpan = await allSpan.last().textContent();


    console.log("First Span:", span1);
    console.log("Second Span:", span2);
    console.log("Third Span:", span3);
    console.log("Fifth Span:", span5);
    console.log("last Span:", lastSpan);


    //loop through elements 
    for (let i =0; i< count; i++){
        let span_nth = await allSpan.nth(i).textContent();
        console.log(`Span ${i+1}: ${span_nth}`);
    }

    
})