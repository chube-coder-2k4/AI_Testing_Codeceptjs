const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      path: '/', // Giữ lại dòng này, rất quan trọng cho Appium 2
      platform: 'Android',
      desiredCapabilities: {
        // Chuyển app vào trong này
        app: 'D:/Mobile_Flutter/app/build/intermediates/apk/debug/app-debug.apk',
        udid: 'emulator-5554',
        platformName: 'Android', // Thêm platformName cho rõ ràng
        appPackage: 'com.example.date_time_checker_mobile',
        appActivity: '.MainActivity',
        automationName: 'UiAutomator2',
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'Mobile_Flutter'
}