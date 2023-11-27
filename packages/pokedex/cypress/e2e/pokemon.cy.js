describe('Navigation', () => {
  it('should navigate to Pokemon page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="pokemon"]').click()
    cy.url().should('include', '/pokemon')
  })
  it('should navigate to PokemonDetails page', () => {
      cy.visit('http://localhost:3000/')
      cy.get('a[href*="pokemonDetails"]').click()
      cy.url().should('include', '/pokemonDetails')
    })
})