describe("Página de login", () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

it ("Deve preencher todos os campos do login corretamente e autenticar o usuário na pagina", () => {
    cy.get('[data-test="input-loginEmail"]').type("tester@gmail.com");
    cy.get('[data-test="input-loginPassword"]').type("Teste123");
    cy.get('.pass__view').click();

    })
})
