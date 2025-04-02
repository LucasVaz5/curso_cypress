describe("Página de login", () => {
it ("Deve preencehr todos os campos do login corretamente e autenticar o usuário na pagina", () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="input-loginEmail"]').type("tester@gmail.com");
    cy.get('[data-test="input-loginPassword"]').type("Teste123");
    cy.get('.pass__view').click();

    })
})
