let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const carousel = document.querySelector('.carousel');
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}
