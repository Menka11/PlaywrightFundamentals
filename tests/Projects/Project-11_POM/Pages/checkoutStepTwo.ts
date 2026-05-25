import {Page, Locator} from '@playwright/test';

export class CheckoutStepTwo{
    private page: Page;
    private checkoutSummary: Locator;
    private finishBtn: Locator;

    constructor(page: Page){
        this.page= page;
        this.checkoutSummary = this.page.locator("//div[@class='summary-block']");
        this.finishBtn = this.page.locator("//button[text()='Finish']");
    }

    async getCheckoutSummary(): Promise<Locator>{
        return this.checkoutSummary;
    }
    async getFinishBtn(): Promise<Locator>{
        return this.finishBtn;
    }
}