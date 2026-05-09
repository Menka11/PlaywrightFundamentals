import {test,expect} from '@playwright/test';

test("Search username form table and verify it",async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    //get the url
    const pageUrl = page.url();
    console.log(pageUrl);

    //get page title and verify
    const pageTitle = await page.title();
    expect(pageTitle).toEqual("Web Table Employee Directory — The Testing Academy");

    //verify page title
    await expect(page.locator('#page-title')).toContainText('CloudOps India');

    //search for employee
    let employeeName = "Kabir.Khan";
    await page.locator('#employee-search').fill(employeeName);

    //select checkbox based on employee name 
    let employeeLocator = page.locator(`//td[text()=\"${employeeName}\"]/preceding-sibling::td/input`);
    await employeeLocator.check();

    await expect (page.locator('.selected-output')).toHaveText(employeeName);
    await page.waitForTimeout(5000);


    
})
test("Selected multiple employee name and verify it",async({page})=>{
     await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    //multiple selection 
    let selectedEmployee = [];
    for (let i = 1; i< 4; i++){
        const toBeSelect = `//tbody//tr[${i}]//td[1]`;
        await page.locator(`${toBeSelect}//input[@type='checkbox']`).check();
        const getUsername = page.locator(`${toBeSelect}/following-sibling::td[@class='username']`);
        selectedEmployee.push(await getUsername.innerText());
    }
    const selectedEmployeeList = selectedEmployee.join(", "); 
    await expect(page.locator('#selected-output')).toContainText(selectedEmployeeList);

})