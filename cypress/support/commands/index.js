// ***********************************************
// Custom Commands para Usuários
// ***********************************************

/**
 * Comando para criar um usuário via API
 * @param {Object} dadosUsuario - Dados customizados do usuário (opcional)
 * @returns {Object} - Retorna { usuario, response }
 */
Cypress.Commands.add('criarUsuarioAPI', (dadosUsuario = {}) => {
  return cy.fixture('usuarios').then((usuarios) => {
    const usuarioUnico = {
      ...usuarios.usuarioBase,
      email: `teste_${Date.now()}@qa.com.br`,
      ...dadosUsuario
    };

    return cy.request('POST', `${Cypress.env('apiBaseUrl')}/usuarios`, usuarioUnico)
      .then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body.message).to.equal('Cadastro realizado com sucesso');
        usuarioUnico._id = response.body._id;
        return { usuario: usuarioUnico, response };
      });
  });
});

/**
 * Comando para fazer login via API
 * @returns {Object} - Retorna { token, response }
 */
Cypress.Commands.add('loginAPI', (email, password) => {
  return cy.request('POST', `${Cypress.env('apiBaseUrl')}/login`, {
    email: email,
    password: password
  }).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('authorization');
    return { token: response.body.authorization, response };
  });
});

/**
 * Comando para criar usuário e fazer login automaticamente via API
 * @returns {Object} - Retorna { usuario, token, responses }
 */
Cypress.Commands.add('criarELogarAPI', (dadosUsuario = {}) => {
  return cy.criarUsuarioAPI(dadosUsuario).then((result) => {
    return cy.loginAPI(result.usuario.email, result.usuario.password).then((loginResult) => {
      return { 
        usuario: result.usuario, 
        token: loginResult.token,
        responses: {
          createUser: result.response,
          login: loginResult.response
        }
      };
    });
  });
});

/**
 * Comando para criar usuário e fazer login no frontend
 */
Cypress.Commands.add('criarELogarFrontend', (dadosUsuario = {}) => {
  cy.criarUsuarioAPI(dadosUsuario).then((result) => {
    cy.visit('/login');
    cy.get('[data-testid="email"]').type(result.usuario.email);
    cy.get('[data-testid="senha"]').type(result.usuario.password);
    cy.get('[data-testid="entrar"]').click();
    cy.url().should('include', '/home');
    cy.wrap(result.usuario).as('usuarioLogado');
  });
});

/**
 * Comando para listar produtos via API
 * @returns {Object} - Retorna response completo
 */
Cypress.Commands.add('listarProdutosAPI', () => {
  return cy.request('GET', `${Cypress.env('apiBaseUrl')}/produtos`).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('quantidade');
    expect(response.body.produtos).to.be.an('array');
    return response;
  });
});

/**
 * Comando para fazer login com cache usando cy.session()
 * Evita repetir login em múltiplos testes
 * @param {string} email - Email do usuário
 * @param {string} password - Senha do usuário
 */
Cypress.Commands.add('loginComCache', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/login');
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="senha"]').type(password);
    cy.get('[data-testid="entrar"]').click();
    cy.url().should('include', '/home');
  }, {
    validate() {
      // Valida que a sessão ainda é válida visitando a home
      cy.visit('/home');
      cy.url().should('include', '/home');
    }
  });
});
