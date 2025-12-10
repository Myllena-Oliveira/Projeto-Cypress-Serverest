# language: pt
Funcionalidade: API - Login de Usuário

  Contexto:
    Dado que a API de login está disponível em "https://serverest.dev/login"

  Cenário: Realizar login com credenciais válidas
    Dado que existe um usuário cadastrado no sistema
    Quando eu envio uma requisição POST para realizar login
    E o corpo da requisição contém os seguintes dados:
      | campo    | valor                 |
      | email    | email válido          |
      | password | senha válida          |
    Então a resposta deve ter status code 200
    E a resposta deve conter a mensagem "Login realizado com sucesso"
    E a resposta deve conter um token de "authorization"