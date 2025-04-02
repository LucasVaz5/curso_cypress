describe('template spec', () => {
  it('Clilcar no no botão de ver os pets', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('.button').click();
    cy.get('.header__home').click();
    cy.get('.button').click();
    //cy.get('.header__message').click()  
    cy.contains('a', 'Falar com responsável').click();
  })
})