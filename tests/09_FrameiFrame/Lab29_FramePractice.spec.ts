import {test,expect} from '@playwright/test';

test("Course frame practice",async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/frames/courses-frameset");
    
})