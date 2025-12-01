const base = require('@playwright/test');

exports.customTest1 = base.test.extend({

    testDataForOrder:{
        userName: 'dzdz1@gmail.com',
        passWord: 'Pass@123',
        productName: 'ADIDAS ORIGINAL'
    }
});