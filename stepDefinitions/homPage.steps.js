/* eslint-disable no-unused-vars */
const {Given, When, Then} = require('@cucumber/cucumber');

// const CelsiusToFahrenheitConvertorPage = require('./../pages/celsiusToFahrenheitConvertor.page');

// const celsiusToFahrenheitConvertorPage = new CelsiusToFahrenheitConvertorPage();
const homepage = require('../PageObjects/homepage');


Given(/^I launch the app$/, async() => { 
    await homepage.clickApp();
});

// When(/^I enter celsius of (.*)$/, (celsius) => {
//    console.log("Test")
// });

// Then(/^I should see fahrenheit of (.*)$/, (fahrenheit) => {
//     console.log("Test")
// });
