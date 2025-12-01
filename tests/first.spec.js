import { test, expect } from '@playwright/test';

test('FirstTest', async ({page}) =>{

    console.log('First test started');
    await page.goto('https://google.co.in/');
    expect(await page.title()).toBe('Google');


});

test.only('page test', async ({page}) =>{
   
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');


    console.log('openUrl test started');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //console.log(await page.title());
    expect(await page.title()).toBe('LoginPage Practise | Rahul Shetty Academy');
    await userName.fill('rDilli');
    await password.fill('learning1');
    await signInBtn.click();
    // const errormsg = await page.locator("[style$='display: block;']").textContent();
    // console.log(errormsg);
    await expect(page.locator("[style*='block']")).toContainText('Incorrect username');

    await userName.fill('rahulshettyacademy');
    await password.fill('learning');
    await signInBtn.click();

    console.log(await cardTitles.nth(0).textContent());

    // get array of inner texts
    const titles = await cardTitles.allInnerTexts();
    console.log('all titles:', titles);

    let foundFlag = false;
    for(const t of titles){
        if(t === "Blackberryl"){
            console.log('Found Blackberry in card titles');
            foundFlag = true;
            break;      
        }
    }

    // conditional action / logging
    if (foundFlag === true) {
        // do something meaningful here if needed, e.g. click, assert, etc.
        console.log('Proceeding since iphone was found');
    } else {
        console.log('iphone was NOT found in card titles');
    }


});

