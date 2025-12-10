import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let emailUnico;

Given('que o usuário está na página de login do sistema', () => {
    cy.visit('/login');
});

Given('que estou na página de cadastro', () => {
    cy.visit('/cadastrarusuarios');
});

Given('visualizar o botão de "Cadastre-se"', () => {
    cy.get('[data-testid="cadastrar"]').should('be.visible');
});

Given('clicar no botão de "Cadastre-se"', () => {
    cy.get('[data-testid="cadastrar"]').click();
});

When('for redirecionado para a tela de cadastro', () => {
    cy.url().should('include', '/cadastrarusuarios');
});

When('preencher o campo de "Nome" com um nome válido', () => {
    cy.get('[data-testid="nome"]').type('Usuário Teste BDD');
});

When('preencher o campo de "E-mail" com um e-mail válido', () => {
    emailUnico = `user${Date.now()}@teste.com`;
    cy.get('[data-testid="email"]').type(emailUnico);
});

When('preencher o campo de "Senha" com uma senha válida', () => {
    cy.get('[data-testid="password"]').type('senha123');
});

When('eu preencho o nome {string}', (nome) => {
    cy.get('[data-testid="nome"]').type(nome);
});

When('eu preencho o email com um email único', () => {
    emailUnico = `user${Date.now()}@teste.com`;
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

Then('o cadastro deve ser realizado com sucesso', () => {
    cy.get('[data-testid="cadastrar"]').click();
});

Then('deve exibir a mensagem {string}', (mensagem) => {
    cy.contains(mensagem).should('be.visible');
});

Then('devo ver a mensagem {string}', (mensagem) => {
    cy.contains(mensagem).should('be.visible');
});

Then('devo ver a mensagem de erro sobre email já cadastrado', () => {
    cy.contains('Este email já está sendo usado').should('be.visible');
});

