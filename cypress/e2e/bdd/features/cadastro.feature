# language: pt
Funcionalidade: Cadastro de Usuário

  Cenário: Validar cadastro com todos os campos preenchidos
    Dado que o usuário está na página de login do sistema
    E visualizar o botão de "Cadastre-se"
    E clicar no botão de "Cadastre-se"
    Quando for redirecionado para a tela de cadastro
    E preencher o campo de "Nome" com um nome válido
    E preencher o campo de "E-mail" com um e-mail válido
    E preencher o campo de "Senha" com uma senha válida
    Então o cadastro deve ser realizado com sucesso
    E deve exibir a mensagem "Cadastro realizado com sucesso"