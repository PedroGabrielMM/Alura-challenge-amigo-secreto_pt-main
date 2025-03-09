//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo na lista
function adicionarAmigo() {
  // Pega o elemento de input e seu valor, removendo espaços extras
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  // Verifica se o nome não está vazio
  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }

  // Adiciona o nome na lista de amigos
  amigos.push(nome);

  // Atualiza a exibição da lista
  atualizarListaAmigos();

  // Limpa o campo de input
  input.value = "";
  input.focus();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
  const listaElement = document.getElementById("listaAmigos");
  // Cria um HTML com cada nome dentro de um <li>
  listaElement.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

// Função para sortear um amigo da lista
function sortearAmigo() {
  // Verifica se há pelo menos um amigo na lista
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo para sortear!");
    return;
  }

  // Gera um índice aleatório com base na quantidade de amigos
  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];

  // Exibe o resultado na área destinada
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = `<li>Seu amigo secreto é: ${amigoSorteado}</li>`;
}
