import {Page, Locator} from '@playwright/test';

export class CheckoutCompleted{
    private page: Page;
    private orderSuccessMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.orderSuccessMessage = this.page.locator("//h2[@data-test='complete-header']");

    }
    async getSuccessMessage(): Promise<Locator>{
        return this.orderSuccessMessage;
    }
}