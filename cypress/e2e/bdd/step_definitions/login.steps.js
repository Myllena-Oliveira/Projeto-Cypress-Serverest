import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let usuarioCriado;

// Steps para o cenário de login
Given('que o usuário está na página de login do sistema, através da URL {string}', (url) => {
    cy.visit('/login');
});

Given('que estou na página de login', () => {
    cy.visit('/login');
});

Given('possuir um cadastro ativo', () => {
    // Criar usuário para login
    cy.criarUsuarioAPI({ administrador: 'false' }).then((usuario) => {
        usuarioCriado = usuario;
        cy.wrap(usuario).as('usuarioLogado');
    });
});

When('preencher os campos de  "E-mail" e "Senha" com dados válidos', () => {
    cy.get('@usuarioLogado').then((usuario) => {
        cy.get('[data-testid="email"]').type(usuario.email);
        cy.get('[data-testid="senha"]').type(usuario.password);
    });
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

When('clicar em "Entrar"', () => {
    cy.get('[data-testid="entrar"]').click();
});

When('eu clico no botão de entrar', () => {
    cy.get('[data-testid="entrar"]').click();
});

Then('o usuário deverá ser direcionado para a tela inicial do sistema', () => {
    cy.url().should('include', '/home');
    cy.contains('Serverest Store').should('be.visible');
});

Then('devo ver a home da aplicação', () => {
    cy.url().should('include', '/home');
});

Then('devo ver a mensagem de erro {string}', (mensagem) => {
    cy.contains(mensagem).should('be.visible');
});

