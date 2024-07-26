/// <reference types="Cypress"/>

describe('Profile Page', () => {

    beforeEach(() => {
        cy.visit('/cupertino')
        cy.wait(1000)
        cy.get('[id="userName"]').type('Chris')
        cy.get("button#onetrust-accept-btn-handler").should('be.visible').click()
        cy.get('.MuiButtonBase-root').should('have.text','Continue').click()
        cy.wait(1000)
        cy.get('[id="password"]').type('Welcome1!')
        cy.get('[type="submit"]').click()
        cy.get("[data-testid='done']").click()
        cy.get("[data-testid='CloseIcon']").click()

    })

    it('Profile Page Tab', () => {
        cy.get("[data-testid='profile']").should('be.visible').click()
        cy.url().should('include', '/cupertino/me/recognition')

    })

    it.only('Celebration Tab', () => {
        cy.get("[data-testid='celebrations']").should('be.visible').click()
        cy.url().should('include', '/cupertino/celebrations')
        cy.wait(1000)
        cy.get("#select-small").click()

    })
})