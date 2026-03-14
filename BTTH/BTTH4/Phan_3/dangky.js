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
    initHW1();
    initHW2();
});

function initHW1() {
    const byId = (id) => document.getElementById(id);
    const form = byId('hw1Form');
    if (!form) return;
    const fullname = byId('hw1-fullname');
    const email = byId('hw1-email');
    const password = byId('hw1-password');
    const confirm = byId('hw1-confirm');
    const terms = byId('hw1-terms');
    const nameCount = byId('hw1-nameCount');
    const strengthWrap = form.querySelector('.strength');
    const strengthBar = byId('hw1-strengthBar');
    const strengthLabel = byId('hw1-strengthLabel');
    const successBox = byId('hw1-success');
    const successName = byId('hw1-successName');
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRx = /^[a-zA-ZÀ-ỹ\s]{3,}$/;
    const pwRx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    function errIdOf(input) { return 'hw1-err-' + input.id.split('hw1-')[1]; }
    function showError(input, msg) { const err = byId(errIdOf(input)); if (err) err.textContent = msg || ''; input.classList.add('invalid'); input.classList.remove('valid'); }
    function clearError(input) { const err = byId(errIdOf(input)); if (err) err.textContent = ''; input.classList.remove('invalid'); input.classList.add('valid'); }

    function updateNameCount() { const len = (fullname.value || '').length; nameCount.textContent = len; }
    fullname.addEventListener('input', updateNameCount); updateNameCount();

    form.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-toggle');
            const input = byId(targetId);
            if (!input) return;
            input.type = input.type === 'password' ? 'text' : 'password';
        });
    });

    function assessStrength(pw) {
        if (!pw) return { cls: '', label: 'Độ mạnh: —' };
        const hasLower = /[a-z]/.test(pw);
        const hasUpper = /[A-Z]/.test(pw);
        const hasDigit = /\d/.test(pw);
        const hasSpec = /[^A-Za-z0-9]/.test(pw);
        const length = pw.length;
        let score = 0;
        if (length >= 8) score++;
        if (hasLower && hasUpper) score++;
        if (hasDigit) score++;
        if (hasSpec) score++;
        if (length >= 12) score++;
        if (score <= 2) return { cls: 'strength-weak', label: 'Độ mạnh: Yếu' };
        if (score === 3 || score === 4) return { cls: 'strength-medium', label: 'Độ mạnh: Trung bình' };
        return { cls: 'strength-strong', label: 'Độ mạnh: Mạnh' };
    }
    function refreshStrength() {
        const s = assessStrength(password.value || '');
        strengthWrap.classList.remove('strength-weak', 'strength-medium', 'strength-strong');
        if (s.cls) strengthWrap.classList.add(s.cls);
        strengthLabel.textContent = s.label;
    }
    password.addEventListener('input', () => { const err = byId(errIdOf(password)); if (err && err.textContent) err.textContent = ''; password.classList.remove('invalid'); refreshStrength(); });
    refreshStrength();

    function vFullname() { const v = (fullname.value || '').trim(); if (!v) return showError(fullname, 'Họ tên không được để trống.'), false; if (v.length < 3) return showError(fullname, 'Họ tên phải ≥ 3 ký tự.'), false; if (!nameRx.test(v)) return showError(fullname, 'Chỉ chứa chữ cái và khoảng trắng.'), false; clearError(fullname); return true; }
    function vEmail() { const v = (email.value || '').trim(); if (!v) return showError(email, 'Email không được để trống.'), false; if (!emailRx.test(v)) return showError(email, 'Email không đúng định dạng.'), false; clearError(email); return true; }
    function vPassword() { const v = password.value || ''; if (!v) return showError(password, 'Mật khẩu không được để trống.'), false; if (!pwRx.test(v)) return showError(password, '≥ 8 ký tự, có hoa, thường, số.'), false; clearError(password); return true; }
    function vConfirm() { const v = confirm.value || ''; if (v !== (password.value || '')) return showError(confirm, 'Mật khẩu xác nhận không khớp.'), false; clearError(confirm); return true; }
    function vTerms() { const err = byId('hw1-err-terms'); if (!terms.checked) { if (err) err.textContent = 'Bạn phải đồng ý điều khoản.'; return false; } if (err) err.textContent = ''; return true; }

    [fullname, email, password, confirm].forEach(el => {
        el.addEventListener('blur', () => {
            if (el === fullname) vFullname();
            else if (el === email) vEmail();
            else if (el === password) vPassword();
            else if (el === confirm) vConfirm();
        });
        el.addEventListener('input', () => { const err = byId(errIdOf(el)); if (err && err.textContent) err.textContent = ''; el.classList.remove('invalid'); });
    });
    terms.addEventListener('change', vTerms);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const checks = [vFullname(), vEmail(), vPassword(), vConfirm(), vTerms()];
        if (!checks.every(Boolean)) return;
        successName.textContent = (fullname.value || '').trim();
        form.hidden = true;
        successBox.hidden = false;
    });

    form.addEventListener('reset', () => {
        setTimeout(() => {
            [fullname, email, password, confirm].forEach(i => { i.classList.remove('valid', 'invalid'); });
            ['fullname', 'email', 'password', 'confirm', 'terms'].forEach(t => { const err = byId('hw1-err-' + t); if (err) err.textContent = ''; });
            nameCount.textContent = '0';
            refreshStrength();
        });
    });
}

function initHW2() {
    const byId = (id) => document.getElementById(id);
    const $$ = (sel) => document.querySelectorAll(sel);
    const form = byId('hw2Form');
    if (!form) return;
    const steps = form.querySelectorAll('.step');
    const prevBtn = byId('hw2-prev');
    const nextBtn = byId('hw2-next');
    const submitBtn = byId('hw2-submit');
    const progressBar = byId('hw2-progressBar');
    const stepText = byId('hw2-stepText');
    const summaryBox = byId('hw2-summary');
    const successBox = byId('hw2-success');
    const fullname = byId('hw2-fullname');
    const dob = byId('hw2-dob');
    const genderRadios = $$('input[name="hw2-gender"]');
    const email = byId('hw2-email');
    const password = byId('hw2-password');
    const confirm = byId('hw2-confirm');
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRx = /^[a-zA-ZÀ-ỹ\s]{3,}$/;
    const pwRx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    function setErr(id, msg) { const el = byId(id); if (el) el.textContent = msg || ''; }
    function invalid(el) { el.classList.add('invalid'); el.classList.remove('valid'); }
    function valid(el) { el.classList.remove('invalid'); el.classList.add('valid'); }

    function vStep1() {
        let ok = true;
        const v = (fullname.value || '').trim();
        if (!v) { setErr('hw2-err-fullname', 'Họ tên không được để trống.'); invalid(fullname); ok = false; }
        else if (v.length < 3 || !nameRx.test(v)) { setErr('hw2-err-fullname', 'Chỉ chữ & ≥ 3 ký tự.'); invalid(fullname); ok = false; }
        else { setErr('hw2-err-fullname', ''); valid(fullname); }
        if (!dob.value) { setErr('hw2-err-dob', 'Vui lòng chọn ngày sinh.'); invalid(dob); ok = false; }
        else { const chosen = new Date(dob.value); const today = new Date(); today.setHours(0, 0, 0, 0); if (chosen > today) { setErr('hw2-err-dob', 'Ngày sinh không hợp lệ (tương lai).'); invalid(dob); ok = false; } else { setErr('hw2-err-dob', ''); valid(dob); } }
        const genderOk = Array.from(genderRadios).some(r => r.checked);
        if (!genderOk) { setErr('hw2-err-gender', 'Vui lòng chọn giới tính.'); ok = false; } else setErr('hw2-err-gender', '');
        return ok;
    }

    function vStep2() {
        let ok = true;
        const ev = (email.value || '').trim();
        if (!ev) { setErr('hw2-err-email', 'Email không được để trống.'); invalid(email); ok = false; }
        else if (!emailRx.test(ev)) { setErr('hw2-err-email', 'Email không đúng định dạng.'); invalid(email); ok = false; }
        else { setErr('hw2-err-email', ''); valid(email); }
        const pv = password.value || '';
        if (!pv) { setErr('hw2-err-password', 'Mật khẩu không được để trống.'); invalid(password); ok = false; }
        else if (!pwRx.test(pv)) { setErr('hw2-err-password', '≥ 8 ký tự, có hoa, thường, số.'); invalid(password); ok = false; }
        else { setErr('hw2-err-password', ''); valid(password); }
        const cv = confirm.value || '';
        if (cv !== pv) { setErr('hw2-err-confirm', 'Mật khẩu xác nhận không khớp.'); invalid(confirm); ok = false; }
        else { setErr('hw2-err-confirm', ''); valid(confirm); }
        return ok;
    }

    let step = 1;
    function showStep(n) {
        step = n;
        steps.forEach(s => s.hidden = (Number(s.dataset.step) !== step));
        prevBtn.disabled = (step === 1);
        nextBtn.hidden = (step === 3);
        submitBtn.hidden = (step !== 3);
        const pct = step / 3 * 100;
        progressBar.style.width = `${pct}%`;
        stepText.textContent = `Bước ${step}/3`;
        if (step === 3) {
            const genderVal = Array.from(genderRadios).find(r => r.checked)?.value || '';
            const dobText = dob.value ? new Date(dob.value).toLocaleDateString('vi-VN') : '';
            summaryBox.innerHTML = `
        <ul>
          <li><b>Họ tên:</b> ${(fullname.value || '').trim()}</li>
          <li><b>Ngày sinh:</b> ${dobText}</li>
          <li><b>Giới tính:</b> ${genderVal}</li>
          <li><b>Email:</b> ${(email.value || '').trim()}</li>
        </ul>
      `;
        }
    }
    showStep(1);

    nextBtn.addEventListener('click', () => {
        if (step === 1 && !vStep1()) return;
        if (step === 2 && !vStep2()) return;
        if (step < 3) showStep(step + 1);
    });
    prevBtn.addEventListener('click', () => { if (step > 1) showStep(step - 1); });

    [fullname, dob, email, password, confirm].forEach(el => {
        el.addEventListener('input', () => {
            const errId = 'hw2-err'
        })
    })
}