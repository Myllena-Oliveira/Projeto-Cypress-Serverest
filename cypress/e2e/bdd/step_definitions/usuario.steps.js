const { Given, When } = require('@badeball/cypress-cucumber-preprocessor');

// Contexto: API disponível
Given('que a API de usuários está disponível em {string}', (url) => {
  cy.wrap(url.replace('/usuarios', '')).as('apiBaseUrl');
});

// Cenário: Criar usuário com sucesso
When('o usuário enviar uma requisição POST para criar um novo usuário', () => {
  cy.fixture('usuarios').then((usuarios) => {
    const usuarioUnico = {
      nome: usuarios.usuarioBase.nome,
      email: `teste_${Date.now()}@qa.com.br`,
      password: usuarios.usuarioBase.password,
      administrador: usuarios.usuarioBase.administrador
    };
    
    cy.get('@apiBaseUrl').then((baseUrl) => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/usuarios`,
        body: usuarioUnico
      }).as('responseUsuario');
    });
  });
});

When('o corpo da requisição contiver os seguintes dados:', (dataTable) => {
  // Os dados já são passados via fixture no custom command
  // Este step é apenas documentação do que está sendo enviado
});
