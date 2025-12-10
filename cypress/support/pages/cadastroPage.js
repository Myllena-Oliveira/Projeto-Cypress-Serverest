class CadastroPage {
    // Seletores
    get nomeField() { return cy.get('[data-testid="nome"]'); }
    get emailField() { return cy.get('[data-testid="email"]'); }
    get passwordField() { return cy.get('[data-testid="senha"]'); }
    get adminCheckbox() { return cy.get('[data-testid="checkbox"]'); }
    get submitButton() { return cy.get('[data-testid="cadastrar"]'); }
    get alertMessage() { return cy.get('.alert'); }

    // Ações
    visit() {
        cy.visit('/cadastrarusuarios');
        return this;
    }

    fillNome(nome) {
        this.nomeField.clear().type(nome);
        return this;
    }

    fillEmail(email) {
        this.emailField.clear().type(email);
        return this;
    }

    fillSenha(senha) {
        this.passwordField.clear().type(senha);
        return this;
    }

    marcarAdministrador() {
        this.adminCheckbox.check();
        return this;
    }

    desmarcarAdministrador() {
        this.adminCheckbox.uncheck();
        return this;
    }

    submit() {
        this.submitButton.click();
        return this;
    }

    cadastrar(nome, email, senha, isAdmin = false) {
        this.fillNome(nome);
        this.fillEmail(email);
        this.fillSenha(senha);
        if (isAdmin) {
            this.marcarAdministrador();
        }
        this.submit();
        return this;
    }

    // Validações
    deveExibirMensagemSucesso(mensagem = 'Cadastro realizado com sucesso') {
        this.alertMessage.should('be.visible').and('contain', mensagem);
        return this;
    }

    deveExibirMensagemErro(mensagem) {
        this.alertMessage.should('be.visible');
        if (mensagem) {
            this.alertMessage.should('contain', mensagem);
        }
        return this;
    }

    deveRedirecionarParaListaUsuarios() {
        cy.url().should('include', '/listarusuarios');
        return this;
    }
}

export default new CadastroPage();