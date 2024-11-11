// Selecione o carrossel e os itens dentro dele
const carrossel = document.querySelector('.carrossel');
const carrosselItems = document.querySelectorAll('.carrossel-item');
let index = 0; // Índice para controlar o slide atual

// Função para mover o carrossel para o próximo item
function moveCarrossel() {
    // Incrementa o índice para o próximo item
    index = (index + 1) % carrosselItems.length;  // Volta para o início quando chega no final

    // Aplica a transformação para mover o carrossel
    carrossel.style.transform = `translateX(-${index * 100}%)`;
}

// Configura a função para ser chamada a cada 2,5 segundos (2500 ms)
setInterval(moveCarrossel, 2500);
