describe('API - Login', () => {
  it('Deve realizar login e retornar token', () => {
    cy.request('POST', 'https://serverest.dev/login', {
      email: Cypress.env('apiEmail'),
      password: Cypress.env('apiPassword'),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('authorization');
    });
  });
});
