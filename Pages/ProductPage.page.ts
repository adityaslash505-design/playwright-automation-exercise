import { test, expect, Locator, Page } from '@playwright/test';
import { text } from 'node:stream/consumers';
export class ProductPage{
    readonly page: Page;
  readonly firstAddToCartBtn: Locator;
  readonly continueShoppingBtn: Locator;
  readonly cartModal: Locator;
  readonly productLnk: Locator;
  readonly Addded: Locator;
  readonly Searchbar: Locator;
  readonly SearchBtn: Locator;
  readonly BlueTop: Locator;
  readonly AddedToCart: Locator;
  readonly AllBrandName: Locator;

  constructor(page: Page){   //This are Locators
    this.page = page;
    this.firstAddToCartBtn = page.locator('(//a[contains(@class,"add-to-cart")])[1]');
    this.continueShoppingBtn = page.getByRole('button',{name:'Continue Shopping',})
    this.cartModal = page.locator('#cartmodel');
    this.productLnk = page.getByRole('link', { name: 'Products' });
    this.Addded = page.getByText('Added!');
    this.BlueTop = page.locator('(//a[contains(@class,"add-to-cart")])[1]');
    this.Searchbar = page.getByPlaceholder('Search Product');
    this.SearchBtn = page.locator('#submit_search');
    this.AddedToCart = page.getByText('Your product has been added to cart.');
    this.AllBrandName = page.locator('.brands-name .nav.nav-pills.nav-stacked li a')
    
  }
  async addFirstProductToCart(){   //We are adding first product to cart

    await this.productLnk.click();
  
    //Hover required on Website Automation Exercise

    await this.firstAddToCartBtn.hover();
    await this.firstAddToCartBtn.click();

     // Validate if product is added to cart
    await expect (this.Addded).toBeVisible();

    //Continue Shopping
    await this.continueShoppingBtn.click();
  }

  async SearchBlueTop(){   //Searching for product through searchbar and adding to cart
  await this.productLnk.click();
  //Search the Blue Top
  await this.Searchbar.fill('Blue Top');
  await this.SearchBtn.click();
  //Add to cart
  await this.BlueTop.hover();
  await this.BlueTop.click();
  //Continue shopping
  await expect (this.AddedToCart).toBeVisible();
  await this.continueShoppingBtn.click();
  }

 async getAllBrandNames(): Promise<string[]> {

  await this.productLnk.click();  //Go to product page
  //Get all brand names 
  const brandNames= await this.AllBrandName.allTextContents();
   await console.log('Brands', brandNames);

   //verifying if number of brands are 8
     expect((await brandNames).length).toBeGreaterThan(7);

     //Return to test
       return brandNames;
 }
}