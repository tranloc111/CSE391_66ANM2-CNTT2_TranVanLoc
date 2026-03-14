# BÀI TẬP THỰC HÀNH SỐ 4
**Học phần:** Nền tảng phát triển Web  
**Dành cho:** K66  
**Thời lượng:** 3 tiết.  
**Nội dung:** HTML DOM (Xử lý sự kiện) & Validation trong Form

---

## 🎯 MỤC TIÊU BUỔI THỰC HÀNH

- Thao tác với HTML DOM: lấy, thêm, xóa, sửa phần tử qua JavaScript.
- Xử lý các sự kiện DOM: `click`, `input`, `change`, `submit`, `keyup`, `blur`.
- Áp dụng validation (kiểm tra dữ liệu) trên Form sử dụng JavaScript thuần.
- Hiển thị thông báo lỗi trực quan ngay bên dưới từng trường nhập liệu.

---

## PHẦN 1 – HTML DOM & XỬ LÝ SỰ KIỆN (50 phút)

### 1.1 Kiến thức cần nắm trước khi làm bài

Trước khi bắt đầu, sinh viên tự ôn lại các khái niệm sau (tra cứu MDN nếu chưa nhớ):

| Phương thức / Thuộc tính | Công dụng |
|---|---|
| `document.getElementById(id)` | Lấy phần tử theo `id` |
| `document.querySelector(selector)` | Lấy phần tử đầu tiên khớp CSS selector |
| `document.querySelectorAll(selector)` | Lấy tất cả phần tử khớp CSS selector |
| `element.textContent` / `.innerHTML` | Đọc/ghi nội dung text hoặc HTML |
| `element.style.property` | Thay đổi CSS inline |
| `element.classList.add/remove/toggle` | Thêm/xóa/toggle CSS class |
| `element.addEventListener(event, fn)` | Gắn sự kiện cho phần tử |
| `document.createElement(tag)` | Tạo phần tử HTML mới |
| `parent.appendChild(child)` | Thêm phần tử con vào cuối cha |
| `element.remove()` | Xóa phần tử khỏi DOM |
| `element.getAttribute(attr)` | Đọc giá trị thuộc tính HTML |
| `element.setAttribute(attr, val)` | Gán giá trị thuộc tính HTML |

> 💡 **Lưu ý về Event Delegation**: Thay vì gắn sự kiện cho từng phần tử con (đặc biệt khi tạo động), hãy gắn sự kiện lên phần tử **cha** rồi dùng `event.target` để xác định phần tử được tương tác. Cách này hiệu quả hơn và không bị mất sự kiện khi DOM thay đổi.

---

### 📝 Bài 1.1 – Bảng Điểm Sinh Viên (25 phút)

**Mô tả:** Xây dựng trang quản lý điểm sinh viên đơn giản, có thêm và xóa dòng trong bảng.

**Yêu cầu giao diện:**
- Hai ô nhập liệu: **Họ tên** và **Điểm** (0–10).
- Nút **"Thêm"** và bảng hiển thị danh sách bên dưới.
- Bảng gồm các cột: STT | Họ tên | Điểm | Xếp loại | Thao tác.

**Yêu cầu chức năng:**

1. Khi bấm nút "Thêm":
   - Kiểm tra: họ tên không trống, điểm hợp lệ (số từ 0–10). Nếu sai → hiện `alert`.
   - Tạo một hàng `<tr>` mới với đầy đủ thông tin, trong đó cột **Xếp loại** được tính tự động theo quy tắc:
     - ≥ 8.5 → Giỏi | ≥ 7.0 → Khá | ≥ 5.0 → Trung bình | < 5.0 → Yếu
   - Hàng có điểm dưới 5.0 phải được **tô màu nền vàng** để nổi bật.
   - Sau khi thêm, xóa trắng ô nhập và đưa con trỏ về ô họ tên.

2. Mỗi hàng có nút **"Xóa"** — khi bấm, hàng đó bị xóa khỏi bảng và danh sách.

3. Bên dưới bảng hiển thị dòng thống kê: tổng số sinh viên và **điểm trung bình** của cả lớp (cập nhật sau mỗi lần thêm/xóa).

4. Cho phép nhấn **Enter** ở ô Điểm để thêm (thay vì phải dùng chuột bấm nút).

**Gợi ý kỹ thuật:**
- Dùng một **mảng** để lưu danh sách sinh viên, sau mỗi thay đổi gọi lại hàm `renderTable()` để vẽ lại toàn bộ bảng.
- Dùng **Event Delegation** trên `<tbody>` để xử lý sự kiện xóa thay vì gắn trực tiếp từng nút.
- Dùng thuộc tính `data-index` trên nút Xóa để biết cần xóa phần tử nào trong mảng.

---

### 📝 Bài 1.2 – Bộ Lọc & Tìm Kiếm Danh Sách (25 phút)

**Mô tả:** Nâng cấp bài 1.1 (hoặc tạo trang mới) với khả năng tìm kiếm và lọc dữ liệu theo thời gian thực.

**Yêu cầu chức năng:**

1. **Tìm kiếm realtime**: Thêm ô tìm kiếm phía trên bảng. Khi người dùng gõ vào (`input` event), bảng lập tức chỉ hiển thị các hàng có tên **chứa chuỗi tìm kiếm** (không phân biệt hoa thường). Nếu không tìm thấy kết quả → hiển thị dòng chữ "Không có kết quả".

2. **Lọc theo xếp loại**: Thêm `<select>` với các tùy chọn: Tất cả / Giỏi / Khá / Trung bình / Yếu. Khi thay đổi (`change` event), bảng chỉ hiển thị sinh viên thuộc xếp loại được chọn.

3. **Sắp xếp**: Khi người dùng click vào tiêu đề cột **"Điểm"**, danh sách được sắp xếp tăng dần; click lần nữa thì giảm dần. Tiêu đề cột hiển thị mũi tên ▲ / ▼ để chỉ chiều sắp xếp hiện tại.

4. **Kết hợp**: Tìm kiếm, lọc và sắp xếp có thể **hoạt động đồng thời** (ví dụ: tìm tên "Nguyễn" trong nhóm "Khá" sắp xếp theo điểm tăng dần).

**Gợi ý kỹ thuật:**
- Giữ nguyên mảng gốc `students[]`, tạo thêm biến `filteredStudents[]` là kết quả sau khi áp dụng bộ lọc + tìm kiếm + sắp xếp. Hàm `renderTable()` chỉ vẽ `filteredStudents[]`.
- Viết một hàm `applyFilters()` duy nhất, gọi hàm này mỗi khi có bất kỳ thay đổi nào (tìm kiếm, lọc, sắp xếp).
- Dùng `array.filter()`, `array.sort()` để xử lý dữ liệu.
- Dùng `str.toLowerCase().includes(keyword)` để tìm kiếm không phân biệt hoa thường.

---

## PHẦN 2 – VALIDATION TRONG FORM ⭐ (60 phút)

> ⚠️ **Đây là phần thi chính – Sinh viên cần nắm vững và thực hành thành thạo.**

### 2.1 Kiến thức cần nắm trước khi làm bài

**Các sự kiện quan trọng trong form:**

| Sự kiện | Khi nào kích hoạt | Dùng để |
|---|---|---|
| `submit` | Khi nhấn nút submit hoặc Enter | Validate toàn bộ form trước khi gửi |
| `blur` | Khi người dùng rời khỏi một trường | Validate từng trường ngay lập tức |
| `input` | Mỗi khi nội dung thay đổi | Xóa thông báo lỗi / validate realtime |
| `change` | Khi giá trị thay đổi và rời khỏi trường | Dùng cho `<select>`, checkbox, radio |

**Nguyên tắc hiển thị lỗi tốt:**
- Mỗi trường có một `<span class="error">` riêng ngay bên dưới — **không dùng `alert()`**.
- Khi lỗi → span hiện lên (màu đỏ), trường viền đỏ.
- Khi hợp lệ → span ẩn, trường viền xanh.
- Khi người dùng bắt đầu nhập lại → xóa lỗi ngay (`input` event).

**Regex thường dùng trong validation:**

```
Email:     /^[^\s@]+@[^\s@]+\.[^\s@]+$/
SĐT VN:    /^0[0-9]{9}$/
Mật khẩu: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
Chỉ chữ:  /^[a-zA-ZÀ-ỹ\s]+$/
```

---

### 📝 Bài 2.1 – Form Đăng Ký Tài Khoản (30 phút)

**Mô tả:** Xây dựng form đăng ký với đầy đủ validation phía client.

**Yêu cầu các trường trong form:**

| Trường | Ràng buộc |
|---|---|
| Họ và tên | Không trống, ≥ 3 ký tự, chỉ chứa chữ cái và khoảng trắng |
| Email | Không trống, đúng định dạng `name@domain.com` |
| Số điện thoại | Không trống, 10 chữ số, bắt đầu bằng `0` |
| Mật khẩu | Không trống, ≥ 8 ký tự, có ít nhất 1 chữ hoa, 1 chữ thường, 1 số |
| Xác nhận mật khẩu | Phải khớp với mật khẩu |
| Giới tính | Bắt buộc chọn 1 radio button |
| Điều khoản | Bắt buộc tick checkbox |

**Yêu cầu kỹ thuật:**

1. **Validate khi submit** (`event.preventDefault()`): Kiểm tra lần lượt tất cả các trường. Nếu có lỗi → hiển thị thông báo và **dừng lại**, không gửi form.

2. **Validate realtime khi blur**: Mỗi trường được kiểm tra ngay khi người dùng rời khỏi ô đó (gắn sự kiện `blur`).

3. **Xóa lỗi khi nhập lại**: Khi người dùng bắt đầu gõ vào trường đang lỗi, thông báo lỗi biến mất ngay (gắn sự kiện `input`).

4. **Thành công**: Khi tất cả hợp lệ → ẩn form, hiển thị thông báo "Đăng ký thành công! 🎉" và tên người dùng vừa đăng ký.

**Gợi ý cấu trúc JavaScript:**
- Viết một hàm riêng cho mỗi trường: `validateFullname()`, `validateEmail()`, ... — mỗi hàm trả về `true/false`.
- Viết hàm tiện ích `showError(fieldId, message)` và `clearError(fieldId)` để tái sử dụng.
- Trong handler submit: gọi tất cả các hàm validate và dùng toán tử `&` (không phải `&&`) để đảm bảo tất cả đều được gọi, không dừng sớm.

---

### 📝 Bài 2.2 – Form Đặt Hàng Có Validation Nâng Cao (30 phút)

**Mô tả:** Xây dựng form đặt hàng trực tuyến với các ràng buộc phức tạp hơn và phản hồi UI chi tiết hơn.

**Yêu cầu các trường trong form:**

| Trường | Ràng buộc |
|---|---|
| Tên sản phẩm | Dropdown `<select>`, bắt buộc chọn (không để "-- Chọn sản phẩm --") |
| Số lượng | Số nguyên, từ 1 đến 99 |
| Ngày giao hàng | Kiểu `date`, không được là ngày trong quá khứ, không quá 30 ngày từ hôm nay |
| Địa chỉ giao | Không trống, ≥ 10 ký tự |
| Ghi chú | Không bắt buộc, nhưng nếu nhập thì không quá 200 ký tự |
| Phương thức thanh toán | Radio button: COD / Chuyển khoản / Ví điện tử — bắt buộc chọn |

**Yêu cầu kỹ thuật:**

1. Tất cả yêu cầu validate cơ bản như Bài 2.1 (submit, blur, xóa lỗi khi input).

2. **Đếm ký tự realtime** cho ô Ghi chú: Hiển thị số ký tự đã nhập / tối đa (VD: `45/200`). Khi vượt quá → số đếm đổi màu đỏ và hiện thông báo lỗi.

3. **Tính tổng tiền tự động**: Khi người dùng chọn sản phẩm hoặc thay đổi số lượng, tự động tính và hiển thị tổng tiền (giá mỗi sản phẩm do sinh viên tự định nghĩa trong một object). Dùng sự kiện `change` trên `<select>` và `input` trên số lượng.

4. **Xác nhận trước khi submit**: Khi form hợp lệ, hiển thị một `<div>` tóm tắt thông tin đơn hàng (tên SP, số lượng, tổng tiền, ngày giao) và hỏi "Xác nhận đặt hàng?" với 2 nút "Xác nhận" và "Hủy". Chỉ khi bấm "Xác nhận" mới hiển thị thông báo thành công.

**Gợi ý kỹ thuật:**
- Dùng `new Date()` và so sánh timestamp để validate ngày giao hàng.
- Lưu giá sản phẩm trong một object: `const prices = { "Áo": 150000, "Quần": 200000, ... }`.
- Dùng `Number(el.value).toLocaleString("vi-VN")` để định dạng tiền tệ kiểu Việt Nam.
- Dùng `element.style.display = "block"/"none"` để ẩn/hiện div xác nhận.

---

## PHẦN 3 – LUYỆN TẬP VỀ NHÀ 🏠

> Hoàn thành trước buổi thực hành tiếp theo.

### Bài tập về nhà 1: Nâng cấp Form Đăng Ký

Nâng cấp form Bài 2.1 với các tính năng sau:

- **Thanh mức độ mạnh mật khẩu (Password Strength Bar)**: Hiển thị realtime mức độ: Yếu (đỏ) / Trung bình (vàng) / Mạnh (xanh) dựa trên độ dài và độ phức tạp.
- **Hiển thị/ẩn mật khẩu**: Nút toggle 👁 bên cạnh ô mật khẩu để chuyển đổi `type="password"` ↔ `type="text"`.
- **Đếm ký tự họ tên**: Hiển thị số ký tự đang nhập / tối đa 50 (VD: `12/50`).

### Bài tập về nhà 2: Multi-step Form (Nâng cao)

Xây dựng form **đăng ký nhiều bước**:

- **Bước 1** – Thông tin cá nhân: Họ tên, Ngày sinh, Giới tính.
- **Bước 2** – Thông tin tài khoản: Email, Mật khẩu, Xác nhận mật khẩu.
- **Bước 3** – Xác nhận: Hiển thị lại toàn bộ thông tin đã nhập.

Yêu cầu:
- Nút "Tiếp theo" chỉ hoạt động khi tất cả trường ở bước hiện tại hợp lệ.
- Nút "Quay lại" giữ nguyên dữ liệu đã nhập, không reset.
- Thanh tiến trình (progress bar) hiển thị đang ở bước mấy / tổng số bước.

---

## 📌 TÀI LIỆU THAM KHẢO

- MDN – DOM Events: https://developer.mozilla.org/en-US/docs/Web/Events
- MDN – HTMLFormElement: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement
- Regex tester: https://regexr.com
- JS Form Validation: https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/

---

*Học phần: Nền tảng phát triển Web – CSE391 | Kỳ học: 2025-2026*
