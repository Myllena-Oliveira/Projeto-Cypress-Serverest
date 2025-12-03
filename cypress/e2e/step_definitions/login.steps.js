import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que estou na página de login', () => {
    cy.visit('/login');
});

When('eu preencho o email com dados válidos', () => {
    cy.get('[data-testid="email"]').type(Cypress.env('frontEmail'));
});

When('eu preencho o email {string}', (email) => {
    cy.get('[data-testid="email"]').type(email);
});

When('eu preencho a senha com dados válidos', () => {
    cy.get('[data-testid="password"]').type(Cypress.env('frontPassword'));
});

When('eu preencho a senha {string}', (senha) => {
    cy.get('[data-testid="password"]').type(senha);
});

When('eu clico no botão de entrar', () => {
    cy.get('[data-testid="entrar"]').click();
});

Then('devo ver a home da aplicação', () => {
    cy.url().should('include', '/home');
});

Then('devo ver a mensagem de erro {string}', (mensagem) => {
    cy.contains(mensagem).should('be.visible');
});
