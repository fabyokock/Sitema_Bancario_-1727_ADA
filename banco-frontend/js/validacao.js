function validarCliente(cliente) {
  const erros = {};

  if (!cliente.nome.trim()) {
    erros.nome = "Nome é obrigatório.";
  }

  if (!cliente.cpf.trim()) {
    erros.cpf = "CPF é obrigatório.";
  }

  if (!cliente.email.trim()) {
    erros.email = "Email é obrigatório.";
  } else if (!cliente.email.includes("@")) {
    erros.email = "Email precisa conter @.";
  }

  return erros;
}
