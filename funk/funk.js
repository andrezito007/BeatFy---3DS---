let currentIndex = 0;
const slideInterval = 3000; // Tempo em milissegundos (3 segundos)
const slides = document.querySelector('.carousel-slide');
const totalSlides = slides.children.length;

// Função para mostrar o próximo slide
function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

// Atualiza a posição do slide
function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Inicia o carrossel, passando os slides a cada 3 segundos
setInterval(showNextSlide, slideInterval);
