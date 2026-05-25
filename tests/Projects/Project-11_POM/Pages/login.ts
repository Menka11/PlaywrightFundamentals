import { Locator, Page } from "@playwright/test";
export class loginPage{
    private page: Page;
    private username: Locator;
    private password: Locator;
    private loginBtn: Locator;
   

    constructor(page: Page){
        this.page = page;
        this.username = this.page.getByPlaceholder("Username");
        this.password = this.page.getByPlaceholder("Password");
        this.loginBtn = this.page.getByText("Login");
    }

async navigatetoLOginPage(){
    await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/");

}


async enterValidCredentialAndLogin(username:string, password: string){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
}


}