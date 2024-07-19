document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
    let currentIndex = 0;
    let allCardsVisible = false;

    const audio = new Audio('/sound/카톡.mp3')
    audio.volume = 0.3;

    function showNextCard() {
        if (cards.length === 0 || allCardsVisible) return;

        cards[currentIndex].classList.add('animate');

        currentIndex++;
        audio.play();
        if (currentIndex >= cards.length) {
            allCardsVisible = true;
            document.body.removeEventListener('click', showNextCard); 
        }
    }

    document.body.addEventListener('click', showNextCard);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });

    showNextCard();
});
