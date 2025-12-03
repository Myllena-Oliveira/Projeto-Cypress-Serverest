class CadastroPage {
    visit() {
        cy.visit('/cadastrarusuarios');
    }
    fillNome(nome) {
        cy.get('[data-testid="nome"]').type(nome);
    }
    fillEmail(email) {
        cy.get('[data-testid="email"]').type(frontEmail);
    }
    fillSenha(senha) {
    cy.get('[data-testid="senha"]').type(frontPassword);
    }
   // marcarAdministrador() {
     //   cy.get('[data-testid="checkbox"]').check();
  //  }
    submit() {
        cy.get('[data-testid="cadastrar"]').click(); 
    }
}
export default new CadastroPage();