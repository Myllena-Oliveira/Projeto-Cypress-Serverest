describe('Carrinho de compras', () => {
    it('Validar adição de produto ao carrinho', () => {
        // Dado que o usuário está logado no sistema
        cy.criarELogarFrontend({ administrador: 'false' });
        
        // E na página inicial, visualizar os produtos
        cy.url().should('include', '/home');
        cy.get('[data-testid="adicionarNaLista"]').should('be.visible');
        
        // E clicar no botão "Adicionar a lista", do produto desejado
        cy.get('[data-testid="adicionarNaLista"]').first().click();
        
        // E o usuário for redirecionado para a tela de Lista de compras
        cy.url().should('include', '/minhaListaDeProdutos');
        cy.contains('Lista de Compras').should('be.visible');
        
        // Quando o usuário clicar em "Adicionar no carrinho"
        cy.get('[data-testid="adicionar carrinho"]').should('be.visible').first().click();
        
        // Então deverá ser redirecionado para a tela de Carrinho
        cy.url().should('include', '/carrinho');
    });
});