class LoginPage {
	visit() {
		cy.visit('/login');
	}
     fillEmail(email) {
        cy.get('[data-testid="email"]').type(frontEmail);
    }
    fillPassword(password) {
        cy.get('[data-testid="senha"]').type(frontPassword);
    }
    submit() {
        cy.get('[data-testid="entrar"]').click();
    }
}
export default new LoginPage();
