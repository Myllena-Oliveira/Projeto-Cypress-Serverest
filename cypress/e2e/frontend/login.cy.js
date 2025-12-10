import loginPage from '../../support/pageObjects/loginPage';

describe('Login no Frontend', () => {
    it('Validar login com credenciais válidas', () => {
        // Usando custom command para criar usuário NÃO administrador e fazer login automaticamente
        cy.criarELogarFrontend({ administrador: 'false' });
        
        // Valida que está na página home após login
        cy.url().should('include', '/home');
        cy.contains('Serverest Store').should('be.visible');
    });

    it('Validar login manual com usuário criado via API', () => {
        // Cria usuário NÃO administrador via API primeiro
        cy.criarUsuarioAPI({ administrador: 'false' }).then((usuario) => {
            // Dado que o usuário está na página de login
            cy.visit('/login');
            cy.url().should('include', '/login');
            
            // Quando preencher os campos com as credenciais
            cy.get('[data-testid="email"]').type(usuario.email);
            cy.get('[data-testid="senha"]').type(usuario.password);
            
            // E clicar em "Entrar"
            cy.get('[data-testid="entrar"]').click();
            
            // Então deve ser direcionado para a tela inicial
            cy.url().should('include', '/home');
            cy.contains('Serverest Store').should('be.visible');
        });
    });
});
