const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

// Contexto: API disponível
Given('que a API de login está disponível em {string}', (url) => {
  cy.wrap(url).as('apiLoginUrl');
});

// Criar usuário para login
Given('que existe um usuário cadastrado no sistema', () => {
  cy.criarUsuarioAPI().then((result) => {
    cy.wrap(result.usuario).as('usuarioCadastrado');
  });
});

// Realizar login
When('eu envio uma requisição POST para realizar login', () => {
  cy.get('@usuarioCadastrado').then((usuario) => {
    cy.loginAPI(usuario.email, usuario.password).then((loginResult) => {
      cy.wrap(loginResult.response).as('responseLogin');
      cy.wrap(loginResult.token).as('tokenAuth');
    });
  });
});

When('o corpo da requisição contém os seguintes dados:', (dataTable) => {
  // Os dados já são passados via usuário criado
  // Este step é apenas documentação
});

// Validação específica de token (não compartilhada)
Then('a resposta deve conter um token de {string}', (campo) => {
  cy.get('@tokenAuth').should('be.a', 'string');
  cy.get('@tokenAuth').should('not.be.empty');
});
