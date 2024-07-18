document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "../img/header.png",
        "../img/header1.png",
        "../img/header2.png",
        "../img/header3.png",
        "../img/header4.png",
    ];
    const header = document.querySelector('.header');
    let currentIndex = 0;

    function changeBackground() {
        header.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length; // 다음 이미지 인덱스 계산
    }

    // 초기 실행
    changeBackground();

    // 일정 시간마다 이미지 변경
    setInterval(changeBackground, 2000); // 2초마다 이미지 변경
});
