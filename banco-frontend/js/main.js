document.addEventListener("DOMContentLoaded", iniciar);

let clienteEmEdicao = null;

const formCliente = document.getElementById("form-cliente");

const areaMensagens = document.getElementById("area-mensagens");

const erroCliente = document.getElementById("erro-cliente");

async function iniciar() {
  const clientes = await buscarClientes();

  renderizarClientes(clientes);
}

// ======================================
// FILTRO POR NOME (VIA API)
// ======================================

const filtroClienteNome = document.getElementById("filtro-cliente-nome");

filtroClienteNome.addEventListener("input", async () => {
  const termo = filtroClienteNome.value.toLowerCase();
  const clientes = await buscarClientes();

  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(termo),
  );

  renderizarClientes(clientesFiltrados);
});

// ======================================
// SALVAR CLIENTE
// ======================================

formCliente.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  areaMensagens.textContent = "";
  erroCliente.textContent = "";

  const cliente = {
    nome: document.getElementById("cliente-nome").value,

    cpf: document.getElementById("cliente-cpf").value,

    email: document.getElementById("cliente-email").value,
  };

  const erros = validarCliente(cliente);

  if (Object.keys(erros).length > 0) {
    erroCliente.textContent = Object.values(erros).join(" ");

    return;
  }

  if (clienteEmEdicao !== null) {
    await atualizarCliente(clienteEmEdicao, cliente);

    areaMensagens.textContent = "Cliente atualizado com sucesso.";
  } else {
    await criarCliente(cliente);

    areaMensagens.textContent = "Cliente criado com sucesso.";
  }

  formCliente.reset();

  clienteEmEdicao = null;

  // Atualiza tabela.
  const clientesAtualizados = await buscarClientes();

  renderizarClientes(clientesAtualizados);
});

// ======================================
// EDITAR E DELETAR CLIENTE
// ======================================

corpoTabelaClientes.addEventListener("click", async (evento) => {
  const alvo = evento.target;

  if (!alvo.dataset.acao) {
    return;
  }

  const id = Number(alvo.dataset.id);

  // ------------------------------
  // EDITAR
  // ------------------------------

  if (alvo.dataset.acao === "editar") {
    const clientes = await buscarClientes();

    const cliente = clientes.find((item) => item.id === id);

    if (!cliente) {
      return;
    }

    clienteEmEdicao = cliente.id;

    document.getElementById("cliente-nome").value = cliente.nome;

    document.getElementById("cliente-cpf").value = cliente.cpf;

    document.getElementById("cliente-email").value = cliente.email;

    areaMensagens.textContent = "";

    erroCliente.textContent = "";
  }

  // ------------------------------
  // DELETAR
  // ------------------------------

  if (alvo.dataset.acao === "deletar") {
    const confirmou = confirm("Tem certeza que deseja deletar este cliente?");

    if (!confirmou) {
      return;
    }

    await deletarCliente(id);

    areaMensagens.textContent = "Cliente deletado com sucesso.";

    erroCliente.textContent = "";

    if (clienteEmEdicao === id) {
      clienteEmEdicao = null;

      formCliente.reset();
    }

    const clientesAtualizados = await buscarClientes();

    renderizarClientes(clientesAtualizados);
  }
});
