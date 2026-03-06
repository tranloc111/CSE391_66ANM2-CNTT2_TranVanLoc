
## BTTH03: JS nền tảng, DOM & Sự kiện

**Đối tượng:** Sinh viên chưa học lý thuyết JavaScript

---

## 1. MỤC TIÊU HỌC TẬP

Sau buổi lab, sinh viên có thể:

- Mô tả được JavaScript là gì, chạy ở đâu, khác HTML/CSS ở điểm nào.
- Viết được các đoạn JS đơn giản với:
  - Biến, kiểu dữ liệu cơ bản (number, string, boolean),
  - Cú pháp lệnh, toán tử đơn giản,
  - Cấu trúc điều khiển if/else, vòng lặp đơn giản,
  - Hàm (function) có tham số và giá trị trả về.
- Thao tác được với DOM:
  - Lấy phần tử bằng `document.getElementById`,
  - Thay đổi nội dung văn bản, kiểu dáng (style),
  - Lắng nghe và xử lý một số sự kiện cơ bản: `click`, `input`.
- Nhận biết jQuery là một thư viện hỗ trợ thao tác DOM/sự kiện (ở mức nhận diện, chưa cần sử dụng thành thạo).

---

## 2. CẤU TRÚC THỜI GIAN BUỔI LAB
- 03 tiết thực hành.

---

## 3. HOẠT ĐỘNG 1 (45’): GIỚI THIỆU JS & CÚ PHÁP CƠ BẢN

### 3.1. Chuẩn bị file HTML & JS

Tạo file `lab-js-basic.html`:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Lab JS Cơ bản</title>
</head>
<body>
  <h1>Khám phá JavaScript</h1>
  <p id="welcome">Chưa có JavaScript...</p>
  <button id="runBtn">Nhấn để chạy JS</button>

  <script src="main.js"></script>
</body>
</html>
```

Tạo file `main.js`:

```js
console.log("Hello from JavaScript!");
```


---

### 3.2. Nhiệm vụ cho sinh viên

#### Bước 1: Mở file \& Quan sát bằng Console

1. Mở `lab-js-basic.html` trong trình duyệt (Chrome/Edge/…).
2. Mở DevTools → tab **Console**.
3. Quan sát thông báo xuất hiện.

> Câu hỏi:
> - Em thấy dòng thông báo nào trong console?
    Hello from JavaScript!
> - Điều này cho em biết JavaScript đang làm gì khi trang web được tải?
     JavaScript đã được trình duyệt chạy thành công khi trang web đọc file html và phát hiện có gắn file javascrip rồi tự động chạy các lệnh js trong file

---

#### Bước 2:  “JavaScript là gì?” (Tra cứu nhanh)

Sử dụng 1–2 nguồn tài liệu (vd. W3Schools, freeCodeCamp, …), tóm tắt:

> a) JavaScript chạy ở đâu? (Trình duyệt / Server / Cả hai?)
  - javascript có thể chạy ở cả hai phía trình duyệt và cả server
> b) HTML, CSS, JavaScript mỗi phần chịu trách nhiệm chính về điều gì?
>
> - HTML: Xây dựng cấu trúc và nội dung của trang web
> - CSS: Thiết kế giao diện và kiểu dáng hiển thị
> - JavaScript: Xử lý hành vi và tương tác của trang web

---

#### Bước 3: Thử nghiệm biến \& kiểu dữ liệu trong Console

Trong tab Console, gõ từng dòng sau và ghi lại kết quả:

```js
let age = 20;
const name = "An";
let isStudent = true;

typeof age;
typeof name;
typeof isStudent;

1 + 2 * 3;
"Hello " + "world";
```

> Câu hỏi:
> - Kết quả `typeof age` là gì?
> - Kết quả `typeof name` là gì?
> - Kết quả `typeof isStudent` là gì?
> - Em hãy tự mô tả ngắn gọn:
>   - `number` là: Kiểu dữ liệu dùng để lưu trữ các giá trị số
>   - `string` là: Kiểu dữ liệu dùng để lưu trữ chuỗi ký tự/văn bản
>   - `boolean` là: Kiểu dữ liệu chỉ có 2 giá trị đúng hoặc sai

---

#### Bước 4: Viết đoạn script tính tuổi

Mở file `main.js`, viết thêm:

```js
let name = "An";
let yearOfBirth = 2005;
let currentYear = 2026;
let age = currentYear - yearOfBirth;

console.log("Xin chào, mình là " + name + ", năm nay mình " + age + " tuổi.");
```

Sau đó:

1. Đổi giá trị `name`, `yearOfBirth` thành thông tin của chính em.
2. Reload trang \& quan sát console.

> Câu hỏi:
> - Dòng log hiển thị gì sau khi em sửa thông tin?
  Hiển thị thông tin tên và tuổi của em.
> - Nếu em quên dấu `;` hoặc quên dấu `+`, điều gì xảy ra? Trình duyệt báo lỗi thế nào?
  + quên dấu cộng trình duyệt báo syntaxerror
  + quên dấu ; trình duyệt không báo lỗi gì cả code vẫn chạy bình thường.
---

#### Bước 5: Phản tư nhanh (Reflection)

> - Điều thú vị nhất em vừa khám phá được về console là gì?
    + chạy và kiểm tra code mà không cần chỉnh sửa trong file
    + vừa chạy trực tiếp vừa hiển thị luôn kết quả
> - Em gặp lỗi cú pháp nào? Em đã xử lý bằng cách nào (tự sửa, hỏi bạn, đọc lỗi, tìm Google, …)?
    + quên dấu, sai tên biến, thiếu dấu...
    + Mở tab Console để đọc thông báo lỗi mà trình duyệt hiển thị.
    + Xác định vị trí dòng bị lỗi.
    + Tự chỉnh sửa lại cú pháp cho đúng hoặc tham khảo ví dụ mẫu để sửa lỗi.

---

## 4. HOẠT ĐỘNG 2 (40’): CẤU TRÚC ĐIỀU KHIỂN \& HÀM

### 4.1. Chuẩn bị file logic (hoặc viết tiếp trong main.js)

Ví dụ đoạn mã:

```js
// TODO: Đổi giá trị score và quan sát kết quả
let score = 7.5;

// TODO: Dự đoán điều kiện if/else đang làm gì, rồi chạy thử: nếu điều kiện 1 đúng thì đi theo hướng đó nếu sai kiểm tra điều kiện tiếp cứ như thế đến khi tìm đc điều kiện đúng, nếu tất cả đều sai chạy lệnh trong else
if (score >= 8) {
  console.log("Giỏi");
} else if (score >= 6.5) {
  console.log("Khá");
} else if (score >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

// TODO: Viết hàm tính điểm trung bình 3 môn
function tinhDiemTrungBinh(m1, m2, m3) {
  let avg = (m1 + m2 + m3) / 3;
  return avg;
}
tinhDiemTrungBinh(1, 2, 3);

// Gợi ý dùng thử hàm trong console:
// tinhDiemTrungBinh(8, 7, 9);
```


---

### 4.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đoán trước – chạy sau

> a) Nếu `score = 9`, em dự đoán console sẽ in: dự đoán in giỏi vì 9>8.
> b) Nếu `score = 6`, em dự đoán console sẽ in: dự đoán in trung bình vì 6>5 và 6<6.5

Sau đó:

1. Thay `score = 9`, reload trang hoặc chạy file và kiểm tra console.
2. Thay `score = 6`, kiểm tra lại.

> So sánh dự đoán và kết quả thực tế:
> - Trường hợp `score = 9`: Dự đoán vs Thực tế: giống nhau
> - Trường hợp `score = 6`: Dự đoán vs Thực tế: giống nhau

---

#### Bước 2: Mô tả lại if/else bằng lời

> - Khi nào chương trình in `"Giỏi"`?
> - Khi nào chương trình in `"Yếu"`?
> - Em hãy mô tả cấu trúc `if/else` bằng lời của em (có thể ví von “ngã rẽ” trong đời sống):
  + khi score có giá trị lớn hơn 8 thì chương trình in giỏi
  + khi score có giá trị nhỏ hơn hẳn 5 thì chương trình in yếu
  + nếu điều kiện 1 đúng thì đi theo hướng đó nếu sai kiểm tra điều kiện tiếp cứ như thế đến khi tìm đc điều kiện đúng, nếu tất cả đều sai chạy lệnh trong else

---

#### Bước 3: Làm việc với hàm

1. Mở Console, gọi hàm:
```js
tinhDiemTrungBinh(8, 7, 9);
```

> Em ghi lại giá trị hàm trả về: 8

2. Viết thêm hàm `xepLoai(avg)` trong file JS:
```js
function xepLoai(avg) {
  // TODO: Dùng if/else để:
  // avg >= 8  -> "Giỏi"
  // avg >= 6.5 -> "Khá"
  // avg >= 5  -> "Trung bình"
  // còn lại   -> "Yếu"
  if (avg >= 8) {
        console.log("giỏi");
    } else if (avg >= 6.5) {
        console.log("khá");
    } else if (avg >= 5) {
        console.log("trung bình");
    } else {
        console.log("yếu");
    }
}
```

3. Gọi thử trong console:
```js
let avg = tinhDiemTrungBinh(8, 7, 9);
let loai = xepLoai(avg);
console.log("Điểm TB:", avg, " - Xếp loại:", loai);
```

> Câu hỏi:
> - Một hàm gồm những phần chính nào?
>   - Tên hàm: Là tên được đặt cho hàm để có thể gọi và sử dụng lại khi cần,thường được đặt theo chức nằng của hàm.
>   - Tham số (parameters): Là các giá trị đầu vào được truyền vào hàm, để hàm xử lý theo chức năng hàm.
>   - Thân hàm (body): Là phần chứa các câu lệnh thực hiện nhiệm vụ của hàm, được đặt trong {}.
>   - Giá trị trả về (return): Là kết quả mà hàm trả về sau khi thực hiện xong các xử lý bên trong, thường được trả về thông qua return.
> - Ưu điểm của việc dùng hàm thay vì lặp lại cùng một đoạn code nhiều lần là gì?
  +Tái sử dụng code nhiều lần
  +Làm chương trình ngắn gọn hơn
  +Dễ sửa lỗi và bảo trì
  +Tăng tính rõ ràng và dễ hiểu cho chương trình

---

#### Bước 4: Mở rộng nhỏ (tuỳ chọn)

Viết hàm `kiemTraTuoi(age)`:

```js
function kiemTraTuoi(age) {
  // TODO:
  // Nếu age >= 18 -> console.log("Đủ 18 tuổi");
  // Ngược lại -> console.log("Chưa đủ 18 tuổi");
   if (age >= 18) {
        console.log("Đủ 18 tuổi");
    } else {
        console.log("Chưa đủ 18 tuổi");
    }
}
```

Gọi thử: `kiemTraTuoi(16);`, `kiemTraTuoi(20);`.

---

#### Bước 5: Phản tư

> - Phần nào trong if/else hoặc hàm khiến em khó hiểu nhất? không có
> - Em đã làm gì để vượt qua (thử nhiều lần, hỏi bạn, xem lại ví dụ, tra Google, …)?
  + vọc vạch thử nhiều lần, tất cả các trường hợp

---

## 5. HOẠT ĐỘNG 3 (40’): THAO TÁC DOM \& SỰ KIỆN

### 5.1. Chuẩn bị HTML

Thêm vào trang (hoặc tạo file mới):

```html
<section>
  <h2>DOM & Sự kiện</h2>
  <p id="status">Chưa có tương tác...</p>

  <button id="btnHello">Chào</button>
  <button id="btnRed">Đổi màu nền thành đỏ</button>

  <div style="margin-top: 20px;">
    <label>Nhập tên: </label>
    <input id="nameInput" type="text" />
    <p id="greeting"></p>
  </div>
</section>

<script src="dom.js"></script>
```

Tạo file `dom.js`:

```js
const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");

btnHello.addEventListener("click", function () {
  statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
});
```


---

### 5.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đọc \& giải thích

> Câu hỏi:
> - `document.getElementById("status")` đang làm gì?
  + Truy xuất phần tử có id = "status" trong cây DOM để có thể đọc/ghi nội dung hoặc đổi style bằng JS
> - Sự kiện `"click"` xảy ra khi nào?
  + Khi người dùng nhấn vào phần tử 
> - Trong đoạn code trên, khi nhấn nút `btnHello`, điều gì thay đổi trên trang?
  + Nội dung của phần tử #status được thay bằng chuỗi "Xin chào! Đây là nội dung được thay đổi bằng JavaScript."

---

#### Bước 2: Thử nghiệm nút đổi màu nền

Hoàn thiện code:

```js
const btnRed = document.getElementById("btnRed");

btnRed.addEventListener("click", function () {
  // TODO: Đổi màu nền trang thành đỏ
  document.body.style.backgroundColor = "red";
});
```

> Câu hỏi:
> - Em có thể đổi sang màu khác (vd. `lightblue`) không? Hãy thử.
  + có
> - Em hãy ghi lại 1 ví dụ khác mà JavaScript có thể làm với `document.body.style`.
  + đổi font chữ 
  + document.body.style.fontFamily = "Arial";
  + tăng kích thước: document.body.style.fontSize = "20px";
  + đổi khoảng cách dòng: document.body.style.lineHeight = "1.8";
---

#### Bước 3: Xử lý sự kiện input – gõ tên, hiện lời chào

Hoàn thiện code:

```js
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameInput.addEventListener("input", function () {
  const value = nameInput.value;
  greeting.textContent = "Xin chào, " + value + "!";
});
```

> Câu hỏi:
> - Sự kiện `"input"` khác gì so với `"click"`?
  + input kích hoạt mỗi lần nội dung ô nhập thay đổi (gõ, xoá, dán, autofill), còn click kích hoạt khi người dùng nhấn chuột vào phần tử.
> - Khi em xoá hết nội dung ô input, dòng `greeting` hiển thị gì?

---

#### Bước 4: Liên hệ khái niệm DOM

> DOM (Document Object Model) là mô hình biểu diễn trang HTML dưới dạng một **cây các đối tượng** mà JavaScript có thể truy cập và thay đổi.
>
> Em hãy:
> - Tự mô tả DOM bằng lời của em:
>   + DOM là mô hình biến trang HTML thành một cây các đối tượng; nhờ đó JavaScript có thể tìm, đọc và thay đổi mọi phần tử trên trang.
> - Nêu 1 ví dụ “thao tác DOM” trong bài (ghi lại 1 dòng lệnh cụ thể).
  + statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
---

#### Bước 5: Ảnh kết quả

Hãy chụp các ảnh màn hình:

1. Khi vừa tải trang (chưa tương tác).
2. Sau khi nhấn “Chào”.
3. Sau khi đổi nền sang màu đỏ.
4. Khi gõ tên và nhìn thấy lời chào xuất hiện.

*(Ảnh có thể được yêu cầu nộp cùng bài hoặc dán vào báo cáo)*

---

## 6. KẾT THÚC (15’): GIỚI THIỆU JQUERY \& PHẢN TƯ

### 6.1. Nhìn nhanh jQuery (so sánh với JS thuần)

Ví dụ:

```js
// JS thuần
document.getElementById("btnHello").addEventListener("click", function () {
  alert("Hello from JS!");
});

// jQuery (giả sử đã import jQuery)
$("#btnHello").on("click", function () {
  alert("Hello from jQuery!");
});
```

> Câu hỏi:
> - Điểm giống nhau về chức năng giữa 2 đoạn code trên là gì?
  + Cả hai đoạn đều lắng nghe sự kiện click trên cùng một nút (btnHello) và thực thi hành động (hiện thông báo).
  Tức là kết quả giống nhau, chỉ khác cách viết.
> - Điểm khác nhau về cú pháp là gì (`document.getElementById` vs `$("#id")`, `addEventListener` vs `.on`)?
  + JS thuần dùng:

      document.getElementById("id") để lấy phần tử
    .addEventListener("click", ...) để gắn sự kiện


  + jQuery dùng:

      $("#id") để lấy phần tử (ngắn gọn hơn, giống CSS selector)
    .on("click", ...) để gắn sự kiện (cú pháp ngắn, linh hoạt hơn)
> - Em hãy tra cứu nhanh “What is jQuery used for?” và ghi 2 ý chính:
>   1. jQuery giúp rút gọn và đơn giản hoá thao tác DOM, chọn phần tử, thay đổi nội dung, CSS… nhanh và ít code hơn nhiều so với JS thuần.
>   2. jQuery giúp xử lý sự kiện, hiệu ứng, AJAX dễ dàng hơn và tương thích tốt trên nhiều trình duyệt cũ.

---

### 6.2. Tự đánh giá \& định hướng

> 1. Sau buổi lab, em tò mò nhất về phần nào của JavaScript/DOM?
  + javascrip 
> 2. Em muốn tự làm thêm tính năng gì trên trang web (vd: bộ đếm, đổi theme, pop-up, mini game, …)?
  + đổi theme và pop-up
> 3. Em đánh giá mức độ hiểu của mình về:
>    - Biến \& kiểu dữ liệu: [ ] Chưa hiểu  [1] Tạm ổn  [ ] Khá rõ
>    - If/else \& hàm:       [ ] Chưa hiểu  [1] Tạm ổn  [ ] Khá rõ
>    - DOM \& sự kiện:       [1] Chưa hiểu  [ ] Tạm ổn  [ ] Khá rõ

---

## 7. GHI CHÚ CHO GIẢNG VIÊN (NỘI BỘ)

- Có thể cho SV làm theo cặp/nhóm 2–3 để hỗ trợ nhau thử nghiệm, đọc lỗi, tra cứu.
- Tùy thời lượng thực tế, có thể:
    - Giảm bớt phần mở rộng (hàm `kiemTraTuoi`, tuỳ biến thêm hiệu ứng).
    - Hoặc tăng thêm bài tập DOM (ẩn/hiện một khối, đếm số lần click, v.v.).
- Phiếu học tập tiếp theo có thể chi tiết hóa từng hoạt động thành form trả lời, chỗ dán ảnh, và câu hỏi mini test trắc nghiệm.

```

---```

