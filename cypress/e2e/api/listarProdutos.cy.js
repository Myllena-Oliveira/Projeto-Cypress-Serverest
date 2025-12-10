describe('API - Listar Produtos', () => {
    it('Deve retornar lista de produtos', () => {
        // Usando custom command para listar produtos
        cy.listarProdutosAPI().then((response) => {
            expect(response.body.produtos).to.be.an('array');
            expect(response.body).to.have.property('quantidade');
            expect(response.status).to.equal(200);
            cy.log(`Total de produtos encontrados: ${response.body.produtos.length}`);
        });
    });

    it('Deve validar estrutura dos produtos listados', () => {
        cy.listarProdutosAPI().then((response) => {
            const produtos = response.body.produtos;
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