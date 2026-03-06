const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");

btnHello.addEventListener("click", function () {
    statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
});
const btnRed = document.getElementById("btnRed");

btnRed.addEventListener("click", function () {
    // TODO: Đổi màu nền trang thành đỏ
    document.body.style.backgroundColor = "red";
}); const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameInput.addEventListener("input", function () {
    const value = nameInput.value;
    greeting.textContent = "Xin chào, " + value + "!";
});
