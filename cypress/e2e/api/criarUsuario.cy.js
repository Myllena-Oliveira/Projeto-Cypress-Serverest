describe('API - Criar Usuário', () => {
	it('Deve criar um usuário com sucesso', () => {
        // Usando custom command com fixture
        cy.criarUsuarioAPI().then((usuario) => {
            // Verifica se o usuário foi criado com sucesso
            expect(usuario).to.have.property('_id');
            expect(usuario).to.have.property('email');
            cy.log(`Usuário criado: ${usuario.email}`);
        });
    });

    it('Deve criar um usuário administrador customizado', () => {
        // Criando usuário com dados customizados
        cy.criarUsuarioAPI({
            nome: 'Admin Customizado',
            administrador: 'true'
        }).then((usuario) => {
            expect(usuario.nome).to.equal('Admin Customizado');
            expect(usuario.administrador).to.equal('true');
        });
    });

    it('Deve criar um usuário comum', () => {
        // Criando usuário comum (não admin) usando fixture
        cy.fixture('usuarios').then((usuarios) => {
            cy.criarUsuarioAPI(usuarios.usuarioComum).then((usuario) => {
                expect(usuario.administrador).to.equal('false');
            });
        });
    });
});
