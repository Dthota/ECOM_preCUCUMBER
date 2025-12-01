// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  
  testDir: './tests', //Default test directory
  timeout: 20 * 1000, //Global timeout for each test

  expect: {
    timeout: 20*1000 //Global timeout for expect assertions
  },
  reporter: 'html', //Reporter type

  use:{

    browserName: 'chromium', //Default browser
    //browserName: 'firefox',
    headless: false, //Run tests in headed mode
    screenshot: 'only-on-failure',
    trace: 'on'


  }

});

