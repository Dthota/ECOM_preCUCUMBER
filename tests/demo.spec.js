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

 test('Client App login without POmanager', async ({page})=>
 {
    //js file- Login js, DashboardPage
     const email = "dzdz@gmail.com";
     const productName = 'ZARA COAT 3';
     const products = page.locator(".card-body");

     const userName = page.locator("#userEmail");
     const password = page.locator("#userPassword");
     const signInBtn = page.locator("[value='Login']");
     const cardTitles = page.locator('.card-body b');
     const cart = page.locator("[routerlink*='cart']");
     const checkoutBtn = page.locator("text=Checkout");
     const countryInput = page.locator("[placeholder*='Country']");
     const dropdown = page.locator(".ta-results");

     await page.goto("https://rahulshettyacademy.com/client");
     await userName.fill(email);
     await password.fill("Pass@123");
     await signInBtn.click();
     await page.waitForLoadState('networkidle');

    const titles= await cardTitles.allTextContents();
    console.log(titles);
    const count = await products.count();
    for(let i =0; i < count; ++i)
    {
    if(await products.nth(i).locator("b").textContent() === productName)
    {
        //add to cart
        await products.nth(i).locator("text= Add To Cart").click();
        break;
     }
    }
   
    await cart.click();
    //await page.pause();
    
    await page.locator("div li").first().waitFor();
    const bool =await page.locator("h3:has-text('"+productName+"')").isVisible();
    expect(bool).toBeTruthy();
    await checkoutBtn.click();
    await countryInput.pressSequentially("ind");
    
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; ++i) {
        const text = await dropdown.locator("button").nth(i).textContent();
        if (text === " India") { 
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }

   await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();

   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = page.locator("tbody tr");


 for(let i =0; i<await rows.count(); ++i)
 {
    const rowOrderId =await rows.nth(i).locator("th").textContent();
    if (orderId.includes(rowOrderId))
    {
        await rows.nth(i).locator("button").first().click();
        break;
    }
 }
 const orderIdDetails =await page.locator(".col-text").textContent();
 expect(orderId.includes(orderIdDetails)).toBeTruthy();

 });