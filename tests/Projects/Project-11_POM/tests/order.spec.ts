import{test, expect} from '@playwright/test';
import { loginPage } from '../Pages/login';
import { Inventory} from '../Pages/inventory';
import {Cart} from '../Pages/cart';
import { CheckOutStepOne } from '../Pages/checkoutStepOne';
import { CheckoutStepTwo } from '../Pages/checkoutStepTwo';
import { CheckoutCompleted } from '../Pages/checkoutCompleted';

test("Verify to place the order of product",async({page})=>{
    const login = new loginPage(page);
    const inventory = new Inventory(page);
    const cart = new Cart(page);
    const checkoutStepOne = new CheckOutStepOne(page);
    const checkoutStepTwo = new CheckoutStepTwo(page);
    const checkoutCompleted = new CheckoutCompleted(page);
    await test.step("Navigate to login page",async()=>{
        
        await login.navigatetoLOginPage();
    });
    await test.step("Enter valid credentials and verify login successfully",async()=>{
        await login.enterValidCredentialAndLogin("standard_user","tta_secret");
       expect(await (await inventory.getPageTitle()).innerText()).toContain('Products');
    });
    await test.step("Click on add to cart button",async()=>{
        ((await inventory.getAddToCart()).first()).click();
    });
    await test.step("go to Cart & verify the product added successfully",async()=>{
        (await inventory.getShoppingCartIcon()).click();
        await page.waitForTimeout(5000);
        expect (await (await cart.getInventoryItem()).count()).toBeGreaterThanOrEqual(1);
    });
    await test.step("Click on Checkout button",async()=>{
        (await cart.getCheckoutBtn()).click();
    });
    await test.step("Enter your details and click on continue button", async()=>{
        await checkoutStepOne.fillPersonalInfoForm("Jenny", "Parker","123456");
    });
     await test.step("Verify the checkout summary and click on finish button",async()=>{
        (await checkoutStepTwo.getFinishBtn()).click();
    });
    await test.step("Verify the order place successful message", async()=>{
        expect(await (await checkoutCompleted.getSuccessMessage()).innerText()).toContain('Thank you for your order!');
    });


})