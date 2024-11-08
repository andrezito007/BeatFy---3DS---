document.addEventListener("DOMContentLoaded", function () {
    const carrossel = document.querySelector(".carrossel");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    let currentIndex = 0;
    const items = document.querySelectorAll(".carrossel-item");
    const totalItems = items.length;

    // Função para mover para o próximo item
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarrosselPosition();
    }

    // Função para mover para o item anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarrosselPosition();
    }

    // Função para atualizar a posição do carrossel
    function updateCarrosselPosition() {
        const offset = -currentIndex * 100; // Cada item ocupa 100% da largura
        carrossel.style.transform = `translateX(${offset}%)`;
    }

    // Adiciona eventos de clique aos botões
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // Automatiza o avanço do carrossel a cada 3 segundos
    setInterval(nextSlide, 2700); // 3000ms = 3 segundos
});
