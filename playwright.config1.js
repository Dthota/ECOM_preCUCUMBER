// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  
  testDir: './tests', //Default test directory
  retries: 1, //Retry failed test once
  timeout: 20 * 1000, //Global timeout for each test

  expect: {
    timeout: 20*1000 //Global timeout for expect assertions
  },
  reporter: 'html', //Reporter type

  projects: [
    {
      name: 'Chromeheadmode',   
    use:{
  
      browserName: 'chromium', //Default browser
      headless: false, //Run tests in headed mode
      screenshot: 'only-on-failure',
      trace: 'on',
      ignoreHTTPSErrors: true,
      permissions: ['geolocation'] // Grant geolocation permission in browser
     }
    },
    {
      name: 'Chromeheadlessmode',   
    use:{
  
      browserName: 'chromium', //Default browser
      headless: true, //Run tests in headed mode
      screenshot: 'only-on-failure',
      trace: 'on'
     }
    },
    {
      name: 'Firefoxheadmode',
      use:{
  
      browserName: 'firefox', //Default browser
      headless: false, //Run tests in headed mode
      screenshot: 'only-on-failure',
      trace: 'on'
     }
    },
    {
      name: 'Firefoxheadless',
      use:{
  
      browserName: 'firefox', //Default browser
      headless: true, //Run tests in headed mode
      screenshot: 'only-on-failure',
      trace: 'on'
     }

    }

  ]
});

