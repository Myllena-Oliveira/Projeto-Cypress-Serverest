# language: pt
Funcionalidade: Login de Usuário

Cenário: Validar login com credenciais válidas
Dado que o usuário está na página de login do sistema, através da URL https://front.serverest.dev/login
E possuir um cadastro ativo
Quando preencher os campos de  "E-mail" e "Senha" com dados válidos
E clicar em "Entrar"
Então o usuário deverá ser direcionado para a tela inicial do sistema