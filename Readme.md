# Hedu

> Uma bússola digital para quem está em transição de carreira.

## 🔗 Links

- **Site (GitHub Pages):** [Hedu](https://cintramatheus.github.io/Landing-page-HEdu/)  
- **Protótipo (Figma):** [Figma](https://www.figma.com/design/n3oMl1WZCfEZKOGuORlwy9/Prototipa%C3%A7%C3%A3o---Concep%C3%A7%C3%A3o--Copy-?node-id=17-871&p=f&t=vGvsunypXkm3UYwS-0)

---

## 📌 O que é o Hedu

Hedu é uma landing page projetada para orientar pessoas em transições de carreira, oferecendo informações claras e objetivas sobre a área desejada. Com uma navegação óbvia e intuitiva, a página utiliza uma comunicação simples e acolhedora para transmitir segurança.

O foco está no que é essencial para guiar **estudantes que estão escolhendo uma graduação** ou **profissionais que desejam mudar de área**. O objetivo central é acolher quem sabe que precisa evoluir profissionalmente, mas não tem certeza de qual caminho seguir — reduzindo a incerteza e transformando dúvidas em direcionamento prático para os próximos passos.

### O cenário

Uma startup voltada para transição de carreira e direcionamento universitário, que precisa de uma landing page capaz de **vender clareza e futuro**. O site funciona como um "mapa" claro para o próximo passo profissional da pessoa que o visita.

### O problema que resolve

O sentimento de estar perdido profissionalmente — sem saber como entrar no mercado de trabalho ou como mudar de área.

---

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (vanilla)** — sem frameworks, usando módulos ES (`type="module"`) e a Fetch API

---

## 📰 Integração do Blog

O blog do Hedu é a parte dinâmica do site: permite que qualquer pessoa leia depoimentos/posts da comunidade e, mediante uma API key, crie ou remova posts diretamente pela interface.

### Como funciona

1. **Carregamento inicial:** ao abrir `blog.html`, o script (`js/script.js`) chama automaticamente a API para buscar todos os posts existentes e renderiza um card para cada um (título, conteúdo e autor).
2. **Criação de post:** o botão "Adicionar" abre um modal com campos para nome, título e conteúdo. Ao confirmar, os dados são enviados via `POST` para a API e a lista de posts é recarregada.
3. **Remoção de post:** o botão "Deletar" abre um modal listando todos os posts existentes, cada um com um botão de lixeira. Ao clicar, o post é removido via `DELETE` e as listas (modal e grid principal) são atualizadas.
4. **Autenticação:** toda requisição à API inclui o header `x-api-key`, com uma chave própria do grupo, fornecida pelos administradores da API.

### Arquitetura do código

- **`js/api.js`** — camada de comunicação com a API. Centraliza a montagem da URL base, o envio do header de autenticação e o tratamento de erros HTTP, expondo três funções: `getPost()`, `createPost()` e `deletePost()`.
- **`js/script.js`** — camada de interface. Cuida da criação dinâmica dos campos do modal, abertura/fechamento dos modais, renderização dos cards de post e ligação dos eventos de clique (criar, deletar, cancelar).

---

## 🌐 Endpoints utilizados

Base URL: `https://blog-api.seedabit.org.br/api`

Toda requisição exige o header `x-api-key` com a chave do grupo.

| Método | Endpoint | Descrição |
|--------|---------------|---------------------------------------------|
| GET | `/posts` | Retorna todos os posts associados à API key autenticada |
| POST | `/posts` | Cria um novo post (recebe `title`, `content`, `author` no corpo da requisição) |
| DELETE | `/posts/{id}` | Remove um post existente pelo seu `id` |

### Exemplo de corpo para criação de post (`POST /posts`)

```json
{
  "title": "Título do post",
  "content": "Conteúdo do depoimento ou texto.",
  "author": "Nome do autor"
}
```

### Exemplo de resposta (`GET /posts`)

```json
[
  {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "title": "Introduction to NestJS",
    "content": "This is a comprehensive guide to building APIs with NestJS.",
    "author": "John Doe",
    "createdAt": "2024-01-01T00:00:00Z",
    "lastUpdatedAt": "2024-01-02T00:00:00Z",
    "apiKeyId": 1
  }
]
```

---

## 📁 Estrutura do projeto

```
docs/
├── blog.html
├── index.html
├── sobre.html
├── solucao.html
├── css/
│   ├── blog.css
│   ├── global.css
│   ├── header.css
│   ├── sobre.css
│   └── style.css
├── img/
│   ├── banner.png
│   ├── bussola.svg
│   ├── logoHEdu.png
│   └── roadmap.png
└── js/
    ├── api.js
    ├── loadHeader.js
    └── script.js
```

---

## 👥 Equipe

Caio Santos: https://github.com/caiovsantos-ctrl  
João Marcelo: https://github.com/JoaoM11  
Matheus Cintra: https://github.com/CintraMatheus  
Pedro Dourado: https://github.com/PedroDourado352