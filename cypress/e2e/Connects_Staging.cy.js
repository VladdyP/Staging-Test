describe('Login Page test', () => {
  it('Test 01', () => {
    cy.visit('/cupertino')
    cy.get('[id="userName"]').type('Chris')
    cy.get('.MuiButtonBase-root').should('have.text','Continue').click()
    cy.get('[id="password"]').type('Welcome1!')
    cy.get('[type="submit"]').click()
  }),
  it('Test 02', () => {
    cy.visit('/cupertino')
    cy.get('[id="userName"]').type('Chris')
    cy.get('.MuiButtonBase-root').should('have.text','Continue').click()
    cy.get('[id="password"]').type('Welcome1!')
    cy.get('[type="submit"]').click()
  }),
  it('Test 03', () => {
    cy.visit('/cupertino')
    cy.get('[id="userName"]').type('Chris')
    cy.get('.MuiButtonBase-root').should('have.text','Continue').click()
    cy.get('[id="password"]').type('Welcome1!')
    cy.get('[type="submit"]').click()
  })
})