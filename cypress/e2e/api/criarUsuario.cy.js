describe('API - Criar Usuário', () => {
	it('Deve criar um usuário com sucesso', () => {
        cy.request('POST', 'https://serverest.dev/usuarios', {
            nome: 'Novo Usuário',
            email: Cypress.env('apiEmail'),
            password: Cypress.env('apiPassword'),
            administrador: 'true'
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq('Cadastro realizado com sucesso');
        });
    });
});
