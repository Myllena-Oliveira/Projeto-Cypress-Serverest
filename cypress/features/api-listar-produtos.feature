# language: pt
Funcionalidade: API - Listar Produtos

  Contexto:
    Dado que a API de produtos está disponível em "https://serverest.dev/produtos"

  Cenário: Listar todos os produtos com sucesso
    Quando eu envio uma requisição GET para listar produtos
    Então a resposta deve ter status code 200
    E a resposta deve conter a propriedade "quantidade"
    E a resposta deve conter a propriedade "produtos"
    E a propriedade "produtos" deve ser um array
