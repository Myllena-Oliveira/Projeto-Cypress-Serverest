import CadastroPage from '../../support/pages/cadastroPage';

describe('Cadastro de Usuário', () => {
    it('Validar cadastro com todos os campos preenchidos', () => {
        // Usando fixture para obter dados do usuário
        cy.fixture('usuarios').then((usuarios) => {
            const emailUnico = `teste_${Date.now()}@qa.com.br`;
            
            // Dado que o usuário está na página de login do sistema
            cy.visit('/login');
            
            // E visualizar o botão de "Cadastre-se"
            cy.get('[data-testid="cadastrar"]').should('be.visible');
            
            // E clicar no botão de "Cadastre-se"
            cy.get('[data-testid="cadastrar"]').click();
            
            // Quando for redirecionado para a tela de cadastro
            cy.url().should('include', '/cadastrarusuarios');
            
            // E preencher o campo de "Nome" com um nome válido
            cy.get('[data-testid="nome"]').type(usuarios.usuarioBase.nome);
            
            // E preencher o campo de "E-mail" com um e-mail único
            cy.get('[data-testid="email"]').type(emailUnico);
                
            // E preencher o campo de "Senha" com uma senha válida
            cy.get('[data-testid="password"]').type(usuarios.usuarioBase.password);
            
            // Então o cadastro deve ser realizado com sucesso
            cy.get('[data-testid="cadastrar"]').click();
            
            // E deve exibir a mensagem "Cadastro realizado com sucesso"
            cy.contains('Cadastro realizado com sucesso').should('be.visible');
            
            // E o usuário deve permanecer na página de cadastro
            cy.url().should('include', '/cadastrarusuarios');
        });
    });

});