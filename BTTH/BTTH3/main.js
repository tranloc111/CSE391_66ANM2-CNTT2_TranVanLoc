console.log("Hello from JavaScript!");
let name = "LỘC";
let yearOfBirth = 2005;
let currentYear = 2026;
let age = currentYear - 2006;

console.log("Xin chào, mình là " + name + ", năm nay mình " + age + " tuổi.");
// TODO: Đổi giá trị score và quan sát kết quả
let score = 4;

// TODO: Dự đoán điều kiện if/else đang làm gì, rồi chạy thử
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
function xepLoai(avg) {
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
// Gợi ý dùng thử hàm trong console:
// tinhDiemTrungBinh(8, 7, 9);
function kiemTraTuoi(age) {
    if (age >= 18) {
        console.log("Đủ 18 tuổi");
    } else {
        console.log("Chưa đủ 18 tuổi");
    }
}