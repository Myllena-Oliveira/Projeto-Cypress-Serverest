const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

// Contexto: API disponível
Given('que a API de produtos está disponível em {string}', (url) => {
  cy.wrap(url).as('apiProdutosUrl');
});

// Listar produtos
When('eu envio uma requisição GET para listar produtos', () => {
  // Usa o custom command existente
  cy.listarProdutosAPI().then((response) => {
    cy.wrap(response).as('responseProdutos');
  });
});

// Validação específica de array (não compartilhada)
Then('a propriedade {string} deve ser um array', (propriedade) => {
  cy.get('@responseProdutos').its('body').its(propriedade).should('be.an', 'array');
});
