import { Page, Locator } from "@playwright/test";

export class CheckOutStepOne{
    private page: Page;
    private firstName: Locator;
    private lastName: Locator;
    private postalCode: Locator;
    private continueBtn: Locator;

    constructor(page: Page){
        this.page= page;
        this.firstName= this.page.getByPlaceholder('First Name');
        this.lastName = this.page.getByPlaceholder('Last Name');
        this.postalCode = this.page.getByPlaceholder('Zip/Postal Code')
        this.continueBtn = this.page.locator("//button[text()='Continue']");
    }

    async fillPersonalInfoForm(firstName: string, lastName: string, postalCode: string){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
        await this.continueBtn.click();
    }
}