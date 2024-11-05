document.addEventListener("DOMContentLoaded", function() {
    const carrosselContainers = document.querySelectorAll('.carrossel-container');

    carrosselContainers.forEach(container => {
        const carrossel = container.querySelector('.carrossel');
        const prevButton = container.querySelector('.prev-btn');
        const nextButton = container.querySelector('.next-btn');
        const totalItems = carrossel.children.length;
        let currentIndex = 0;

        function moveCarrossel(direction) {
            currentIndex += direction;
            if (currentIndex < 0) currentIndex = totalItems - 1;
            if (currentIndex >= totalItems) currentIndex = 0;

            const newTransformValue = -(currentIndex * 100);
            carrossel.style.transform = `translateX(${newTransformValue}%)`;
        }

        prevButton.addEventListener('click', () => moveCarrossel(-1));
        nextButton.addEventListener('click', () => moveCarrossel(1));
    });
});
