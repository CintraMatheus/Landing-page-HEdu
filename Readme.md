# 🎓 Hedu - Educação + Tecnologia

## 📌 Sobre o Projeto

O Hedu é uma solução digital desenvolvida com o objetivo de tornar o aprendizado mais acessível, organizado e interativo para estudantes. A plataforma reúne conteúdos educacionais, informações sobre a solução proposta e um espaço de blog colaborativo para compartilhamento de conhecimento.

Este projeto foi desenvolvido como parte do **2º Desafio de Projetos - Processo Seletivo Seed a Bit 2026.2**.

---

# 🚀 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Fetch API
* GitHub Pages

---

# 📱 Funcionalidades

## Landing Page

* Página inicial responsiva
* Apresentação da proposta da solução
* Explicação dos benefícios da plataforma
* Navegação intuitiva entre as páginas

## Blog Integrado

A seção de blog permite interação com uma API REST através de requisições HTTP.

### Funcionalidades implementadas

✅ Listar publicações

✅ Criar novas publicações

✅ Excluir publicações

---

# 🔗 Integração com API

A comunicação com a API foi realizada utilizando a Fetch API do JavaScript.

## GET /posts

Responsável por buscar e exibir todas as publicações cadastradas.

Exemplo:

```javascript
fetch('/posts')
```

### Dados exibidos:

* Nome do autor
* Título
* Conteúdo

---

## POST /posts

Responsável por criar novas publicações através do formulário.

Campos enviados:

* autor
* titulo
* conteudo

Exemplo:

```javascript
fetch('/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    autor,
    titulo,
    conteudo
  })
})
```

---

## DELETE /posts/{id}

Responsável por remover uma publicação específica.

Exemplo:

```javascript
fetch(`/posts/${id}`, {
  method: 'DELETE'
})
```

---

# 📂 Estrutura do Projeto

```text
hedu/
│
├── index.html
├── sobre.html
├── blog.html
├── contato.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   └── blog.js
│
└── assets/
    ├── images/
    └── icons/
```

---

# 🌐 Links do Projeto

## Site Publicado

[INSERIR LINK DO GITHUB PAGES]

Exemplo:

https://seuusuario.github.io/hedu

---

## Protótipo no Figma

[INSERIR LINK DO FIGMA]

---

## Repositório GitHub

[INSERIR LINK DO REPOSITÓRIO]

---

# 🎯 Objetivo da Solução

O Hedu busca conectar educação e tecnologia através de uma plataforma simples, moderna e acessível, permitindo que estudantes encontrem conteúdos relevantes e compartilhem conhecimento de forma colaborativa.

---

# 👥 Equipe

* Nome Integrante 1
* Nome Integrante 2
* Nome Integrante 3
* Nome Integrante 4

---

# 📹 Demonstração

Durante a apresentação serão demonstradas as seguintes funcionalidades:

* Navegação entre as telas
* Responsividade do site
* Requisição GET carregando os posts
* Cadastro de novos posts via POST
* Exclusão de posts via DELETE
* Atualização dinâmica da página após as operações

---

## 📄 Licença

Projeto desenvolvido exclusivamente para fins educacionais no Processo Seletivo Seed a Bit 2026.2.
