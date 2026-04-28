// https://katalon-demo-cura.herokuapp.com/
// On the make appointment.  Next page, you are going to enter the username and password.3
// https://katalon-demo-cura.herokuapp.com/#appointment We need to verify that the URL is now changed to this. The page contains make appointments. Make Appointment





import {test, expect} from '@playwright/test';

test("Cura website automation",async({page})=>{
    await page.goto('https://katalon-demo-cura.herokuapp.com/');

    let makeAppointment = page.locator('#btn-make-appointment');
    await makeAppointment.click();

    let name = page.locator("//input[@name='username']");
    await name.fill('John Doe');

    let password = page.locator("//input[@name='password']");
    await password.fill('ThisIsNotAPassword');

    let button = page.locator('#btn-login');
    await button.click();

    await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/#appointment');

    let Title = page.locator("//h2");

    await expect(Title).toContainText('Make Appointment');

})