let amigos = [];

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function mostrarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  amigos.forEach(function (amigo) {
    let li = document.createElement("li");
    li.innerText = amigo;
    listaAmigos.appendChild(li);
  });
}

function adicionarAmigo() {
  let nome = document.getElementById("amigo").value;

  if (nome.trim().length == 0) {
    exibirTextoNaTela("p", "Por favor, digite um nome válido");
  } else if (!/^[a-zA-Zá-úÁ-ÚãõÃÕçÇ\s]+$/.test(nome)) {
    exibirTextoNaTela(
      "p",
      "Números e Caracteres especiais não são permitidos no nome",
    );
  } else if (amigos.includes(nome)) {
    exibirTextoNaTela("p", "Este amigo já está na lista");
    document.getElementById("amigo").value = "";
  } else {
    amigos.push(nome);
    document.getElementById("amigo").value = "";
    mostrarAmigos();
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    exibirTextoNaTela("p", "Você precisa de pelo menos dois amigos");
  } else {
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let li = document.createElement("li");
    li.innerText = amigos[indiceAleatorio];
    resultado.appendChild(li);
  }
}

function reiniciarSorteio() {
  amigos = [];
  exibirTextoNaTela("p", "Você precisa de pelo menos dois amigos");
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
}
