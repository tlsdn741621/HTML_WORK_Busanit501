document.addEventListener("DOMContentLoaded", () => {
    // 검색 폼 처리
    const searchForm = document.querySelector("#search");
    searchForm.addEventListener("submit", function (e) {
        e.preventDefault(); // 폼 제출 막기
        const keyword = this.querySelector("input[type='search']").value.trim();
        if (keyword) {
            console.log("검색어:", keyword);
            alert(`'${keyword}'로 검색합니다.`);
        }
    });

    // 알람 버튼 처리
    const alarmBtn = document.querySelector(".alarm");
    alarmBtn.addEventListener("click", () => {
        alert("새로운 알림이 없습니다.");
    });

    // 로그인 버튼 처리
    const loginBtn = document.querySelector(".login");
    loginBtn.addEventListener("click", () => {
        alert("로그인 기능은 현재 안됩니다.");
    });

    // 쇼핑 카드 클릭 시 버튼 이름 출력
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        const btn = card.querySelector("button");
        btn.addEventListener("click", () => {
            const brand = btn.textContent.trim();
            alert(`${brand} 쇼핑몰로 이동합니다.`);
        });
    });
});