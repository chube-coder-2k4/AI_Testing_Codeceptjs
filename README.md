# 🚀 Mobile Testing CI/CD - Date Time Checker

[![Kotlin](https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white)](https://kotlinlang.org/)
[![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)](https://developer.android.com/)
[![Spring Boot](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)](https://spring.io/projects/spring-boot)
[![CodeceptJS](https://img.shields.io/badge/CodeceptJS-orange?style=for-the-badge)](https://codecept.io/)
[![Appium](https://img.shields.io/badge/Appium-663399?style=for-the-badge&logo=appium&logoColor=white)](https://appium.io/)

> **Một hệ thống hoàn chỉnh cho việc kiểm tra tính hợp lệ của ngày tháng với Android App, Spring Boot Backend và Testing tự động**

---

## 📋 Mục lục

- [🎯 Tổng quan](#-tổng-quan)
- [✨ Tính năng chính](#-tính-năng-chính)
- [🏗️ Kiến trúc hệ thống](#️-kiến-trúc-hệ-thống)
- [📁 Cấu trúc dự án](#-cấu-trúc-dự-án)
- [⚡ Yêu cầu hệ thống](#-yêu-cầu-hệ-thống)
- [🚀 Hướng dẫn cài đặt](#-hướng-dẫn-cài-đặt)
- [🎮 Cách sử dụng](#-cách-sử-dụng)
- [🧪 Testing](#-testing)
- [🔧 Cấu hình](#-cấu-hình)
- [📊 CI/CD Pipeline](#-cicd-pipeline)
- [🐛 Troubleshooting](#-troubleshooting)
- [❓ FAQ](#-faq)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👥 Tác giả](#-tác-giả)
- [📞 Hỗ trợ](#-hỗ-trợ)

---

## 🎯 Tổng quan

**Mobile Testing CI/CD** là một dự án demo hoàn chỉnh về việc xây dựng, kiểm thử và triển khai ứng dụng mobile. Dự án bao gồm:

- **📱 Android App**: Ứng dụng kiểm tra ngày hợp lệ với UI hiện đại
- **🖥️ Backend API**: Spring Boot server xử lý logic validation
- **🔄 Automated Testing**: Hệ thống test tự động với CodeceptJS + Appium
- **⚙️ CI/CD**: Pipeline tự động cho build, test và deploy

### 🎭 Demo Workflow
```
User Input → Android App → API Call → Backend Validation → Response → UI Update
     ↓
Automated Tests → E2E Testing → Report Generation → CI/CD Pipeline
```

---

## ✨ Tính năng chính

### 📱 Android Application
- ✅ **Kiểm tra ngày hợp lệ**: Xác thực tính hợp lệ của ngày/tháng/năm
- 🎨 **Giao diện Jetpack Compose**: UI hiện đại và responsive
- 🔗 **Kết nối API**: Tích hợp với backend để xử lý logic validation
- 📊 **Real-time Validation**: Phản hồi tức thời cho người dùng

### 🖥️ Backend Features
- 🌐 **RESTful API**: Endpoint `/api/validate-date` cho việc kiểm tra ngày
- ⚡ **Fast Processing**: Xử lý logic validation hiệu quả
- 🔒 **CORS Support**: Hỗ trợ cross-origin requests
- 📈 **Error Handling**: Xử lý lỗi toàn diện

### 🧪 Testing Capabilities
- 🔄 **Unit Testing**: Test logic nghiệp vụ
- 📱 **Instrumented Testing**: Test trên thiết bị thật
- 🎯 **End-to-End Testing**: Test toàn bộ workflow
- 📊 **Test Reporting**: Báo cáo chi tiết với screenshots

---

## 🏗️ Kiến trúc hệ thống

```
┌─────────────────┐    HTTP/JSON    ┌─────────────────┐
│   Android App   │ ←─────────────→ │  Spring Boot    │
│                 │                 │     Backend     │
│ • Jetpack       │                 │                 │
│   Compose UI    │                 │ • REST API      │
│ • OkHttp Client │                 │ • Date Logic    │
│ • Kotlin        │                 │ • CORS Support  │
└─────────────────┘                 └─────────────────┘
         ↑                                   ↑
         │                                   │
    ┌─────────────────────────────────────────────┐
    │           Testing Layer                     │
    │                                            │
    │  • CodeceptJS (E2E Testing)               │
    │  • Appium (Mobile Automation)             │
    │  • JUnit (Unit Testing)                   │
    │  • Espresso (Instrumented Testing)        │
    └─────────────────────────────────────────────┘
```

### 📊 Technology Stack

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| **Frontend** | Kotlin + Jetpack Compose | Latest | Android UI |
| **Backend** | Spring Boot + Java | 11+ | REST API Server |
| **Mobile Testing** | CodeceptJS + Appium | Latest | E2E Automation |
| **Unit Testing** | JUnit + Espresso | Latest | Component Testing |
| **HTTP Client** | OkHttp3 | 4.9.3 | API Communication |
| **Build System** | Gradle | 8.0+ | Build Automation |

---

## 📁 Cấu trúc dự án

```
Mobile-Testing-CI-CD/
├── 📱 app/                                    # Android Application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/date_time_checker_mobile/
│   │   │   │   ├── MainActivity.kt            # Main Activity
│   │   │   │   └── ui/theme/                  # UI Theme Files
│   │   │   └── res/                           # Resources (layouts, strings, etc.)
│   │   ├── test/                              # Unit Tests
│   │   │   └── java/.../ExampleUnitTest.kt
│   │   └── androidTest/                       # Instrumented Tests
│   │       └── java/.../ExampleInstrumentedTest.kt
│   ├── build.gradle.kts                       # App-level Gradle config
│   └── proguard-rules.pro                     # ProGuard configuration
│
├── 🖥️ backend/                                # Spring Boot Backend
│   └── src/
│       ├── main/java/com/fpt/superapp/endtoend/
│       │   ├── EndToEndApplication.java       # Main Spring Boot class
│       │   ├── DateController.java            # REST Controller
│       │   └── DateRequest.java               # Request DTO
│       └── test/java/.../
│           ├── EndToEndApplicationTests.java  # Spring Boot tests
│           └── DateControllerTest.java        # Controller tests
│
├── 🧪 tests/                                  # E2E Test Files
│   └── date_time_checker_test.js              # CodeceptJS test scenarios
│
├── ⚙️ Configuration Files
│   ├── codecept.conf.js                       # CodeceptJS configuration
│   ├── steps_file.js                          # Custom test steps
│   ├── steps.d.ts                             # TypeScript definitions
│   ├── package.json                           # Node.js dependencies
│   └── package-lock.json                      # Dependency lock file
│
├── 🔧 Build Configuration
│   ├── build.gradle.kts                       # Root Gradle config
│   ├── settings.gradle.kts                    # Gradle settings
│   ├── gradle.properties                      # Gradle properties
│   └── gradlew / gradlew.bat                  # Gradle wrapper
│
└── 📚 Documentation
    ├── README.md                              # This file
    └── output/                                # Test output directory
```

---

## ⚡ Yêu cầu hệ thống

### 🖥️ Development Environment
- **OS**: Windows 10/11, macOS, Ubuntu 18.04+
- **RAM**: Tối thiểu 8GB (khuyến nghị 16GB)
- **Storage**: Ít nhất 10GB trống
- **Internet**: Cần kết nối để download dependencies

### 🛠️ Required Software

| Software | Version | Download Link | Purpose |
|----------|---------|---------------|---------|
| **Android Studio** | 2023.1.1+ | [Download](https://developer.android.com/studio) | Android development |
| **Java JDK** | 11+ | [Download](https://adoptium.net/) | Backend & Android build |
| **Node.js** | 16+ | [Download](https://nodejs.org/) | Testing framework |
| **Android SDK** | API 29+ | Via Android Studio | Android development |
| **Appium** | 2.0+ | `npm install -g appium` | Mobile automation |

### 📱 Device Requirements
- **Android Emulator**: API level 29+ (Android 10+)
- **Physical Device**: Android 10+ với USB Debugging enabled
- **Device Memory**: Tối thiểu 2GB RAM

---

## 🚀 Hướng dẫn cài đặt

### 📥 Bước 1: Clone Repository
```bash
# Clone project
git clone https://github.com/chube-coder-2k4/Mobile-Testing-CI-CD.git
cd Mobile-Testing-CI-CD

# Kiểm tra cấu trúc
ls -la
```

### ☕ Bước 2: Setup Java Environment
```bash
# Kiểm tra Java version
java -version
javac -version

# Nếu chưa có Java 11+, download và cài đặt từ https://adoptium.net/
```

### 📱 Bước 3: Setup Android Environment
```bash
# Mở Android Studio và cài đặt:
# - Android SDK Platform 29+
# - Android SDK Build-Tools
# - Android Emulator
# - Intel x86 Emulator Accelerator (HAXM installer)

# Tạo emulator mới:
# Tools > AVD Manager > Create Virtual Device
# Chọn: Pixel 4, API 29+, x86_64 Images
```

### 🌐 Bước 4: Setup Node.js & Testing Environment
```bash
# Cài đặt Node.js dependencies
npm install

# Cài đặt Appium globally
npm install -g appium

# Cài đặt UiAutomator2 driver
appium driver install uiautomator2

# Kiểm tra Appium setup
appium doctor --android
```

### 🏗️ Bước 5: Build Projects

#### Android App
```bash
# Build debug APK
./gradlew assembleDebug

# Hoặc sử dụng Android Studio:
# Build > Build Bundle(s)/APK(s) > Build APK(s)
```

#### Backend Server
```bash
# Navigate to backend folder
cd backend

# Build và chạy Spring Boot
./mvnw spring-boot:run

# Hoặc
mvn clean install
java -jar target/endtoend-0.0.1-SNAPSHOT.jar
```

---

## 🎮 Cách sử dụng

### 🖥️ Khởi động Backend Server
```bash
# Chạy Spring Boot server
cd backend
./mvnw spring-boot:run

# Server sẽ chạy tại: http://localhost:8080
# API endpoint: http://localhost:8080/api/validate-date
```

### 📱 Chạy Android Application

#### Với Android Studio:
1. Mở project trong Android Studio
2. Chọn device/emulator
3. Click **Run** button (Shift+F10)

#### Với Command Line:
```bash
# Cài đặt APK lên device/emulator
./gradlew installDebug

# Khởi chạy app
adb shell am start -n com.example.date_time_checker_mobile/.MainActivity
```

### 🎯 Testing Application Flow
1. **Nhập ngày hợp lệ** (VD: 25/12/2024) → Kết quả: ✅ Valid
2. **Nhập ngày không tồn tại** (VD: 30/02/2024) → Kết quả: ❌ Invalid
3. **Test năm nhuận** (VD: 29/02/2024) → Kết quả: ✅ Valid
4. **Test giới hạn** (VD: 99/99/9999) → Kết quả: ❌ Invalid

---

## 🧪 Testing

### 🔬 Unit Tests
```bash
# Chạy tất cả unit tests
./gradlew test

# Chạy tests với detailed output
./gradlew test --info

# Xem test report
open app/build/reports/tests/testDebugUnitTest/index.html
```

### 📱 Instrumented Tests
```bash
# Đảm bảo device/emulator đang chạy
adb devices

# Chạy instrumented tests
./gradlew connectedAndroidTest

# Xem test results
open app/build/reports/androidTests/connected/index.html
```

### 🎯 End-to-End Tests với CodeceptJS

#### Chuẩn bị:
```bash
# 1. Khởi động backend server
cd backend && ./mvnw spring-boot:run

# 2. Khởi động Android emulator
emulator -avd Pixel_4_API_29

# 3. Khởi động Appium server
appium --port 4723
```

#### Chạy E2E Tests:
```bash
# Chạy tất cả E2E tests
npx codeceptjs run

# Chạy với output chi tiết
npx codeceptjs run --verbose

# Chạy specific test
npx codeceptjs run tests/date_time_checker_test.js

# Chạy với custom configuration
npx codeceptjs run --grep "@smoke"
```

#### Test Profiles:
```bash
# Smoke tests (quick validation)
npx codeceptjs run-multiple smoke

# Regression tests (comprehensive)
npx codeceptjs run-multiple regression

# Parallel execution
npx codeceptjs run-multiple parallel
```

### 📊 Test Cases Coverage

| Test Case | Input | Expected Output | Status |
|-----------|-------|-----------------|---------|
| **Valid Date** | 25/12/2024 | ✅ Valid | ✅ Pass |
| **Invalid Date** | 30/02/2024 | ❌ Invalid | ✅ Pass |
| **Leap Year** | 29/02/2024 | ✅ Valid | ✅ Pass |
| **Out of Range** | 99/99/2024 | ❌ Invalid | ✅ Pass |
| **Edge Case** | 31/12/3000 | ❌ Invalid | ✅ Pass |
| **Clear Function** | Clear all fields | Empty state | ✅ Pass |

---

## 🔧 Cấu hình

### 🌐 API Configuration

#### Android App (MainActivity.kt):
```kotlin
private const val API_URL = "http://10.0.2.2:8080/api/validate-date"
// 10.0.2.2 là localhost từ Android Emulator
// Cho physical device, sử dụng IP thực của máy
```

#### Backend (application.properties):
```properties
server.port=8080
spring.application.name=date-validator
logging.level.com.fpt.superapp=DEBUG
```

### 📱 CodeceptJS Configuration

#### Basic Config (codecept.conf.js):
```javascript
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      desiredCapabilities: {
        app: process.env.APK_PATH || './app/build/outputs/apk/debug/app-debug.apk',
        udid: process.env.DEVICE_ID || 'emulator-5554',
        platformName: 'Android',
        appPackage: 'com.example.date_time_checker_mobile',
        appActivity: '.MainActivity',
        automationName: 'UiAutomator2',
        newCommandTimeout: 300,
        androidDeviceReadyTimeout: 60,
        androidInstallTimeout: 120
      }
    }
  }
}
```

### 🔑 Environment Variables
```bash
# Backend Configuration
export BACKEND_URL=http://localhost:8080
export SPRING_PROFILES_ACTIVE=dev

# Testing Configuration
export APK_PATH=./app/build/outputs/apk/debug/app-debug.apk
export DEVICE_ID=emulator-5554
export APPIUM_PORT=4723

# CI/CD Configuration
export HEADLESS=true
export PARALLEL_TESTING=true
```

### 📋 Custom Configuration Files

#### `.env` file:
```bash
# Backend
BACKEND_URL=http://localhost:8080
DATABASE_URL=jdbc:h2:mem:testdb

# Testing
APK_PATH=./app/build/outputs/apk/debug/app-debug.apk
DEVICE_ID=emulator-5554
TEST_TIMEOUT=30000

# CI/CD
BUILD_ENVIRONMENT=local
ENABLE_SCREENSHOTS=true
```

---

## 📊 CI/CD Pipeline

### 🔄 Workflow Overview
```
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│  Code   │ -> │  Build  │ -> │  Test   │ -> │ Deploy  │
│ Commit  │    │ & Pack  │    │ & QA    │    │ & Ship  │
└─────────┘    └─────────┘    └─────────┘    └─────────┘
```

### ✨ Features

#### 🔀 Parallel Testing
- Chạy Unit Tests và E2E Tests đồng thời
- Giảm thời gian testing từ 15 phút xuống 8 phút
- Hỗ trợ multiple devices/emulators

#### 📸 Screenshot on Failure
- Tự động chụp screenshot khi test fail
- Lưu trong `./output/screenshots/`
- Tích hợp vào test reports

#### 🔄 Retry Mechanism
- Tự động retry test bị lỗi (tối đa 2 lần)
- Smart retry: chỉ retry những test bị lỗi do network/timing
- Báo cáo chi tiết về retry attempts

#### 🎯 Test Profiles
```bash
# Smoke Tests (5 phút)
npm run test:smoke

# Regression Tests (15 phút)
npm run test:regression

# Performance Tests (10 phút)
npm run test:performance
```

### 📋 Pipeline Configuration

#### GitHub Actions Example:
```yaml
name: Mobile CI/CD

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Java
        uses: actions/setup-java@v3
        with:
          java-version: '11'
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
      - name: Run Tests
        run: |
          ./gradlew test
          npm test
```

---

## 🐛 Troubleshooting

### 🔧 Common Issues & Solutions

#### 📱 Android Build Issues

**❌ Problem**: `ANDROID_HOME not set`
```bash
# ✅ Solution
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

**❌ Problem**: `Execution failed for task ':app:mergeDebugResources'`
```bash
# ✅ Solution
./gradlew clean
./gradlew assembleDebug
```

#### 🌐 Backend Connection Issues

**❌ Problem**: `Connection refused to localhost:8080`
```bash
# ✅ Check backend status
curl http://localhost:8080/api/validate-date

# ✅ Restart backend
cd backend && ./mvnw spring-boot:run
```

**❌ Problem**: `CORS error from Android app`
```java
// ✅ Verify CORS configuration in DateController.java
@CrossOrigin(origins = "*")
@RestController
```

#### 📱 Appium Testing Issues

**❌ Problem**: `An unknown server-side error occurred while processing the command`
```bash
# ✅ Solution
# Restart Appium server
pkill -f appium
appium --port 4723

# Reset emulator
adb reboot
```

**❌ Problem**: `App not installed on device`
```bash
# ✅ Solution
adb install -r app/build/outputs/apk/debug/app-debug.apk
adb shell pm list packages | grep date_time_checker
```

#### 🔍 General Debugging

**❌ Problem**: Tests timeout
```javascript
// ✅ Increase timeout in codecept.conf.js
timeout: 60000,
newCommandTimeout: 300
```

**❌ Problem**: Screenshots not generated
```bash
# ✅ Check output directory permissions
chmod 755 ./output
mkdir -p ./output/screenshots
```

### 🆘 Debug Commands

```bash
# Check system status
adb devices                          # List connected devices
appium doctor                        # Verify Appium setup
./gradlew dependencies              # Check Android dependencies
npm audit                           # Check Node.js vulnerabilities

# Logs and debugging
adb logcat | grep date_time_checker # Android app logs
npx codeceptjs run --debug          # Debug CodeceptJS
./gradlew test --debug-jvm          # Debug Gradle tests
```

---

## ❓ FAQ

### 🤔 General Questions

**Q: Tại sao cần cả Android app và backend server?**
A: Để demo full-stack development và testing workflow. Backend xử lý logic phức tạp, Android app demo UI/UX.

**Q: Có thể chạy trên iOS không?**
A: Hiện tại chỉ support Android. Có thể extend cho iOS bằng cách thêm iOS app và update Appium config.

**Q: Tại sao dùng CodeceptJS thay vì Espresso?**
A: CodeceptJS hỗ trợ E2E testing cross-platform, dễ đọc, và tích hợp tốt với CI/CD.

### 🛠️ Technical Questions

**Q: Làm sao để add thêm test cases?**
A: Thêm scenarios trong `tests/date_time_checker_test.js`:
```javascript
Scenario('Test custom case', ({ I }) => {
  I.fillField('day', '15');
  I.fillField('month', '06');
  I.fillField('year', '2024');
  I.tap('Validate');
  I.see('Valid');
});
```

**Q: Cách modify API endpoint?**
A: 
1. Update URL trong `MainActivity.kt`
2. Update `BACKEND_URL` trong `codecept.conf.js`
3. Restart cả app và tests

**Q: Làm sao để test trên real device?**
A:
```bash
# 1. Enable USB Debugging trên phone
# 2. Connect phone qua USB
# 3. Update device ID
export DEVICE_ID=$(adb devices | grep device | head -1 | cut -f1)
# 4. Update API URL trong app (dùng IP thật thay vì 10.0.2.2)
```

### 📊 Performance Questions

**Q: Tests chạy chậm, làm sao tối ưu?**
A:
```bash
# Chạy parallel tests
npx codeceptjs run-multiple parallel

# Chỉ chạy smoke tests
npx codeceptjs run --grep "@smoke"

# Tắt animations
adb shell settings put global window_animation_scale 0
adb shell settings put global transition_animation_scale 0
adb shell settings put global animator_duration_scale 0
```

---

## 🤝 Contributing

### 🎯 How to Contribute

1. **🍴 Fork repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Mobile-Testing-CI-CD.git
   ```

2. **🌿 Create feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **💻 Make changes**
   - Follow coding standards
   - Add tests for new features
   - Update documentation

4. **✅ Test your changes**
   ```bash
   ./gradlew test                    # Unit tests
   npx codeceptjs run               # E2E tests
   ```

5. **📝 Commit with clear message**
   ```bash
   git commit -m "feat: add amazing feature"
   ```

6. **🚀 Push and create PR**
   ```bash
   git push origin feature/amazing-feature
   ```

### 📋 Contribution Guidelines

#### Code Style
- **Kotlin**: Follow [Kotlin coding conventions](https://kotlinlang.org/docs/coding-conventions.html)
- **Java**: Follow [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html)
- **JavaScript**: Use ES6+ syntax, follow [Airbnb style guide](https://github.com/airbnb/javascript)

#### Testing Requirements
- ✅ All new features must have unit tests
- ✅ E2E tests for UI changes
- ✅ Test coverage > 80%

#### Documentation
- 📝 Update README for new features
- 💬 Add comments for complex logic
- 📊 Update API documentation

### 🏷️ Issue Labels
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to docs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed

---

## 📄 License

Dự án này được phát triển cho **mục đích học tập và nghiên cứu**.

```
MIT License

Copyright (c) 2024 chube-coder-2k4

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 👥 Tác giả

### 🧑‍💻 Main Developer
**chube-coder-2k4**
- 🌐 GitHub: [@chube-coder-2k4](https://github.com/chube-coder-2k4)
- 📧 Email: Contact via GitHub Issues
- 💼 LinkedIn: [Connect on LinkedIn](https://linkedin.com/in/chube-coder-2k4)

### 🎯 Skills Demonstrated
- 📱 **Mobile Development**: Android + Kotlin + Jetpack Compose
- 🖥️ **Backend Development**: Spring Boot + Java + REST API
- 🧪 **Test Automation**: CodeceptJS + Appium + JUnit
- 🔄 **DevOps**: CI/CD + Gradle + npm

### 🤝 Contributors Welcome!
Interested in contributing? Check out our [Contributing Guidelines](#-contributing) or create an issue to get started!

---

## 📞 Hỗ trợ

### 🆘 Need Help?

1. **📖 Check Documentation**: README và inline comments
2. **🔍 Search Issues**: Có thể đã có người gặp vấn đề tương tự
3. **🆕 Create New Issue**: Mô tả chi tiết problem + steps to reproduce
4. **💬 Discussion**: Sử dụng GitHub Discussions cho questions

### 📧 Contact Methods

- **🐛 Bug Reports**: [Create Issue](https://github.com/chube-coder-2k4/Mobile-Testing-CI-CD/issues/new?template=bug_report.md)
- **💡 Feature Requests**: [Create Issue](https://github.com/chube-coder-2k4/Mobile-Testing-CI-CD/issues/new?template=feature_request.md)
- **❓ Questions**: [GitHub Discussions](https://github.com/chube-coder-2k4/Mobile-Testing-CI-CD/discussions)
- **📧 Direct Contact**: Create issue và mention @chube-coder-2k4

### 🚀 Quick Links

- **📊 Project Board**: [View Progress](https://github.com/chube-coder-2k4/Mobile-Testing-CI-CD/projects)
- **📈 Analytics**: [Repository Insights](https://github.com/chube-coder-2k4/Mobile-Testing-CI-CD/pulse)
- **🔄 Actions**: [CI/CD Status](https://github.com/chube-coder-2k4/Mobile-Testing-CI-CD/actions)
- **📋 Releases**: [Version History](https://github.com/chube-coder-2k4/Mobile-Testing-CI-CD/releases)

---

<div align="center">

### 🌟 Star this repo if you find it helpful!

[![GitHub stars](https://img.shields.io/github/stars/chube-coder-2k4/Mobile-Testing-CI-CD?style=social)](https://github.com/chube-coder-2k4/Mobile-Testing-CI-CD/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/chube-coder-2k4/Mobile-Testing-CI-CD?style=social)](https://github.com/chube-coder-2k4/Mobile-Testing-CI-CD/network/members)

**Made with ❤️ by [chube-coder-2k4](https://github.com/chube-coder-2k4)**

*Happy Coding! 🚀*

</div>
