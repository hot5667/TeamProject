let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(SlideIndexNumber) {
    showSlides(slideIndex += SlideIndexNumber);
}

function currentSlide(n) {
    showSlides(slideIndex = SlideIndexNumber);
}

function showSlides(SlideIndexNumber) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (SlideIndexNumber > slides.length) { slideIndex = 1 }
    if (SlideIndexNumber < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}