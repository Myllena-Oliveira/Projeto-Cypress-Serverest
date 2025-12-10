const { Then } = require('@badeball/cypress-cucumber-preprocessor');

// Steps compartilhados que funcionam com diferentes contextos
Then('a resposta deve ter status code {int}', function(statusCode) {
  // Detecta qual alias está disponível e valida o status code
  cy.wrap(null).then(() => {
    const state = cy.state('aliases');
    
    if (state && state.responseUsuario) {
      cy.get('@responseUsuario').its('status').should('eq', statusCode);
    } else if (state && state.responseProdutos) {
      cy.get('@responseProdutos').its('status').should('eq', statusCode);
    } else if (state && state.responseLogin) {
      cy.get('@responseLogin').its('status').should('eq', statusCode);
    } else {
      throw new Error('Nenhum alias de resposta encontrado');
    }
  });
});

Then('a resposta deve conter a mensagem {string}', function(mensagem) {
  cy.wrap(null).then(() => {
    const state = cy.state('aliases');
    
    if (state && state.responseUsuario) {
      cy.get('@responseUsuario').its('body').its('message').should('eq', mensagem);
    } else if (state && state.responseLogin) {
      cy.get('@responseLogin').its('body').its('message').should('eq', mensagem);
    } else {
      throw new Error('Nenhum alias de resposta encontrado');
    }
  });
});

Then('a resposta deve conter a propriedade {string}', function(propriedade) {
  cy.wrap(null).then(() => {
    const state = cy.state('aliases');
    
    if (state && state.responseUsuario) {
      cy.get('@responseUsuario').its('body').should('have.property', propriedade);
    } else if (state && state.responseProdutos) {
      cy.get('@responseProdutos').its('body').should('have.property', propriedade);
    } else {
      throw new Error('Nenhum alias de resposta encontrado');
    }
  });
});
