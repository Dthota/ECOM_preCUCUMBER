import{test as baseTest} from '@playwright/test';

 interface TestDataForOrder {
        userName: string;
        passWord: string;
        productName: string;

    };

    export const customTest1 = baseTest.extend<{testDataForOrder:TestDataForOrder}>( 
        {
        testDataForOrder: 
         {
                userName: "dzdz1@gmail.com",
                passWord: "Pass@123",
                productName: "ADIDAS ORIGINAL"
        }
        
    }

    );