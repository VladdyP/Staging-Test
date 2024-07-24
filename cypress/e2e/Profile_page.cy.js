/// <reference types="Cypress"/>

describe('Profile Page', () => {

    beforeEach(() => {
        cy.visit('/cupertino')
        cy.get('[id="userName"]').type('Chris')
        cy.get('.MuiButtonBase-root').should('have.text','Continue').click()
        cy.get('[id="password"]').type('Welcome1!')
        cy.get('[type="submit"]').click()
    })
    it('Profile Page Tab', () => {
        cy.get('button#onetrust-accept-btn-handler').should('be.visible').click()
        cy.get("[data-testid='CloseIcon']").click()
        cy.get("[data-testid='unopenedRecognitions']").should('not.be.visible')
        cy.get("[data-testid='done']").click()
        cy.get("[data-testid='profile']").should('be.visible').click()
        cy.url('/cupertino/me/recognition')
        
    })
})