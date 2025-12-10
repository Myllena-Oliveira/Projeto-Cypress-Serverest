class LoginPage {
    // Seletores
    get emailField() { return cy.get('[data-testid="email"]'); }
    get passwordField() { return cy.get('[data-testid="senha"]'); }
    get submitButton() { return cy.get('[data-testid="entrar"]'); }
    get alertMessage() { return cy.get('.alert'); }

    // Ações
    visit() {
        cy.visit('/login');
        return this;
    }

    fillEmail(email) {
        this.emailField.clear().type(email);
        return this;
    }

    fillPassword(password) {
        this.passwordField.clear().type(password);
        return this;
    }

    submit() {
        this.submitButton.click();
        return this;
    }

    login(email, password) {
        this.fillEmail(email);
        this.fillPassword(password);
        this.submit();
        return this;
    }

    // Validações
    deveEstarNaHome() {
        cy.url().should('include', '/home');
        return this;
    }

    deveExibirMensagemErro(mensagem) {
        this.alertMessage.should('be.visible');
        if (mensagem) {
            this.alertMessage.should('contain', mensagem);
        }
        return this;
    }

    deveConterTitulo(titulo) {
        cy.contains(titulo).should('be.visible');
        return this;
    }
}

export default new LoginPage();
