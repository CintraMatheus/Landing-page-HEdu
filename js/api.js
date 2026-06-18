const API_BASE_URL = "https://blog-api.seedabit.org.br/api"

async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    // status fora de 200-299 -> trata como erro
    if (!response.ok) {
      throw new Error(`Erro HTTP ${response.status}: ${response.statusText}`);
    }

    // se a resposta não tiver corpo
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    }
    return null;

  } catch (error) {
    // erro de rede
    console.error(`Falha na requisição para ${url}:`, error.message);
    throw error; // repassa pra quem chamou decidir o que fazer
  }
}

function createPost(postdata){
    return request("/posts", {
        method: "POST",
        body: JSON.stringify(postdata),
    });
}

function getPost() {
    return request("/posts", {
        method: "GET",
    });
}

function deletePost(id){
    return request(`/posts/${id}`, { method: "DELETE" });
}

export { createPost, getPost, deletePost };