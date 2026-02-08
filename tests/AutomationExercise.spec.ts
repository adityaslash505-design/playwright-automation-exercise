import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage.page';
import { ProductPage } from '../Pages/ProductPage.page';
import { CartPage } from '../Pages/CartPage.page.ts';

const BaseUrl = 'https://automationexercise.com/'
const username = 'tester@automationexercise.com'
const password = 'password123'
let loginPage:LoginPage;
let prodcutPage:ProductPage;
let cartPage: CartPage;

test('Verify user is able to loginf', async ({ page }) => {
loginPage= new LoginPage(page)

await page.goto(BaseUrl);
await loginPage.signUpLink.click();
await expect(
  page.getByRole('heading', { name: 'Login to your account'})).toBeVisible();

await loginPage.userInputBox.fill(username);
await loginPage.passInputBox.fill(password);
await loginPage.loginBtn.click();
});

test('Add to cart', async({ page }) => {

  prodcutPage= new ProductPage(page);
  
  await page.goto(BaseUrl);
  await prodcutPage.addFirstProductToCart();
});

test('Search Blue Top', async ({ page }) => {
prodcutPage = new ProductPage(page);

await page.goto(BaseUrl);
await prodcutPage.SearchBlueTop();
});

test.only('Verify Brand Name', async ({ page }) => {
  const productPage = new ProductPage(page);

  await page.goto(BaseUrl);

  const brandNames = await productPage.getAllBrandNames();
 expect(
  brandNames.join(' ')
).toMatch(/Polo/);
});

test('Cart functionality test', async ({page}) => {
cartPage = new CartPage(page);
prodcutPage = new ProductPage(page);
await page.goto(BaseUrl);
 await prodcutPage.addFirstProductToCart();
 await cartPage.goToCart();
 await cartPage.verifyProductInCart('Blue Top');
 await cartPage.verifyProductToHaveQuantity('1');
 await cartPage.removeProduct();
 await  cartPage.verifyCartIsEmpty();
});

test('Checkout test', async({page})=>{
cartPage = new CartPage(page);
prodcutPage = new ProductPage(page);
await page.goto(BaseUrl);
 await prodcutPage.addFirstProductToCart();
 await cartPage.goToCart();
 await cartPage.verifyProductInCart('Blue Top');
 await cartPage.verifyProductToHaveQuantity('1');
 await cartPage.checkOut();
});