let index = 0; // Índice da imagem atual

function moverCarrossel(direcao) {
  const carrossel = document.querySelector('.carrossel');
  const totalImagens = document.querySelectorAll('.carrossel-item').length;

  index += direcao;

  if (index >= totalImagens) {
    index = 0;
  }

  if (index < 0) {
    index = totalImagens - 1;
  }

  carrossel.style.transform = `translateX(-${index * 100}%)`;
  
}

setInterval(function() {
  moverCarrossel(1); 
}, 2500);
