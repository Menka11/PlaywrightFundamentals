import { Locator, Page } from "@playwright/test";

export class Cart{
    private page: Page;
    private inventoryItemRow: Locator;
    private checkoutBtn: Locator;

    constructor(page:Page){
        this.page= page;
        this.inventoryItemRow = this.page.locator("//div[@class='cart-row']");
        this.checkoutBtn = this.page.locator("//a[text()='Checkout']");

    }

    async getInventoryItem():Promise<Locator>{
        return this.inventoryItemRow;
    }
    async getCheckoutBtn(): Promise<Locator>{
        return this.checkoutBtn;
    }
    async countAddedInventoryItem(){
        const itemCount = await this.inventoryItemRow.count();
        console.log(itemCount);
    }
}