import {createPost, getPost, deletePost} from "./api.js"

async function handleSubmitForm(event) {
    event.preventDefault();

    const newPost = {
        title: document.querySelector("#titulo").value,
        content: document.querySelector("#conteudo").value,
        author: document.querySelector("#autor").value,
    };

    try {
        const createdPost = await createPost(newPost);
        console.log("Post criado", createdPost);
    } catch (erro) {
        console.log("Erro ao criar post")
    }
}

async function handleDeleteForm(event) {
    event.preventDefault();

    const formID = document.querySelector("#id").value;

    try {
        await deletePost(formID);
        console.log("Post deletado", formID);
    } catch (erro) {
        console.log("Erro ao deletar post")
    }
}

async function handleGetPosts() {
    try{
        const posts = await getPost(); // array de posts
        posts.forEach(post => {
        console.log(post.title, post.author);
        });
    } catch (erro) {
    console.log("Erro ao carregar posts");
  }
}