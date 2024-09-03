/// <reference types="cypress" />

describe("first test", () => {
    beforeEach('visit main page', () => {
        cy.visit('https://www.apple.com')
    })

    it('Store page', () => {
        cy.get('[href="/us/shop/goto/store"]').eq(0).should("have.text", "Store").click()
        cy.url().should("contain", "https://www.apple.com/store")
    })

  
})