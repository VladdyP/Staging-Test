describe('Login Page test', () => {
  it('passes', () => {
    cy.visit('/cupertino')
    cy.get('[id="userName"]').type('vlad')
    cy.get('.MuiButtonBase-root').should('have.text','Continue').click()
    cy.get('[id="password"]').type('Welcome1!')
    cy.get('[type="submit"]').click()
  })
})