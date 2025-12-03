describe('API - Listar Produtos', () => {
    it('Deve retornar lista de produtos', () => {
        cy.request('GET', 'https://serverest.dev/produtos').then((response) => { 
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('quantidade');
            expect(response.body.produtos).to.be.an('array');
        });
    });
});