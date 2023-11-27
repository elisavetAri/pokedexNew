describe('Navigation', () => {
    it('should navigate to Pokemon page', () => {
      cy.visit('http://localhost:3000/')
      cy.get('a[href*="pokemon"]').click()
      cy.url().should('include', '/pokemon')
      cy.get('pokemonPage')
    })
  })