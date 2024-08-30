// Định nghĩa từ điển dịch
const translations = {
    "气海": "Khí Hải (29) T1",
    "根骨": "Căn Cốt",
    "身法": "Thân Pháp",
    "力量": "Sức Mạnh",
    "耐力": "Nại Lực",
    "攻击": "Tấn công",
    "会心": "Hội tâm",
    "破防": "Phá phòng",
    "命中": "Mệnh trung",
    "全元素攻击": "Công kích nguyên tố (106) T2",
    "首领克制": "Khắc chế thủ lĩnh",
    "最大攻击": "Tấn công tối đa",
    "最小攻击": "Tấn công tối thiểu",
    "格挡": "Đỡ đòn",
    "外功格挡": "Đỡ đòn Ngoại công",
    "内功格挡": "Đỡ đòn Nội công",
    "防御": "Phòng thủ",
    "破盾": "Phá Thuẫn",
    "风攻击": "Sát thương Phong",
    "火攻击": "Sát thương Hỏa",
    "冰攻击": "Sát thương Băng",
    "雷攻击": "Sát thương Lôi",
    "气盾": "Khí thuẫn",
    "外功气盾": "Khí thuẫn ngoại công",
    "内功气盾": "Khí thuẫn Nội công",
    "气血上限": "Giới hạn khí huyết",
    "首领抵御": "Thủ Lĩnh Phòng Ngự",
    "建筑抵御": "Kiến Trúc Phòng Ngự",
    "会心伤害": "Sát thương bạo kích",
    "神相克制": "Khắc Chế Thần Tương",
    "神相抵御": "Phòng ngự Thần Tương",
    "碎梦克制": "Khắc chế Toái Mộng",
    "碎梦抵御": "Phòng ngự Toái Mộng",
    "素问克制": "Khắc chế Tố Vấn",
    "素问抵御": "Phòng ngự Tố Vấn",
    "血河克制": "Khắc Chế Huyết Hà",
    "血河抵御": "Phòng ngự Huyết Hà",
    "铁衣克制": "Khắc Chế Thiết Y",
    "铁衣抵御": "Phòng ngự Thiết Y",
    "九灵克制": "Khắc chế Cửu Linh",
    "九灵抵御": "Phòng ngự Cửu Linh",
    "龙吟克制": "Khắc chế Long Ngâm",
    "龙吟抵御": "Phòng ngự Long Ngâm",
    "玄机克制": "Khắc chế Huyền Cơ",
    "玄机抵御": "Phòng ngự Huyền Cơ",
    "流派抵御": "Phòng Ngự Môn Phái",
    "流派克制": "Khắc Chế Môn Phái",
    "轻功": "Khinh Công",
    "移动速度": "Tốc độ di chuyển",
    "幸运": "Hạnh Vận",
    "控制增强": "Khống chế tăng cường",
    "技能增强": "Kĩ năng nâng cao",
    "单体技能增强": "Đơn thể kĩ năng tăng cường",
    "群体技能增强": "Quần thể kĩ năng tăng cường",
    "爆发技能增强": "Bạo phát kĩ năng tăng cường",
    "持续技能增强": "Trì tục kĩ năng tăng cường",
    "会心抗性": "Giảm tỉ lệ bạo kích",
    "会心防御": "Giảm sát thương bạo kích",
    "内功防御": "Nội Công Phòng Ngự",
    "外功防御": "Ngoại Công Phòng Ngự",
    "抗外功会心": "Giảm tỉ lệ bạo kích ngoại công",
    "抗内功会心": "Giảm tỉ lệ bạo kích nội công",
    "全元素抗性": "Kháng tất cả nguyên tố",
    "内功破防": "Phá phòng Nội công",
    "外功破防": "Phá phòng Ngoại công",
    "元素·滴仙岛": "Nguyên Tố · Trích Tiên Đảo",
    "元素·碧血营": "Nguyên Tố · Bích Huyết Doanh",
    "外功攻击": "Tấn Công Ngoại Công",
    "内功攻击": "Tấn Công Nội Công",
    "特性效果等级": "Linh Vận",
};

// Hàm để cập nhật cột dịch nghĩa và thuộc tính title cho các ô nhập liệu tiếng Việt
function updateTranslations(prefix) {
    for (let i = 1; i <= 8; i++) {
        const chineseText = document.getElementById(prefix + 'chinese' + i)?.value || '';
        const translationInput = document.getElementById(prefix + 'translation' + i);
        if (translationInput) {
            const translation = translations[chineseText] || '';
            translationInput.value = translation;
            translationInput.title = translation; // Thêm thuộc tính title để hiển thị đầy đủ nội dung
        }
    }
}

// Hàm để xử lý sự kiện dán dữ liệu
function handlePaste(event, prefix) {
    event.preventDefault(); // Ngăn chặn hành vi dán mặc định

    const clipboardData = event.clipboardData ? event.clipboardData.getData('text') : '';
    if (!clipboardData) {
        console.error('No clipboard data available');
        return;
    }

    const lines = clipboardData.split('\n').map(line => line.trim());

    // Điền dữ liệu vào các ô theo hàng dọc trong bảng tương ứng
    for (let i = 0; i < lines.length; i++) {
        if (i < 8) { // Giới hạn trong 8 dòng
            const text = lines[i];

            // Cập nhật dữ liệu vào các cột khác nhau cho bảng nội công mới hoặc cũ
            const chineseInput = document.getElementById(prefix + 'chinese' + (i + 1));
            const numberInput = document.getElementById(prefix + 'number' + (i + 1));
            const otherColumnInput = document.getElementById(prefix + 'otherColumn' + (i + 1)); // Ví dụ cho cột khác

            if (chineseInput) chineseInput.value = text;
            if (numberInput) numberInput.value = ""; // Để cột số cho nhập tự do
            if (otherColumnInput) otherColumnInput.value = text; // Điền vào cột khác

            // Cập nhật cột dịch nghĩa sau khi dán
            updateTranslations(prefix);
        }
    }
}

// Gắn sự kiện "paste" vào tất cả các ô đầu tiên trong các cột của cả hai bảng
document.querySelectorAll('[id^="chinese"], [id^="new_chinese"]').forEach(input => {
    input.addEventListener('paste', function(event) {
        handlePaste(event, input.id.includes('new_') ? 'new_' : '');
    });
});

// Gắn sự kiện "input" vào tất cả các ô từ gốc tiếng Trung để tự động cập nhật dịch nghĩa
document.querySelectorAll('[id^="chinese"], [id^="new_chinese"]').forEach(input => {
    input.addEventListener('input', function() {
        updateTranslations(input.id.includes('new_') ? 'new_' : '');
    });
});
