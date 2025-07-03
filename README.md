# Mobile Testing CI/CD - Date Time Checker

Dự án này là một ứng dụng Android được viết bằng Kotlin với Jetpack Compose, được thiết kế để kiểm tra tính hợp lệ của ngày tháng thông qua API backend. Dự án bao gồm hệ thống testing tự động sử dụng CodeceptJS và Appium.

## 📱 Tính năng chính

- **Kiểm tra ngày hợp lệ**: Xác thực tính hợp lệ của ngày/tháng/năm
- **Giao diện Jetpack Compose**: UI hiện đại và responsive
- **Kết nối API**: Tích hợp với backend để xử lý logic validation
- **Testing tự động**: Bộ test hoàn chỉnh với CodeceptJS và Appium

## 🏗️ Kiến trúc dự án

### Android App
- **Language**: Kotlin
- **UI Framework**: Jetpack Compose
- **HTTP Client**: OkHttp3
- **Min SDK**: 29
- **Target SDK**: 35

### Testing Framework
- **Mobile Testing**: CodeceptJS + Appium
- **Test Types**: Unit tests, Instrumented tests, End-to-end tests
- **Backend Testing**: REST API testing

## 📁 Cấu trúc thư mục

```
Mobile-Testing-CI-CD/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   └── java/com/example/date_time_checker_mobile/
│   │   │       └── MainActivity.kt
│   │   ├── test/                 # Unit tests
│   │   └── androidTest/          # Instrumented tests
│   └── build.gradle.kts
├── tests/
│   └── date_time_checker_test.js # End-to-end tests
├── codecept.conf.js              # CodeceptJS configuration
├── steps_file.js                 # Custom test steps
└── settings.gradle.kts
```

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- Android Studio
- Node.js (cho CodeceptJS)
- Java 11+
- Android SDK
- Appium Server

### Cài đặt

1. **Clone repository**:
```bash
git clone https://github.com/chube-coder-2k4/Mobile-Testing-CI-CD.git
cd Mobile-Testing-CI-CD
```

2. **Cài đặt dependencies cho testing**:
```bash
npm install
```

3. **Build Android app**:
```bash
./gradlew assembleDebug
```

### Chạy ứng dụng

1. **Chạy backend server** (cần có sẵn tại `http://localhost:8080`)

2. **Chạy ứng dụng Android**:
```bash
./gradlew installDebug
```

## 🧪 Testing

### Unit Tests
```bash
./gradlew test
```

### Instrumented Tests
```bash
./gradlew connectedAndroidTest
```

### End-to-End Tests với CodeceptJS
```bash
# Khởi động Appium server
appium

# Chạy tests
npx codeceptjs run
```

### Test Cases bao gồm:

1. **Valid Date Input**: Kiểm tra ngày hợp lệ (25/12/2024)
2. **Invalid Date**: Kiểm tra ngày không tồn tại (30/02/2024)
3. **Out of Range**: Kiểm tra giá trị ngoài phạm vi (99/99/2024)
4. **Clear Function**: Kiểm tra chức năng xóa dữ liệu
5. **Leap Year**: Kiểm tra năm nhuận (29/02/2024)
6. **Edge Cases**: Kiểm tra giới hạn năm (3000)

## 🔧 Cấu hình

### API Configuration
Ứng dụng kết nối đến backend tại:
```kotlin
private const val API_URL = "http://10.0.2.2:8080/api/validate-date"
```

### CodeceptJS Configuration
- **Platform**: Android
- **Automation**: UiAutomator2
- **App Package**: com.example.date_time_checker_mobile
- **Timeouts**: Được tối ưu cho CI/CD

### Environment Variables
```bash
# Backend URL
BACKEND_URL=http://localhost:8080

# APK Path for testing
APK_PATH=./app/build/outputs/apk/debug/app-debug.apk

# Device ID
DEVICE_ID=emulator-5554
```

## 📊 CI/CD Features

- **Parallel Testing**: Hỗ trợ chạy test song song
- **Multiple Profiles**: Smoke tests, Regression tests
- **Screenshot on Fail**: Tự động chụp màn hình khi test fail
- **Retry Failed Steps**: Tự động retry test bị lỗi
- **Cross-platform Support**: Android emulator và real device

## 🤝 Contributing

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📝 License

Dự án này được phát triển cho mục đích học tập và nghiên cứu.

## 👥 Author

- **chube-coder-2k4** - [GitHub Profile](https://github.com/chube-coder-2k4)

## 📞 Support

Nếu bạn có bất kỳ câu hỏi nào, hãy tạo issue trong repository này.
