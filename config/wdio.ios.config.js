const path = require('path');
const { config } = require('./wdio.shared.conf');


// ====================
// Runner Configuration
// ====================
//
config.port = 4723;
//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "11.0",
    "appium:deviceName": "Pixel 3",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(process.cwd(), "./app/android/ApiDemos-debug.apk"),
    "appium:autoGrantPermissions": true
  }
]

// config.capabilities = [
//   {
//       platformName: 'iOS',
//       noReset: true,
//       fullReset: false,
//       maxInstances: 1,
//       automationName: 'XCUITest',
//       deviceName: IosInfo.deviceName(),
//       platformVersion: IosInfo.platFormVersion(),
//       app: IosInfo.appName() //use - path.resolve(`./apps/${IosInfo.appName()}`) if passing a custom app
//   }
//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['appium'];

config.cucumberOpts.tagExpression = '@iosApp';// pass tag to run tests specific to ios

exports.config = config;
