/// <reference types="cypress" />

describe('Refatoração com Before', () => {
  beforeEach(() => {
     cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })

  it("Verificar String", () => {
    cy.contains("Quem ama adota!").should('be.visible');
  })

  it("Verificar String2", () => {
    cy.contains("Adotar pode mudar uma vida. Que tal" +
      " buscar seu novo melhor amigo hoje? Vem com a gente!").should('be.visible');
  })

  it("Realizar Login", () => {
    cy.get('.header__message').click();
    cy.get('[data-test="input-loginEmail"]').type("lucas.vs.br@gmail.com");
    cy.get('.pass__view').click();
    cy.get('[data-test="input-loginPassword"]').type("Teste12345");
    cy.get('[data-test="submit-button"]').click();
  })
})