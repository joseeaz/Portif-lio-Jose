var frase = "Estudante de TI em busca do primeiro estágio.";
var textoDigitado = document.getElementById("texto-digitado");
var posicao = 0;

function digitar() {
  textoDigitado.innerHTML = textoDigitado.innerHTML + frase[posicao];
  posicao = posicao + 1;

  if (posicao == frase.length) {
    clearInterval(intervalo);
  }
}

var intervalo = setInterval(digitar, 60);



var elementos = document.querySelectorAll(".aparece-rolagem");

function mostrarAoRolar() {
  for (var i = 0; i < elementos.length; i++) {
    var distanciaDoTopo = elementos[i].getBoundingClientRect().top;

    if (distanciaDoTopo < window.innerHeight - 100) {
      elementos[i].classList.add("visivel");
    } else {
      elementos[i].classList.remove("visivel");
    }
  }
}

window.addEventListener("scroll", mostrarAoRolar);
mostrarAoRolar(); 

var modalProjeto = document.getElementById("modal-projeto");
var botaoAbrirModal = document.getElementById("botao-abrir-modal");
var botaoFecharModal = document.getElementById("botao-fechar-modal");

botaoAbrirModal.addEventListener("click", function () {
  modalProjeto.classList.add("aberto");
});

botaoFecharModal.addEventListener("click", function () {
  modalProjeto.classList.remove("aberto");
});


modalProjeto.addEventListener("click", function (evento) {
  if (evento.target == modalProjeto) {
    modalProjeto.classList.remove("aberto");
  }
});