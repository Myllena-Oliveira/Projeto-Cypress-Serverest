import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que estou na página de cadastro', () => {
    cy.visit('/cadastrarusuarios');
});

When('eu preencho o nome {string}', (nome) => {
    cy.get('[data-testid="nome"]').type(nome);
});

When('eu preencho o email com um email único', () => {
    const emailUnico = `user${Date.now()}@teste.com`;
    cy.get('[data-testid="email"]').type(emailUnico);
});

When('eu preencho o email {string}', (email) => {
    cy.get('[data-testid="email"]').type(email);
});

When('eu preencho a senha {string}', (senha) => {
    cy.get('[data-testid="password"]').type(senha);
});

When('eu clico no botão cadastrar', () => {
    cy.get('[data-testid="cadastrar"]').click();
});

Then('devo ver a mensagem {string}', (mensagem) => {
    cy.contains(mensagem).should('be.visible');
});

Then('devo ver a mensagem de erro sobre email já cadastrado', () => {
    cy.contains('Este email já está sendo usado').should('be.visible');
});
