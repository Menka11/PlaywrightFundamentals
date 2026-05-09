import {test, expect} from '@playwright/test';
test.describe("QA Profile",() =>{
    test("QA_Profile",async({page})=>{
        await page.goto("https://app.thetestingacademy.com/playwright/tables/practice");
        await page.getByTestId('first-name').fill("Jenny");
        await page.getByTestId('last-name').fill('Parker');
        await page.locator('input[data-testid ="gender-female"]').check();
        await page.selectOption('//select[@data-testid="years-experience"]',"2");
        //date picker
        await page.getByTestId("profile-date").click();
        
        await page.locator('input[data-testid="profession-automation"]').check();
        await page.locator('input[data-testid="tool-uft"]').check();
        await page.locator('input[data-testid="continent-asia"]').check();
        await page.locator('//button[@data-testid="tab-wait"]').click();
        await expect(page.locator('//div[@id="selenium-tab-panel"]')).toContainText(' — wait until conditions are met — element visibility, clickability, custom predicates.');
        
        const fileChooserPromises = page.waitForEvent('filechooser');
        await page.locator('input[data-testid="upload-image"]').click();
        const fileChooser = await fileChooserPromises;
        await fileChooser.setFiles('40mb.pdf');

        const fileDownloadPromises = page.waitForEvent('download');
        await page.locator('a[data-testid="download-file"]').click();
        const download = await fileDownloadPromises;
        await download.saveAs('./tests'+'downloadedImage');
        await page.waitForTimeout(3000);

        await page.getByTestId('profile-submit').click();
        let output = await page.locator('#submission-output').innerText();
        console.log(output);
        expect(output).toContain('firstName');
    


        
    })
})