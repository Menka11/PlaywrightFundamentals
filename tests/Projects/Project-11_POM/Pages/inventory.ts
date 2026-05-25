import {Locator, Page} from '@playwright/test';

export class Inventory{
    private page: Page;
    private pageTitle : Locator;
    private addToCart: Locator;
    private sortingBtn: Locator; 
    private shoppingCartIcon: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.pageTitle = this.page.locator("//span[@class='page-title']");
        this.addToCart = this.page.locator("//button[text()='Add to cart']");
        this.sortingBtn = this.page.getByLabel("Sort products");
        this.shoppingCartIcon = this.page.getByLabel("Shopping cart");
    }

    async getPageTitle(): Promise<Locator>{
        return this.pageTitle;
    }
    async getAddToCart():Promise<Locator> {
        return this.addToCart;
    }
    async getShoppingCartIcon():Promise<Locator>{
        return this.shoppingCartIcon;
    }
}