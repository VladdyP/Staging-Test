/// <reference types="cypress" />
describe('Profile Page', () => {

    beforeEach(() => {
        cy.login("Peter", "Welcome1!")
    })

    it('Profile Page Tab', () => {
        cy.visit('/cupertino')
        cy.get("[data-testid='profile']").should('be.visible').click()
        cy.url().should('include', '/cupertino/me/recognition')
    })

    it('Celebration Tab', () => {
        cy.visit('/cupertino')
        cy.getByTestId('celebrations').should('be.visible').click()
        cy.url().should('include', '/cupertino/celebrations')
        cy.wait(1000)
        cy.get("#select-small").click()
    })
})