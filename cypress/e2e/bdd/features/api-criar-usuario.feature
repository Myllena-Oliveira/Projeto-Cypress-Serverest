# language: pt
Funcionalidade: API - Criar Usuário

  Contexto:
    Dado que a API de usuários está disponível em "https://serverest.dev/usuarios"

  Cenário: Criar usuário com sucesso
    Quando o usuário enviar uma requisição POST para criar um novo usuário
    E o corpo da requisição contiver os seguintes dados:
      | campo         | valor                        |
      | nome          | Novo Usuário API             |
      | email         | email único válido           |
      | password      | senha válida                 |
      | administrador | true                         |
    Então a resposta deve ter status code 201
    E a resposta deve conter a mensagem "Cadastro realizado com sucesso"
