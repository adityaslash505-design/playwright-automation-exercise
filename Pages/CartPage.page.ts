import { test, expect, Locator, Page } from '@playwright/test';
export class CartPage{
    readonly page: Page;
    readonly cartLink: Locator;
    readonly cartRows: Locator;
    readonly productName: Locator;
    readonly productPrice: Locator;                 
    readonly productQuantity: Locator;
    readonly productTotal: Locator;
    readonly removeBtn: Locator;
    readonly checkOutBtn: Locator;
    readonly continueOnCart: Locator;

    constructor(page:Page) {
        this.page = page;
        this.cartLink = page.getByRole('link', {name: ' Cart'});
        this.cartRows = page.locator('#cart_info_table tbody tr');
        this.productName = page.locator('.cart_description h4 a');
        this.productPrice = page.locator('.cart_price p');
        this.productQuantity = page.locator('.cart_quantity button');
        this.productTotal = page.locator('.cart_total p');
        this.removeBtn = page.locator('.cart_delete a');
        this.checkOutBtn = page.locator('.btn.btn-default.check_out');
        this.continueOnCart = page.locator('.btn.btn-success.close-checkout-modal.btn-block')
    }

    async goToCart(){  //Go to cart
        await expect(this.cartLink).toBeVisible();   //Checking if cart link is visible
        await this.cartLink.click();      //Clicking on cart
    }
    
    async verifyProductInCart(product: string){      //Verifying if product is added

        await expect(this.productName).toContainText(product);
    }
    async verifyProductToHaveQuantity(quantity: string) {     //Verrifying exact quantity
        await expect(this.productQuantity).toHaveText(quantity);
    }
    async removeProduct() {
        await this.removeBtn.click();   //Eemoving product from the cart
    }

    async verifyCartIsEmpty() {    //Verfying if cart is empty or not
    await expect(this.page.getByText('Cart is empty')).toBeVisible();
  }
    async checkOut() {     //Checking out
        await expect(this.checkOutBtn).toBeVisible();
        await this.checkOutBtn.click();

        await expect(this.continueOnCart).toBeVisible();
        await this.continueOnCart.click();       //continue the shopping after checking out

    }
}