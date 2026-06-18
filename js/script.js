// js/script.js
import { getPost, createPost, deletePost } from "./api.js";

// Função reutilizável para criar campos
function criarCampo(tipo, id, placeholder) {
  var elemento;

  if (tipo === "textarea") {
    elemento = document.createElement("textarea");
  } else {
    elemento = document.createElement("input");
    elemento.type = "text";
  }

  elemento.id = id;
  elemento.placeholder = placeholder;

  return elemento;
}

// Injeta os campos no modal de adicionar
document.getElementById("campo-nome").appendChild(
  criarCampo("text", "input-autor", "Nome")
);
document.getElementById("campo-titulo").appendChild(
  criarCampo("text", "input-titulo", "Título")
);
document.getElementById("campo-conteudo").appendChild(
  criarCampo("textarea", "input-conteudo", "Escreva seu depoimento aqui")
);

// Abrir e fechar modais
function abrirModal(id) {
  document.getElementById(id).classList.add("aberto");
}

function fecharModal(id) {
  document.getElementById(id).classList.remove("aberto");
}

document.querySelectorAll(".modal-overlay").forEach(function (overlay) {
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      overlay.classList.remove("aberto");
    }
  });
});

document.getElementById("btn-abrir-adicionar").addEventListener("click", function () {
  abrirModal("modal-adicionar");
});

document.getElementById("btn-abrir-deletar").addEventListener("click", function () {
  abrirModal("modal-deletar");
  carregarListaDeletar();
});

document.getElementById("btn-cancelar-adicionar").addEventListener("click", function () {
  fecharModal("modal-adicionar");
});

document.getElementById("btn-cancelar-deletar").addEventListener("click", function () {
  fecharModal("modal-deletar");
});

// Criar post
document.getElementById("btn-confirmar-adicionar").addEventListener("click", async function () {
  var newPost = {
    title: document.getElementById("input-titulo").value,
    content: document.getElementById("input-conteudo").value,
    author: document.getElementById("input-autor").value,
  };

  try {
    await createPost(newPost);
    fecharModal("modal-adicionar");
    carregarPosts();
  } catch (erro) {
    console.log("Erro ao criar post:", erro);
  }
});

// Cards
function criarCard(post) {
  var avatarSVG = `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
    </svg>
  `;

  return `
    <div class="card">
      <div class="card-header">
        <h3>${post.title}</h3>
      </div>
      <div class="card-body">
        <p>${post.content}</p>
      </div>
      <div class="card-footer">
        <div class="avatar">${avatarSVG}</div>
        <span>${post.author}</span>
      </div>
    </div>
  `;
}

async function carregarPosts() {
  try {
    var posts = await getPost();
    var grid = document.getElementById("cards-grid");
    grid.innerHTML = posts.map(criarCard).join("");
  } catch (erro) {
    console.log("Erro ao carregar posts:", erro);
  }
}

// Lista do modal deletar
async function carregarListaDeletar() {
  var lista = document.getElementById("lista-deletar");
  lista.innerHTML = "<p style='color:#fff'>Carregando...</p>";

  try {
    var posts = await getPost();
    lista.innerHTML = posts.map(function (post) {
      return `
        <div class="delete-item">
          <input type="text" value="${post.title}" readonly />
          <button class="btn-lixeira" data-id="${post.id}">🗑</button>
        </div>
      `;
    }).join("");

    lista.querySelectorAll(".btn-lixeira").forEach(function (btn) {
      btn.addEventListener("click", async function () {
        var id = btn.getAttribute("data-id");
        try {
          await deletePost(id);
          carregarListaDeletar();
          carregarPosts();
        } catch (erro) {
          console.log("Erro ao deletar post:", erro);
        }
      });
    });

  } catch (erro) {
    lista.innerHTML = "<p style='color:#fff'>Erro ao carregar posts.</p>";
  }
}

// Carrega posts ao abrir a página
carregarPosts();