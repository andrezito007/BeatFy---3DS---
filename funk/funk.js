let index = 0; // Índice da imagem atual

// Função para mover o carrossel na direção especificada
function moverCarrossel(direcao) {
  const carrossel = document.querySelector('.carrossel');
  const totalImagens = document.querySelectorAll('.carrossel-item').length;

  index += direcao;

  // Se o índice for maior que o número de imagens, voltamos para o início
  if (index >= totalImagens) {
    index = 0;
  }

  // Se o índice for menor que 0, vamos para a última imagem
  if (index < 0) {
    index = totalImagens - 1;
  }

  // Movemos o carrossel para a posição correta
  carrossel.style.transform = `translateX(-${index * 100}%)`;
}

// Configurando o intervalo para mover o carrossel automaticamente a cada 2,5 segundos (2500ms)
setInterval(function() {
  moverCarrossel(1); // Chama a função de mover o carrossel para a próxima imagem
}, 2500); // 2500 milissegundos = 2,5 segundos
