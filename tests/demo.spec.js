 const { test, expect} = require('@playwright/test');
 const {POManager} = require('../pageobjects/POManager');
 const dataset = require('../utils/placeOrderTestData1.json');

 test.beforeAll( () => {
  console.log("i am the first");
  // mydata = await JSON.parse(JSON.stringify(require("./utils/data.json")));

 })
 for (const data of dataset) {

 //test(`testing with ${data.email}`, async ({page, person})=>
  test(`@web Client App login for ${data.userName}`, async ({ page }) => {
 
   const poManager = new POManager(page);
    //js file- Login js, DashboardPage
     const products = page.locator(".card-body");
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(data.userName,data.passWord);
     const dashboardPage = poManager.getDashboardPage();
     await dashboardPage.searchProductAddCart(data.productName);
     await dashboardPage.navigateToCart();

    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(data.productName);
    await cartPage.Checkout();

 });
}