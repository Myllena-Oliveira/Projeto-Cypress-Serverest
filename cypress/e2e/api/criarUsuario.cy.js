describe('API - Criar Usuário', () => {
	it('Deve criar um usuário com sucesso', () => {
        // Usando custom command com fixture
        cy.criarUsuarioAPI().then((result) => {
            // Verifica se o usuário foi criado com sucesso
            expect(result.usuario).to.have.property('_id');
            expect(result.usuario).to.have.property('email');
            expect(result.response.status).to.equal(201);
            cy.log(`Usuário criado: ${result.usuario.email}`);
        });
    });

    it('Deve criar um usuário administrador customizado', () => {
        // Criando usuário com dados customizados
        cy.criarUsuarioAPI({
            nome: 'Admin Customizado',
            administrador: 'true'
        }).then((result) => {
            expect(result.usuario.nome).to.equal('Admin Customizado');
            expect(result.usuario.administrador).to.equal('true');
            expect(result.response.body.message).to.equal('Cadastro realizado com sucesso');
        });
    });

    it('Deve criar um usuário comum', () => {
        // Criando usuário comum (não admin) usando fixture
        cy.fixture('usuarios').then((usuarios) => {
            cy.criarUsuarioAPI(usuarios.usuarioComum).then((result) => {
                expect(result.usuario.administrador).to.equal('false');
            });
        });
    });
});
