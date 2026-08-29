// Valida os dados recebidos do formulário de cliente.
//
// A função recebe:
//
// {
//   nome: "...",
//   cpf: "...",
//   email: "..."
// }
//
// E devolve um objeto contendo somente
// os erros encontrados.
function validarCliente(cliente) {
  const erros = {};

  // trim() remove espaços existentes no começo
  // e no final do texto.
  //
  // Dessa forma, um campo preenchido somente
  // com espaços também será considerado vazio.
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
