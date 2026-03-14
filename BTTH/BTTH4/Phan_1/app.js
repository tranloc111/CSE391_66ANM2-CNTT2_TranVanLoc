
const students = [];

function normalizeName(name) {
    return name.trim().replace(/\s+/g, ' ');
}

function getRank(score) {
    if (score >= 8.5) return 'Giỏi';
    if (score >= 7.0) return 'Khá';
    if (score >= 5.0) return 'Trung bình';
    return 'Yếu';
}

function isValidScore(value) {
    if (value === '' || value === null) return false;
    const num = Number(value);
    return Number.isFinite(num) && num >= 0 && num <= 10;
}

const fullnameEl = document.getElementById('fullname');
const scoreEl = document.getElementById('score');
const btnAdd = document.getElementById('btnAdd');
const tbody = document.getElementById('tbody');
const statsEl = document.getElementById('stats');

const state = {
    keyword: '',
    rank: 'all',
    sortDir: null
};

let filteredStudents = [];

const keywordEl = document.getElementById('keyword');
const rankFilterEl = document.getElementById('rankFilter');
const thScore = document.getElementById('thScore');
const scoreArrow = document.getElementById('scoreArrow');

function applyFilters() {
    let result = students.slice();

    const kw = state.keyword.trim().toLowerCase();
    if (kw) {
        result = result.filter(s => s.name.toLowerCase().includes(kw));
    }

    if (state.rank !== 'all') {
        result = result.filter(s => getRank(s.score) === state.rank);
    }

    if (state.sortDir) {
        result.sort((a, b) => state.sortDir === 'asc' ? a.score - b.score : b.score - a.score);
    }

    filteredStudents = result;
}

function refreshSortIndicator() {
    if (state.sortDir === 'asc') scoreArrow.textContent = '▲';
    else if (state.sortDir === 'desc') scoreArrow.textContent = '▼';
    else scoreArrow.textContent = '';
}

function renderTable() {
    refreshSortIndicator();

    if (students.length === 0) {
        tbody.innerHTML = `<tr><td class="empty" colspan="5">Chưa có sinh viên nào. Hãy thêm mới ở trên.</td></tr>`;
        statsEl.textContent = 'Tổng số: 0 | Điểm trung bình: 0.00';
        return;
    }

    if (!filteredStudents.length) {
        tbody.innerHTML = `<tr><td class="empty" colspan="5">Không có kết quả.</td></tr>`;
    } else {
        const rows = filteredStudents.map((s, idx) => {
            const rank = getRank(s.score);
            const weakClass = s.score < 5 ? ' class="weak"' : '';
            return `
        <tr${weakClass}>
          <td>${idx + 1}</td>
          <td>${s.name}</td>
          <td>${s.score.toFixed(2)}</td>
          <td>${rank}</td>
          <td class="actions">
            <button type="button" data-name="${s.name}" data-score="${s.score}" class="btn-delete">Xóa</button>
          </td>
        </tr>
      `;
        });
        tbody.innerHTML = rows.join('');
    }

    const total = students.length;
    const avg = students.reduce((sum, s) => sum + s.score, 0) / total;
    statsEl.textContent = `Tổng số: ${total} | Điểm trung bình: ${avg.toFixed(2)}`;
}

function addStudent() {
    const name = normalizeName(fullnameEl.value);
    const scoreStr = scoreEl.value;

    if (!name) {
        alert('Họ tên không được để trống.');
        fullnameEl.focus();
        return;
    }
    if (!isValidScore(scoreStr)) {
        alert('Điểm phải là số trong khoảng 0 đến 10.');
        scoreEl.focus();
        return;
    }

    const score = Number(scoreStr);
    students.push({ name, score });

    fullnameEl.value = '';
    scoreEl.value = '';
    fullnameEl.focus();

    applyFilters();
    renderTable();
}

btnAdd.addEventListener('click', addStudent);

scoreEl.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') addStudent();
});

tbody.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-delete');
    if (!btn) return;

    const name = btn.getAttribute('data-name');
    const score = Number(btn.getAttribute('data-score'));

    const idx = students.findIndex(s => s.name === name && s.score === score);
    if (idx !== -1) {
        students.splice(idx, 1);
        applyFilters();
        renderTable();
    }
});

if (keywordEl) {
    keywordEl.addEventListener('input', () => {
        state.keyword = keywordEl.value;
        applyFilters();
        renderTable();
    });
}

if (rankFilterEl) {
    rankFilterEl.addEventListener('change', () => {
        state.rank = rankFilterEl.value;
        applyFilters();
        renderTable();
    });
}

if (thScore) {
    thScore.addEventListener('click', () => {
        if (state.sortDir === null) state.sortDir = 'asc';
        else if (state.sortDir === 'asc') state.sortDir = 'desc';
        else state.sortDir = 'asc';

        applyFilters();
        renderTable();
    });
}
applyFilters();
renderTable();