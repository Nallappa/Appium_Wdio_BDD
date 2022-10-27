/* eslint-disable wdio/no-pause */
/* eslint-disable no-unused-vars */
/* eslint-disable no-async-promise-executor */
/* eslint-disable no-undef */
/**
 * Java Script Mobile test automation framework - Common functions
 * Last updated By: SESA620164 Date: SEP-2022	Version: 1.0
 * Update History
 */

/* manages all the common operations of an application
 */
var currentRootDirectory = process.cwd();
var path = require("path");
var fs = require("fs");
// var utils = require('./utils.js');
// const EC = require('wdio-wait-for');

var commonPage = function () {
  //####################################################################################################
  //Function Name		   : getElementUsing
  //Description      	 : This function can be used to get the element locator.
  //Parameters Used  	 : None
  //########################################################################################################
  // To enter any value
  async function getElementUsing(locator) {
    //wdio
    console.log("locator" + locator);
    let currentlocator;
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async function (resolve, reject) {
      try {
        currentlocator = await $(locator);
        resolve(currentlocator);
      } catch (e) {
        console.log("Error while forming the locator" + locator, e);
        reject(currentlocator);
      }
    });
  }

  //####################################################################################################
  //Function Name		   : getAllElementsUsing
  //Description      	 : This function can be used to get the all element locators.
  //Parameters Used  	 : None
  //########################################################################################################
  async function getAllElementsUsing(locator) {
    //wdio
    console.log("locator" + locator);
    let currentlocator;
    return new Promise(async function (resolve, reject) {
      try {
        currentlocator = await $$(locator);
        resolve(currentlocator);
      } catch (e) {
        console.log(
          "Error while forming the loctor for findelements" + locator,
          e
        );
        reject(currentlocator);
      }
    });
  }

  //####################################################################################################
  //Function Name		   : clickElement
  //Description      	 : This function is used to click the element.
  //Parameters Used  	 : locator
  //########################################################################################################
  async function clickElement(locator) {
    //wdio
    console.log("locator" + locator);
    let currentlocator;
    return new Promise(async function (resolve, reject) {
      try {
        currentlocator = await getElementUsing(locator);
        await currentlocator.click();
        resolve(true);
      } catch (e) {
        console.log("Error while clicking the element" + locator, e);
        reject(false);
      }
    });
  }


  //####################################################################################################
  //Function Name		   : clearText
  //Description      	 : This function is used to clear the value in to input box.
  //Parameters Used  	 : Locator,value
  //########################################################################################################
  async function clearText(locator) {
    //wdio
    console.log("locator" + locator);
    let currentlocator;
    return new Promise(async function (resolve, reject) {
      try {
        currentlocator = await getElementUsing(locator);
        await currentlocator.clearValue(value);
        resolve(true);
      } catch (e) {
        console.log("Error while clearing the value" + locator, e);
        reject(false);
      }
    });
  }

  
  //####################################################################################################
  //Function Name		   : getText
  //Description      	 : This function is used to get the text for an element
  //Parameters Used  	 : Locator,value
  //########################################################################################################
  async function getText(locator) {
    //wdio
    console.log("locator" + locator);
    let currentlocator;
    return new Promise(async function (resolve, reject) {
      try {
        currentlocator = await getElementUsing(locator);
        let elementText =  currentlocator.getText(value);
        resolve(elementText);
      } catch (e) {
        console.log("Error while fething the text the value for an element" + locator, e);
        reject(false);
      }
    });
  }

  //####################################################################################################
  //Function Name		   : setText
  //Description      	 : This function is used to set the value in to input box.
  //Parameters Used  	 : Locator,value
  //########################################################################################################
  async function sendText(locator, value) {
    //wdio
    console.log("locator" + locator);
    let currentlocator;
    return new Promise(async function (resolve, reject) {
      try {
        currentlocator = await getElementUsing(locator);
        await currentlocator.addValue(value);
        resolve(true);
      } catch (e) {
        console.log("Error while setting the value" + locator, e);
        reject(false);
      }
    });
  }

  async function launchBrowserUrl(urlToLaunch) {
    return new Promise(async function (resolve, reject) {
      try {
        await browser.url(urlToLaunch);
        resolve(true);
      } catch (e) {
        console.log("Error while launching the url in browser" + urlToLaunch, e);
        reject(false);
      }
    });
  }

  async function getTitle() {
    return new Promise(async function (resolve, reject) {
      try {
        await browser.getTitle();
        resolve(true);
      } catch (e) {
         console.log("Error while fetching the url for browser", e);
        reject(false);
      }
    });
  }

  async function launchApp() {
    return new Promise(async function (resolve, reject) {
      try {
        await browser.launchApp();
        resolve(true);
      } catch (e) {
        console.log("Error while launhing the app", e);
        reject(false);
      }
    });
  }

  
  async function switchToNativeContext() {
    return new Promise(async function (resolve, reject) {
      try {
        await  browser.switchContext('NATIVE_APP');
        resolve(true);
      } catch (e) {
        console.log("Error while swithcing to native app", e);
        reject(false);
      }
    });
  }

  async function pause(seconds) {
    return new Promise(async function (resolve, reject) {
      try {
        await browser.pause(seconds * 1000);
        resolve(true);
      } catch (e) {
        console.log("Error while pause", e);
        reject(false);
      }
    });
  }

  async function isElementPresent(locator) {
    console.log("locator" + locator);
    return new Promise(async function (resolve, reject) {
      try {
        let element_name = await getElementUsing(locator);
        const isPresent =  await element_name.isDisplayed() ? true : false;
        resolve(isPresent);
      } catch (e) {
        console.log("Error while checking for the presence of element" + locator, e);
        reject(false);
      }
    });
  }

  async function waitForElement(locator,waitTimeInSeconds) {
    console.log("locator" + locator);
    let element_name;
    return new Promise(async function (resolve, reject) {
      try {
         element_name = await getElementUsing(locator);
        await element_name.waitForDisplayed(waitTimeInSeconds * 1000);
        resolve(true);
      } catch (e) {
        console.log("Error while waiting for an element" + locator, e);
        reject(false);
      }
    });
  }




  return {
    getAllElementsUsing: getAllElementsUsing,
    getElementUsing: getElementUsing,
    sendText: sendText,
    clickElement: clickElement,
    launchBrowserUrl: launchBrowserUrl,
    getTitle: getTitle,
    launchApp:launchApp,
    switchToNativeContext:switchToNativeContext,
    pause:pause,
    isElementPresent:isElementPresent,
    waitForElement:waitForElement,
    clearText:clearText,
    getText:getText
  };
};
module.exports = commonPage();
