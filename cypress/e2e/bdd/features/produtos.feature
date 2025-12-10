# language: pt
Funcionalidade: Lista de Produtos

  Cenário: Validar adição de produto ao carrinho
    Dado que o usuário está logado no sistema
    E na página inicial, visualizar os produtos
    E clicar no botão "Adicionar a lista", do produto desejado
    E o usuário for redirecionado para a tela de Lista de compras
    Quando o usuário clicar em "Adicionar no carrinho"
    Então deverá ser redirecionado para a tela de Carrinho