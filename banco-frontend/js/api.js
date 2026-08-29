// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

// npx json-server@0.17.4 --watch db.json --port 3001

// Endereço-base do json-server.

const API_URL = "http://localhost:3001";

// Busca todos os clientes cadastrados.
//
// GET /clientes
async function buscarClientes() {
  const resposta = await fetch(`${API_URL}/clientes`);

  return await resposta.json();
}

// Cria um novo cliente.
//
// POST /clientes
async function criarCliente(cliente) {
  await fetch(`${API_URL}/clientes`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(cliente),
  });
}

// Atualiza um cliente existente.
//
// PUT /clientes/id
async function atualizarCliente(id, cliente) {
  await fetch(`${API_URL}/clientes/${id}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(cliente),
  });
}

// Exclui um cliente.
//
// DELETE /clientes/id
async function deletarCliente(id) {
  await fetch(`${API_URL}/clientes/${id}`, {
    method: "DELETE",
  });
}
