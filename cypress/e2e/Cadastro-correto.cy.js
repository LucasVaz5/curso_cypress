describe('template spec', () => {
  it('Preencher os fomulários corretos', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type("Matheus Vaz")
    cy.get('[data-test="input-email"]').type("teste@gmail.com")
    cy.get('[data-test="input-password"]').type("Teste12345")
    cy.get('[data-test="input-confirm-password"]').type("Teste12345")
    cy.get('[data-test="submit-button"]').click();
    
  })
})