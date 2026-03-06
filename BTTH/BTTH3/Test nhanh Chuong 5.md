```md
# PHIẾU ÔN TẬP – KIỂM TRA KIẾN THỨC CẦN ĐẠT  
## Chương 5: Những kiến thức nền tảng về JavaScript (5.1 → 5.4)

**Họ và tên:** Trần Văn Lộc
**Mã sinh viên:** 2451271135  
**Lớp:** _66ANM2 
**Thời gian làm:** ____ phút  
**Hình thức:** Cá nhân  
**Yêu cầu:** Trả lời ngắn gọn, đúng ý; với câu code hãy viết đúng cú pháp.

---

## A. Mục tiêu kiến thức cần đạt

Sau khi hoàn thành Chương 5, sinh viên cần:

- Mô tả được JavaScript là gì, chạy ở đâu, vai trò trong web (HTML/CSS/JS). [web:37]  
- Hiểu cú pháp cơ bản, khai báo biến `var/let/const`, kiểu dữ liệu thường gặp, toán tử, ép kiểu cơ bản. [web:57][web:58][web:42]  
- Viết được câu lệnh điều kiện, vòng lặp; định nghĩa và gọi hàm, nắm được tham số/giá trị trả về. [web:47][web:63]  
- Nhận biết khái niệm OOP trong JS: object, property, method; hiểu class ở mức cơ bản và cơ chế prototype ở mức nhận biết. [web:48][web:61]

---

## B. PHẦN 5.1 – GIỚI THIỆU VỀ JAVASCRIPT

### B1. Câu hỏi ngắn
1) JavaScript là gì? (Viết 1–2 câu) [web:37]  
  + JavaScript là ngôn ngữ lập trình dùng để tạo sự tương tác và xử lý hành vi trên trang web.
2) JavaScript có thể chạy ở đâu? Nêu ít nhất 2 môi trường. [web:37]  
- Trình duyệt web (Chrome, Edge, Firefox,...)
- Máy chủ (Server) thông qua môi trường Node.js

3) Phân biệt vai trò của HTML – CSS – JavaScript trong trang web (mỗi cái 1 ý). [web:37]  
- HTML: Xây dựng cấu trúc nội dung trang web  
- CSS: Thiết kế giao diện và kiểu dáng hiển thị 
- JavaScript: Xử lý hành vi và tương tác của trang web



### B2. Đúng/Sai (ghi Đ hoặc S)
4) JavaScript chỉ chạy được trong trình duyệt. _S_ [web:37]  
5) JavaScript dùng để xử lý tương tác và hành vi của trang web. _Đ__ [web:37]

---

## C. PHẦN 5.2 – CÚ PHÁP JAVASCRIPT & CÁC KIỂU DỮ LIỆU

### C1. Khai báo biến: var/let/const
6) Điền vào chỗ trống:  
- `let` có phạm vi (scope) theo ___block_____ (function/block). [web:57]  
- `var` có phạm vi (scope) theo ___function_____ (function/block). [web:57]  
- `const` ___không_____ (có/không) cho phép gán lại (reassign) biến. [web:57]

7) Cho đoạn code, hãy dự đoán và giải thích ngắn:

```js
const arr =;
arr.push(4);
arr =;[^1]
```

- Dòng nào chạy được? Dòng nào lỗi? Vì sao? [web:57]
dòng const arr=; và dòng arr=;[^1] lỗi vì sai cấu trú cú pháp và dòng 3 lỗi vì gán một mảng mới cho arr khi dòng 1 đẫ khai báo là hằng.
dòng 2 chạy được chỉ là thêm phần tử cho mảng


### C2. Kiểu dữ liệu (Data Types)

8) JavaScript có các kiểu dữ liệu cơ bản (primitive) và kiểu Object. Hãy liệt kê ít nhất 5 kiểu dữ liệu. [web:58][web:42]

- Number
- String
- Boolean
- Null
- Undefined
- Object

9) Cho các biểu thức sau, hãy ghi kết quả của `typeof`:
```js
typeof 10
typeof "10"
typeof true
typeof null
typeof { a: 1 }
```

- Kết quả: number-string-boolean-object-object [web:58][web:42]

> Gợi ý: Có một “điểm đặc biệt” với `null`. Em ghi chú lại nếu thấy khác thường. [web:42]

### C3. Toán tử \& ép kiểu cơ bản

10) Dự đoán kết quả:
```js
"5" + 1
"5" - 1
```

- Kết quả: "5" + 1 -> '51'
           "5" - 1 -> 4 [web:42]

11) Giải thích ngắn sự khác nhau giữa `==` và `===` (1–2 câu).
== so sánh giá trị (có ép kiểu dữ liệu)
=== so sánh cả giá trị và kiểu dữ liệu (không ép kiểu)

---

## D. PHẦN 5.3 – CẤU TRÚC ĐIỀU KHIỂN \& HÀM

### D1. Điều kiện if/else

12) Viết đoạn code: nếu `score >= 5` in `"Pass"`, ngược lại in `"Fail"`. [web:47][web:63]
```js
// TODO:
let score = 5;

if (score >= 5) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

13) Câu hỏi: Trong chuỗi `if ... else if ... else`, khi một điều kiện đúng thì các nhánh còn lại có được kiểm tra nữa không? Giải thích ngắn. [web:65]
  + Không.Khi gặp điều kiện đúng chương trình sẽ chạy khối lệnh tương ứng và bỏ qua tất cả các điều kiện phía sau.

### D2. Vòng lặp

14) Viết vòng lặp `for` in ra các số từ 1 đến 5. [web:47]
```js
// TODO:
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

15) Viết vòng lặp `while` để cộng dồn tổng từ 1 đến n (n cho trước). [web:47]
```js
// Input:
let n = 5;
// TODO:

let sum = 0;
let i = 1;

while (i <= n) {
  sum += i;
  i++;
}

console.log(sum);


### D3. Hàm (function)

16) Hoàn thiện hàm `sum(a, b)` trả về tổng 2 số: [web:47]
```js
function sum(a, b) {
  // TODO:
  return a + b;
}
```

17) Phân biệt:

- **Parameter (tham số)** là gì?
  + Là biến được khai báo trong hàm, dùng để nhận giá trị đầu vào, khai báo và hoạt động trong hàm.
- **Argument (đối số)** là gì? 
  + Là giá trị thật được truyền vào hàm khi gọi hàm, khai báo trong phần thân.
(Trả lời ngắn + ví dụ 1 dòng)
sum(3, 4); - 3, 4 là arguments
sum(a, b); - a, b là parameters
18) Viết hàm `isEven(n)` trả về `true` nếu n chẵn, `false` nếu n lẻ.
```js
// TODO:
function isEven(n) {
  return n % 2 === 0;
}
```


---

## E. PHẦN 5.4 – LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG (OOP) VỚI JAVASCRIPT

### E1. Object cơ bản

19) Tạo một object `student` có các property: `name`, `id`, `gpa` và method `introduce()` in ra câu giới thiệu. [web:61]
```js
// TODO:
const student = {
  name: "Tran Van Loc",
  id: "2451271135",
  gpa: 3.5,
  introduce() {
    console.log("Hí, tôi là " + this.name);
  }
};
```

20) Cho object:
```js
const student = {
  name: "An",
  gpa: 3.2
};
```

- Truy cập `name` theo 2 cách khác nhau (dot notation và bracket notation). [web:61]

```js
// Cách 1:
  student.name;
// Cách 2:
student["name"];
```


### E2. Class (mức cơ bản)

21) Hoàn thiện class `Person` có:

- constructor nhận `name`, `age`
- method `greet()` in `"Hello, I'm <name>"` [web:61]

```js
class Person {
  // TODO:
  
 constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, I'm " + this.name);
  }
}

const p1 = new Person("Linh", 20);
p1.greet();
```

22) (Câu hỏi) `constructor` trong class dùng để làm gì? (1 câu) [web:61]
Constructor dùng để khởi tạo giá trị ban đầu cho các thuộc tính của đối tượng khi tạo instance mới từ class.

### E3. Prototype (mức nhận biết)

23) Prototype trong JavaScript liên quan đến cơ chế “kế thừa/tra cứu thuộc tính” giữa các object. Em hãy mô tả prototype bằng lời của em (2–3 câu). [web:48]
  + cho phép một object truy cập các thuộc tính và phương thức nằm trong prototype của nó.
  + Nếu một thuộc tính không tồn tại trong object, JavaScript sẽ tự động tìm lên prototype chain để truy cập.
24) Quan sát đoạn ví dụ (không cần thuộc lòng):
```js
const personPrototype = {
  greet() { console.log("hello!"); }
};

const carl = Object.create(personPrototype);
carl.greet();
```

- `Object.create(personPrototype)` làm gì? (1 câu) [web:48]
  + tạo đối tượng mới kế thừa các thuộc tính, phương thức từ personPrototype

---

## F. TỰ ĐÁNH GIÁ (Self-Reflection)

1) Em tự chấm mức hiểu của mình (khoanh tròn):

- 5.1 Giới thiệu JS:  Chưa hiểu / Tạm ổn / Khá rõ
  + tạm ổn
- 5.2 Cú pháp \& kiểu DL: Chưa hiểu / Tạm ổn / Khá rõ
  + tạm ổn
- 5.3 Điều khiển \& hàm: Chưa hiểu / Tạm ổn / Khá rõ
  + tạm ổn
- 5.4 OOP JS: Chưa hiểu / Tạm ổn / Khá rõ
  + chửa hiểu lắm, còn hơi rối
2) Ba điều em còn chưa chắc hoặc muốn hỏi thêm:
1. hơi rối về kế thừa oop 
2. cách truy cập và tương tác với các thuộc tính của các đối tượng con được kế thừa từ lớp cha
3. .................................................................................

---


