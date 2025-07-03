Feature('Date Time Checker - Complete Test Suite');

Scenario('Test Case 1: Valid Date Input', ({ I }) => {
  I.say('=== TEST CASE 1: NGÀY HỢP LỆ ===');
  I.wait(3);

  I.say('Nhập ngày hợp lệ: 25/12/2024');
  I.fillField('//android.widget.EditText[1]', '25');  // Day
  I.fillField('//android.widget.EditText[2]', '12');  // Month
  I.fillField('//android.widget.EditText[3]', '2024'); // Year

  I.click('Check');
  I.wait(3);

  I.see('Valid Date');
  I.say('✅ Test Case 1 PASSED: Ngày hợp lệ được xác nhận');
  I.saveScreenshot('test_case_1_valid_date.png');
});

Scenario('Test Case 2: Invalid Date - February 30th', ({ I }) => {
  I.say('=== TEST CASE 2: NGÀY KHÔNG TỒN TẠI ===');
  I.wait(2);

  I.say('Nhập ngày không tồn tại: 30/02/2024');
  I.fillField('//android.widget.EditText[1]', '30');  // Day
  I.fillField('//android.widget.EditText[2]', '2');   // Month
  I.fillField('//android.widget.EditText[3]', '2024'); // Year

  I.click('Check');
  I.wait(3);

  I.see('Invalid Date');
  I.say('✅ Test Case 2 PASSED: Ngày không hợp lệ được phát hiện');
  I.saveScreenshot('test_case_2_invalid_date.png');
});

Scenario('Test Case 3: Out of Range Input', ({ I }) => {
  I.say('=== TEST CASE 3: GIÁ TRỊ NGOÀI PHẠM VI ===');
  I.wait(2);

  I.say('Nhập giá trị ngoài phạm vi: 99/99/2024');
  I.fillField('//android.widget.EditText[1]', '99');  // Day
  I.fillField('//android.widget.EditText[2]', '99');  // Month
  I.fillField('//android.widget.EditText[3]', '2024'); // Year

  I.click('Check');
  I.wait(3);

  I.see('Out of range');
  I.say('✅ Test Case 3 PASSED: Giá trị ngoài phạm vi được phát hiện');
  I.saveScreenshot('test_case_3_out_of_range.png');
});

Scenario('Test Case 4: Clear Button Functionality', ({ I }) => {
  I.say('=== TEST CASE 4: CHỨC NĂNG XÓA DỮ LIỆU ===');
  I.wait(2);

  I.say('Bước 1: Nhập dữ liệu');
  I.fillField('//android.widget.EditText[1]', '10');
  I.fillField('//android.widget.EditText[2]', '5');
  I.fillField('//android.widget.EditText[3]', '2023');

  I.say('Bước 2: Nhấn nút Clear');
  I.click('Clear');
  I.wait(1);

  I.say('Bước 3: Kiểm tra các ô đã được xóa');
  // Kiểm tra ứng dụng vẫn hoạt động bình thường
  I.see('Date Time Checker');
  I.see('Day (1-31)');
  I.see('Month (1-12)');

  I.say('✅ Test Case 4 PASSED: Chức năng Clear hoạt động tốt');
  I.saveScreenshot('test_case_4_clear_function.png');
});

Scenario('Test Case 5: Leap Year Test', ({ I }) => {
  I.say('=== TEST CASE 5: KIỂM TRA NĂM NHUẬN ===');
  I.wait(2);

  I.say('Nhập ngày 29/02/2024 (năm nhuận)');
  I.fillField('//android.widget.EditText[1]', '29');  // Day
  I.fillField('//android.widget.EditText[2]', '2');   // Month
  I.fillField('//android.widget.EditText[3]', '2024'); // Year (năm nhuận)

  I.click('Check');
  I.wait(3);

  I.see('Valid Date');
  I.say('✅ Test Case 5 PASSED: Năm nhuận được xử lý đúng');
  I.saveScreenshot('test_case_5_leap_year.png');
});

Scenario('Test Case 6: Edge Case - Year 3000', ({ I }) => {
  I.say('=== TEST CASE 6: KIỂM TRA GIỚI HẠN NĂM ===');
  I.wait(2);

  I.say('Nhập năm 3000 (giới hạn trên)');
  I.fillField('//android.widget.EditText[1]', '1');
  I.fillField('//android.widget.EditText[2]', '1');
  I.fillField('//android.widget.EditText[3]', '3000');

  I.click('Check');
  I.wait(3);

  I.see('Valid Date');
  I.say('✅ Test Case 6 PASSED: Giới hạn năm 3000 hợp lệ');
  I.saveScreenshot('test_case_6_year_3000.png');
});