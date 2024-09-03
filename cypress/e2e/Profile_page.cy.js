/// <reference types="Cypress"/>

describe('Profile Page', () => {

    beforeEach(() => {
        cy.login("Peter", "Welcome1!")
    })

    it('Profile Page Tab', () => {
        cy.get("[data-testid='profile']").should('be.visible').click()
        cy.url().should('include', '/cupertino/me/recognition')
    })

    it('Celebration Tab', () => {
        cy.get("[data-testid='celebrations']").should('be.visible').click()
        cy.url().should('include', '/cupertino/celebrations')
        cy.wait(1000)
        cy.get("#select-small").click()
    })
})