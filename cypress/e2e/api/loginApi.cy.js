describe('API - Login', () => {
  it('Deve realizar login e retornar token', () => {
    // Cria um usuário e faz login usando custom command
    cy.criarELogarAPI().then((resultado) => {
      expect(resultado).to.have.property('usuario');
      expect(resultado).to.have.property('token');
      expect(resultado.token).to.be.a('string');
      cy.log(`Token obtido: ${resultado.token}`);
    });
  });

  it('Deve fazer login com usuário existente', () => {
    // Cria usuário primeiro
    cy.criarUsuarioAPI().then((usuario) => {
      // Depois faz login com as credenciais do usuário criado
      cy.loginAPI(usuario.email, usuario.password).then((token) => {
        expect(token).to.be.a('string');
        expect(token).to.not.be.empty;
      });
    });
  });
});
