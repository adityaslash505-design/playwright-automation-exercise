import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage.page';
import { ProductPage } from '../Pages/ProductPage.page';
import { CartPage } from '../Pages/CartPage.page.ts';
import { ContactUs } from '../Pages/ContactUs.page.ts';

const BaseUrl = 'https://automationexercise.com/'
const username = 'tester@automationexercise.com'
const password = 'password123'
let loginPage:LoginPage;
let prodcutPage:ProductPage;
let cartPage: CartPage;
let contactUs: ContactUs;

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationexercise.com');
});

test('Verify user is able to loginf', async ({ page }) => {
loginPage= new LoginPage(page)
await loginPage.signUpLink.click();
await expect(
  page.getByRole('heading', { name: 'Login to your account'})).toBeVisible();

await loginPage.userInputBox.fill(username);
await loginPage.passInputBox.fill(password);
await loginPage.loginBtn.click();
});

test('Add to cart', async({ page }) => {

  prodcutPage= new ProductPage(page);
  await prodcutPage.addFirstProductToCart();
});

test('Search Blue Top', async ({ page }) => {
prodcutPage = new ProductPage(page);
await prodcutPage.SearchBlueTop();
});

test.only('Verify Brand Name', async ({ page }) => {
  const productPage = new ProductPage(page);

  const brandNames = await productPage.getAllBrandNames();
 expect(
  brandNames.join(' ')
).toMatch(/Polo/);
});

test('Cart functionality test', async ({page}) => {
cartPage = new CartPage(page);
prodcutPage = new ProductPage(page);
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
 await prodcutPage.addFirstProductToCart();
 await cartPage.goToCart();
 await cartPage.verifyProductInCart('Blue Top');
 await cartPage.verifyProductToHaveQuantity('1');
 await cartPage.checkOut();
});

test('Contact us page test', async({page})=>{
contactUs = new ContactUs(page);

await contactUs.goToContactPage();
await contactUs.fillName();
await contactUs.fillEmail();
await contactUs.fillSubject();
await contactUs.fillMessage();
await contactUs.UploadFile();
await contactUs.Submit();
await contactUs.goToHome();
});