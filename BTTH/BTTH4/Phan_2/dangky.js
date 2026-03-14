document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            sections.forEach(sec => {
                if (sec.id === targetId) sec.removeAttribute('hidden');
                else sec.setAttribute('hidden', '');
            });
        });
    });

    initRegisterForm();
    initOrderForm();
});

function initRegisterForm() {
    const byId = (id) => document.getElementById(id);
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRx = /^0[0-9]{9}$/;
    const nameRx = /^[a-zA-ZÀ-ỹ\s]{3,}$/;
    const pwRx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    const form = byId('regForm');
    if (!form) return;
    const email = byId('reg-email');
    const phone = byId('reg-phone');
    const password = byId('reg-password');
    const confirm = byId('reg-confirm');
    const genderRadios = document.querySelectorAll('input[name="reg-gender"]');
    const terms = byId('reg-terms');

    const successBox = byId('reg-success');
    const successName = byId('reg-successName');

    const errIdOf = (input) => {
        const tail = input.id.split('reg-')[1];
        return 'reg-err-' + tail;
    };
    function showError(input, msg) {
        const err = byId(errIdOf(input));
        if (err) err.textContent = msg || '';
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
    function clearError(input) {
        const err = byId(errIdOf(input));
        if (err) err.textContent = '';
        input.classList.remove('invalid');
        input.classList.add('valid');
    }

    function vFullname() {
        const v = (fullname.value || '').trim();
        if (!v) return showError(fullname, 'Họ tên không được để trống.'), false;
        if (v.length < 3) return showError(fullname, 'Họ tên phải ≥ 3 ký tự.'), false;
        if (!nameRx.test(v)) return showError(fullname, 'Chỉ chứa chữ cái và khoảng trắng.'), false;
        clearError(fullname); return true;
    }
    function vEmail() {
        const v = (email.value || '').trim();
        if (!v) return showError(email, 'Email không được để trống.'), false;
        if (!emailRx.test(v)) return showError(email, 'Email không đúng định dạng.'), false;
        clearError(email); return true;
    }
    function vPhone() {
        const v = (phone.value || '').trim();
        if (!v) return showError(phone, 'SĐT không được để trống.'), false;
        if (!phoneRx.test(v)) return showError(phone, 'SĐT phải 10 số và bắt đầu bằng 0.'), false;
        clearError(phone); return true;
    }
    function vPassword() {
        const v = password.value || '';
        if (!v) return showError(password, 'Mật khẩu không được để trống.'), false;
        if (!pwRx.test(v)) return showError(password, '≥ 8 ký tự, có hoa, thường, số.'), false;
        clearError(password); return true;
    }
    function vConfirm() {
        const v = confirm.value || '';
        if (v !== (password.value || '')) return showError(confirm, 'Mật khẩu xác nhận không khớp.'), false;
        clearError(confirm); return true;
    }
    function vGender() {
        const ok = Array.from(genderRadios).some(r => r.checked);
        const err = byId('reg-err-gender');
        if (!ok) { if (err) err.textContent = 'Vui lòng chọn giới tính.'; return false; }
        if (err) err.textContent = '';
        return true;
    }
    function vTerms() {
        const err = byId('reg-err-terms');
        if (!terms.checked) { if (err) err.textContent = 'Bạn phải đồng ý điều khoản.'; return false; }
        if (err) err.textContent = '';
        return true;
    }

    [fullname, email, phone, password, confirm].forEach((el) => {
        el.addEventListener('blur', () => {
            if (el === fullname) vFullname();
            else if (el === email) vEmail();
            else if (el === phone) vPhone();
            else if (el === password) vPassword();
            else if (el === confirm) vConfirm();
        });
        el.addEventListener('input', () => {
            const err = byId(errIdOf(el));
            if (err && err.textContent) err.textContent = '';
            el.classList.remove('invalid');
        });
    });
    genderRadios.forEach(r => r.addEventListener('change', vGender));
    terms.addEventListener('change', vTerms);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const checks = [vFullname(), vEmail(), vPhone(), vPassword(), vConfirm(), vGender(), vTerms()];
        if (!checks.every(Boolean)) return;
        successName.textContent = (fullname.value || '').trim();
        form.hidden = true;
        successBox.hidden = false;
    });
}

function initOrderForm() {
    const $id = (id) => document.getElementById(id);
    const $$ = (sel) => document.querySelectorAll(sel);
    const toVND = (n) => Number(n || 0).toLocaleString('vi-VN');
    const PRICES = { "Áo": 150000, "Quần": 200000, "Giày": 450000 };

    const form = $id('orderForm');
    if (!form) return;
    const product = $id('ord-product');
    const quantity = $id('ord-quantity');
    const date = $id('ord-date');
    const address = $id('ord-address');
    const note = $id('ord-note');
    const payments = $$('input[name="ord-payment"]');

    const totalPrice = $id('ord-totalPrice');
    const noteCount = $id('ord-noteCount');

    const confirmBox = $id('ord-confirmBox');
    const summary = $id('ord-summary');
    const btnConfirm = $id('ord-btnConfirm');
    const btnCancel = $id('ord-btnCancel');
    const success = $id('ord-success');

    const setErr = (id, msg) => { const el = $id(id); if (el) el.textContent = msg || ''; };
    const invalid = (el) => { el.classList.add('invalid'); el.classList.remove('valid'); };
    const valid = (el) => { el.classList.remove('invalid'); el.classList.add('valid'); };


    const vProduct = () => {
        if (!product.value) { setErr('ord-err-product', 'Vui lòng chọn sản phẩm.'); invalid(product); return false; }
        setErr('ord-err-product', ''); valid(product); return true;
    };
    const vQuantity = () => {
        const v = Number(quantity.value);
        if (!Number.isInteger(v) || v < 1 || v > 99) { setErr('ord-err-quantity', 'Số lượng 1–99.'); invalid(quantity); return false; }
        setErr('ord-err-quantity', ''); valid(quantity); return true;
    };
    const getLocalMidnight = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const vDate = () => {
        const val = date.value;
        if (!val) { setErr('ord-err-date', 'Vui lòng chọn ngày.'); invalid(date); return false; }
        const today = getLocalMidnight(new Date());
        const chosen = getLocalMidnight(new Date(val));
        const max = new Date(today); max.setDate(max.getDate() + 30);
        if (chosen < today) { setErr('ord-err-date', 'Không là ngày quá khứ.'); invalid(date); return false; }
        if (chosen > max) { setErr('ord-err-date', 'Không quá 30 ngày từ hôm nay.'); invalid(date); return false; }
        setErr('ord-err-date', ''); valid(date); return true;
    };
    const vAddress = () => {
        const v = (address.value || '').trim();
        if (!v) { setErr('ord-err-address', 'Địa chỉ không được để trống.'); invalid(address); return false; }
        if (v.length < 10) { setErr('ord-err-address', 'Địa chỉ phải ≥ 10 ký tự.'); invalid(address); return false; }
        setErr('ord-err-address', ''); valid(address); return true;
    };
    const vNote = () => {
        const v = note.value || '';
        noteCount.textContent = v.length;
        const over = v.length > 200;
        const counter = noteCount.parentElement;
        if (counter) counter.classList.toggle('over', over);
        if (over) { setErr('ord-err-note', 'Ghi chú không vượt quá 200 ký tự.'); return false; }
        setErr('ord-err-note', ''); return true;
    };
    const vPayment = () => {
        const ok = Array.from(payments).some(r => r.checked);
        if (!ok) { setErr('ord-err-payment', 'Vui lòng chọn phương thức thanh toán.'); return false; }
        setErr('ord-err-payment', ''); return true;
    };


    const updateTotal = () => {
        const p = PRICES[product.value] || 0;
        const q = Math.max(1, Math.min(99, Number(quantity.value || 0)));
        totalPrice.textContent = toVND(p * q);
    };

    product.addEventListener('change', () => { vProduct(); updateTotal(); });
    quantity.addEventListener('input', () => { vQuantity(); updateTotal(); });
    date.addEventListener('change', vDate);
    address.addEventListener('blur', vAddress);
    address.addEventListener('input', () => { setErr('ord-err-address', ''); address.classList.remove('invalid'); });
    note.addEventListener('input', vNote);
    payments.forEach(r => r.addEventListener('change', vPayment));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const checks = [vProduct(), vQuantity(), vDate(), vAddress(), vNote(), vPayment()];
        if (!checks.every(Boolean)) return;

        const p = product.value;
        const q = Number(quantity.value);
        const d = new Date(date.value);
        const total = (PRICES[p] || 0) * q;

        summary.innerHTML = `
      <ul>
        <li><b>Sản phẩm:</b> ${p}</li>
        <li><b>Số lượng:</b> ${q}</li>
        <li><b>Tổng tiền:</b> ${toVND(total)} đ</li>
        <li><b>Ngày giao dự kiến:</b> ${d.toLocaleDateString('vi-VN')}</li>
        <li><b>Địa chỉ:</b> ${address.value.trim()}</li>
        <li><b>Thanh toán:</b> ${Array.from(payments).find(r => r.checked)?.value || ''}</li>
      </ul>
    `;
        confirmBox.hidden = false;
    });

    btnConfirm.addEventListener('click', () => {
        confirmBox.hidden = true;
        form.hidden = true;
        success.hidden = false;
    });
    btnCancel.addEventListener('click', () => { confirmBox.hidden = true; });

    updateTotal();
    vNote();
}