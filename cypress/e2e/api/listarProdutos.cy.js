describe('API - Listar Produtos', () => {
    it('Deve retornar lista de produtos', () => {
        // Usando custom command para listar produtos
        cy.listarProdutosAPI().then((produtos) => {
            expect(produtos).to.be.an('array');
            cy.log(`Total de produtos encontrados: ${produtos.length}`);
        });
    });

    it('Deve validar estrutura dos produtos listados', () => {
        cy.listarProdutosAPI().then((produtos) => {
            if (produtos.length > 0) {
                // Valida estrutura do primeiro produto
                const produto = produtos[0];
                expect(produto).to.have.property('nome');
                expect(produto).to.have.property('preco');
                expect(produto).to.have.property('descricao');
                expect(produto).to.have.property('quantidade');
                expect(produto).to.have.property('_id');
            }
        });
    });
});