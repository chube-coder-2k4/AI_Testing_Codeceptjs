package com.example.date_time_checker_mobile

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.launch
import okhttp3.*
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONObject
import java.io.IOException

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            DateTimeCheckerApp()
        }
    }
}

// URL để kết nối từ máy ảo Android đến localhost của máy tính
private const val API_URL = "http://10.0.2.2:8080/api/validate-date"
private val JSON = "application/json; charset=utf-8".toMediaType()
private val client = OkHttpClient()

@Composable
fun DateTimeCheckerApp() {
    var day by remember { mutableStateOf("") }
    var month by remember { mutableStateOf("") }
    var year by remember { mutableStateOf("") }
    var resultText by remember { mutableStateOf("") }
    var resultColor by remember { mutableStateOf(Color.Black) }

    val coroutineScope = rememberCoroutineScope()

    fun performCheck() {
        val jsonBody = JSONObject().apply {
            put("day", day)
            put("month", month)
            put("year", year)
        }
        val requestBody = jsonBody.toString().toRequestBody(JSON)
        val request = Request.Builder().url(API_URL).post(requestBody).build()

        client.newCall(request).enqueue(object : Callback {
            override fun onFailure(call: Call, e: IOException) {
                resultText = "❌ Error connecting to server."
                resultColor = Color.Red
            }

            override fun onResponse(call: Call, response: Response) {
                response.body?.string()?.let {
                    val data = JSONObject(it)
                    resultText = data.getString("message")
                    resultColor = if (data.getBoolean("valid")) Color.Black else Color.Red
                }
            }
        })
    }

    Surface(modifier = Modifier.fillMaxSize()) {
        Column(
            modifier = Modifier.padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text("Date Time Checker", fontSize = 24.sp, style = MaterialTheme.typography.titleLarge)
            Spacer(modifier = Modifier.height(24.dp))

            OutlinedTextField(
                value = day,
                onValueChange = { day = it },
                label = { Text("Day (1-31)") },
                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                // CHUẨN HÓA: Gắn "biển số" cho ô nhập Ngày
                modifier = Modifier.fillMaxWidth().testTag("day_input")
            )
            Spacer(modifier = Modifier.height(8.dp))

            OutlinedTextField(
                value = month,
                onValueChange = { month = it },
                label = { Text("Month (1-12)") },
                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                // CHUẨN HÓA: Gắn "biển số" cho ô nhập Tháng
                modifier = Modifier.fillMaxWidth().testTag("month_input")
            )
            Spacer(modifier = Modifier.height(8.dp))

            OutlinedTextField(
                value = year,
                onValueChange = { year = it },
                label = { Text("Year (e.g. 2024)") },
                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                // CHUẨN HÓA: Gắn "biển số" cho ô nhập Năm
                modifier = Modifier.fillMaxWidth().testTag("year_input")
            )
            Spacer(modifier = Modifier.height(16.dp))

            Row(modifier = Modifier.fillMaxWidth()) {
                Button(
                    onClick = {
                        coroutineScope.launch { performCheck() }
                    },
                    // CHUẨN HÓA: Gắn "biển số" cho nút Check
                    modifier = Modifier.weight(1f).testTag("check_button")
                ) {
                    Text("Check")
                }
                Spacer(modifier = Modifier.width(16.dp))
                Button(
                    onClick = {
                        day = ""
                        month = ""
                        year = ""
                        resultText = ""
                    },
                    // CHUẨN HÓA: Gắn "biển số" cho nút Clear
                    modifier = Modifier.weight(1f).testTag("clear_button")
                ) {
                    Text("Clear")
                }
            }
            Spacer(modifier = Modifier.height(24.dp))

            Text(
                text = resultText,
                color = resultColor,
                fontSize = 18.sp,
                style = MaterialTheme.typography.bodyLarge,
                // CHUẨN HÓA: Gắn "biển số" cho ô hiển thị kết quả
                modifier = Modifier.testTag("result_text")
            )
        }
    }
}