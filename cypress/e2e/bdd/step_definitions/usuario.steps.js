const { Given, When } = require('@badeball/cypress-cucumber-preprocessor');

// Contexto: API disponível
Given('que a API de usuários está disponível em {string}', (url) => {
  cy.wrap(url).as('apiUrl');
});

// Cenário: Criar usuário com sucesso
When('o usuário enviar uma requisição POST para criar um novo usuário', () => {
  // Usa o custom command existente
  cy.criarUsuarioAPI().then((result) => {
    cy.wrap(result.response).as('responseUsuario');
  });
});

When('o corpo da requisição contiver os seguintes dados:', (dataTable) => {
  // Os dados já são passados via fixture no custom command
  // Este step é apenas documentação do que está sendo enviado
});
