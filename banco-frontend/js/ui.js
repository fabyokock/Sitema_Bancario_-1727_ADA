// Referência ao corpo da tabela de clientes.
const corpoTabelaClientes = document.getElementById("tabela-clientes-corpo");

// Recebe um array de clientes e redesenha
// toda a tabela.
function renderizarClientes(clientes) {
  // Remove as linhas exibidas anteriormente.
  //
  // Isso evita que os clientes sejam duplicados
  // sempre que a lista for atualizada.
  corpoTabelaClientes.innerHTML = "";

  clientes.forEach((cliente) => {
    // Cria uma nova linha na memória.
    const linha = document.createElement("tr");

    // data-acao informa qual operação o botão representa.
    //
    // data-id guarda o identificador do cliente
    // relacionado ao botão.
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

    // Insere a linha pronta no corpo da tabela.
    corpoTabelaClientes.appendChild(linha);
  });
}
