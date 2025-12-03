import loginPage from '../../support/pageObjects/loginPage';

describe('Login no Frontend', () => {
    it('Validar login com credenciais válidas', () => {
        // Dado que o usuário está na página de login do sistema
        cy.visit('/login');
        cy.url().should('include', '/login');
        
        // E possuir um cadastro ativo (usando credenciais válidas do .env)
        // Quando preencher os campos de "E-mail" e "Senha" com dados válidos
        cy.get('[data-testid="email"]').type(Cypress.env('frontEmail'));
        cy.get('[data-testid="senha"]').type(Cypress.env('frontPassword'));
        
        // E clicar em "Entrar"
        cy.get('[data-testid="entrar"]').click();
        
        // Então o usuário deverá ser direcionado para a tela inicial do sistema
        cy.url().should('include', '/home');
        cy.contains('Serverest Store').should('be.visible');
    });
});
