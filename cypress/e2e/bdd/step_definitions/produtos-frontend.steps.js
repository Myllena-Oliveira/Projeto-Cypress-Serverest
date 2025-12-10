import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que o usuário está logado no sistema', () => {
    // Usar custom command para criar usuário e fazer login
    cy.criarELogarFrontend({ administrador: 'false' });
});

Given('na página inicial, visualizar os produtos', () => {
    cy.url().should('include', '/home');
    cy.get('[data-testid="adicionarNaLista"]').should('be.visible');
});

Given('clicar no botão "Adicionar a lista", do produto desejado', () => {
    cy.get('[data-testid="adicionarNaLista"]').first().click();
});

Given('o usuário for redirecionado para a tela de Lista de compras', () => {
    cy.url().should('include', '/minhaListaDeProdutos');
    cy.contains('Lista de Compras').should('be.visible');
});

When('o usuário clicar em "Adicionar no carrinho"', () => {
    cy.get('[data-testid="adicionar carrinho"]').should('be.visible').first().click();
});

Then('deverá ser redirecionado para a tela de Carrinho', () => {
    cy.url().should('include', '/carrinho');
});
