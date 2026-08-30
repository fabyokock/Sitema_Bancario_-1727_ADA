const corpoTabelaClientes = document.getElementById("tabela-clientes-corpo");

function renderizarClientes(clientes) {
  corpoTabelaClientes.innerHTML = "";

  clientes.forEach((cliente) => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${cliente.nome}</td>
      <td>${cliente.cpf}</td>
      <td>${cliente.email}</td>

      <td>
        <button
          type="button"
          data-acao="editar"
          data-id="${cliente.id}"
        >
          Editar
        </button>

        <button
          type="button"
          data-acao="deletar"
          data-id="${cliente.id}"
        >
          Deletar
        </button>
      </td>
    `;

    corpoTabelaClientes.appendChild(linha);
  });
}
