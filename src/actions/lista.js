import { API_URL } from "../env";

// este é uma sugestão de arquivo com métodos comuns de consultas a APIs online
// todos estes métodos fazem conexão (fetch) com pontos online e podem enviar ou
// receber dados

export async function getItems() {
  const response = await fetch(API_URL); // requisitando a URL
  return await response.json(); // convertendo a resposta para JSON
}

export async function postItem(newItem) {
  // requisitando a URL
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(newItem),
  });
  return await response.json();
}

export async function deleteItem(id) {
  // requisitando a URL
  const response = await fetch(`${API_URL}/?id=${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}
