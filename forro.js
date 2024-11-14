let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carrossel-item');
    const totalSlides = slides.length;
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const carousel = document.querySelector('.carrossel');
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Automatiza a transição a cada 2,5 segundos (2500 milissegundos)
setInterval(() => {
    moveSlide(1); // Move para o próximo slide
}, 2500);
