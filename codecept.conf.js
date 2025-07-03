const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

// 🌐 Backend URL từ environment hoặc default
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8080';

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      path: '/',
      platform: 'Android',
      desiredCapabilities: {
        // 📱 Sử dụng APK từ external source hoặc local
        app: process.env.APK_PATH || 'D:/Mobile_Flutter/app/build/intermediates/apk/debug/app-debug.apk',
        udid: process.env.DEVICE_ID || 'emulator-5554',
        platformName: 'Android',
        appPackage: 'com.example.date_time_checker_mobile',
        appActivity: '.MainActivity',
        automationName: 'UiAutomator2',
        // ⏱️ Timeout settings cho CI
        newCommandTimeout: 300,
        androidDeviceReadyTimeout: 60,
        androidInstallTimeout: 120
      }
    },
    
    // 🌐 REST Helper để test API trực tiếp
    REST: {
      endpoint: BACKEND_URL,
      timeout: 10000,
      defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  },
  
  include: {
    I: './steps_file.js'
  },
  
  // 🎯 Test profiles cho different environments
  multiple: {
    parallel: {
      chunks: 2,
      browsers: ['appium']
    },
    
    smoke: {
      grep: '@smoke',
      timeout: 10000
    },
    
    regression: {
      grep: '@regression',
      timeout: 30000
    }
  },
  
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
      retries: 2
    },
    screenshotOnFail: {
      enabled: true
    }
  },
  
  name: 'Mobile_Testing_External_Backend'
}