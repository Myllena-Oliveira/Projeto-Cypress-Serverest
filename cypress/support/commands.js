// ***********************************************
// Custom Commands para Usuários
// ***********************************************

/**
 * Comando para criar um usuário via API
 * @param {Object} dadosUsuario - Dados customizados do usuário (opcional)
 * @returns {Object} - Retorna os dados do usuário criado
 */
Cypress.Commands.add('criarUsuarioAPI', (dadosUsuario = {}) => {
  return cy.fixture('usuarios').then((usuarios) => {
    const usuarioUnico = {
      ...usuarios.usuarioBase,
      email: `teste_${Date.now()}@qa.com.br`,
      ...dadosUsuario
    };

    return cy.request('POST', 'https://serverest.dev/usuarios', usuarioUnico)
      .then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body.message).to.equal('Cadastro realizado com sucesso');
        usuarioUnico._id = response.body._id;
        return usuarioUnico;
      });
  });
});

/**
 * Comando para fazer login via API
 */
Cypress.Commands.add('loginAPI', (email, password) => {
  return cy.request('POST', 'https://serverest.dev/login', {
    email: email,
    password: password
  }).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('authorization');
    return response.body.authorization;
  });
});

/**
 * Comando para criar usuário e fazer login automaticamente via API
 */
Cypress.Commands.add('criarELogarAPI', (dadosUsuario = {}) => {
  return cy.criarUsuarioAPI(dadosUsuario).then((usuario) => {
    return cy.loginAPI(usuario.email, usuario.password).then((token) => {
      return { usuario: usuario, token: token };
    });
  });
});

/**
 * Comando para criar usuário e fazer login no frontend
 */
Cypress.Commands.add('criarELogarFrontend', (dadosUsuario = {}) => {
  cy.criarUsuarioAPI(dadosUsuario).then((usuario) => {
    cy.visit('/login');
    cy.get('[data-testid="email"]').type(usuario.email);
    cy.get('[data-testid="senha"]').type(usuario.password);
    cy.get('[data-testid="entrar"]').click();
    cy.url().should('include', '/home');
    cy.wrap(usuario).as('usuarioLogado');
  });
});

/**
 * Comando para listar produtos via API
 */
Cypress.Commands.add('listarProdutosAPI', () => {
  return cy.request('GET', 'https://serverest.dev/produtos').then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('quantidade');
    expect(response.body.produtos).to.be.an('array');
    return response.body.produtos;
  });
});
