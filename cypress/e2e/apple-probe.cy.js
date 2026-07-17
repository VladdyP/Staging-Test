/// <reference types="cypress" />

describe('Apple iPhone 17 Pro Buy Test', () => {
  it('opens iPhone 17 Pro and selects iPhone 17 Pro Max in Silver', () => {
    // Open the Apple home page before starting the test flow.
    cy.log('Open Apple home page')
    cy.visit('https://www.apple.com/')

    // Click the iPhone tab from the top navigation menu.
    cy.log('Click the iPhone tab in the top menu')
    cy.get('#globalnav a[href="/iphone/"]')
      .first()
      .should('be.visible')
      .click()

    // Verify that the user landed on the iPhone page.
    cy.location('pathname', { timeout: 20000 }).should('eq', '/iphone/')

    // Open the iPhone 17 Pro product page.
    cy.log('Click iPhone 17 Pro on the iPhone page')
    cy.get('a[href="/iphone-17-pro/"]')
      .filter(':visible')
      .first()
      .click()

    // Verify that the iPhone 17 Pro page is displayed.
    cy.location('pathname', { timeout: 20000 }).should('eq', '/iphone-17-pro/')
    cy.contains('body', 'iPhone 17 Pro').should('be.visible')

    // Click the Buy button to open the iPhone 17 Pro purchase page.
    cy.log('Click the Buy button for iPhone 17 Pro')
    cy.get('a[aria-label="Buy, iPhone 17 Pro"]')
      .filter(':visible')
      .first()
      .click()

    // Verify that the user landed on the buy page.
    cy.location('pathname', { timeout: 30000 }).should('include', '/shop/buy-iphone/iphone-17-pro')

    // Verify the regular iPhone 17 Pro option and starting price.
    cy.log('Check that iPhone 17 Pro starts at $1099')
    cy.contains('.form-selector-label', /iPhone 17 Pro\s+6\.3-inch display[\s\S]*From \$1099/)
      .should('be.visible')

    // Verify the iPhone 17 Pro Max option and starting price.
    cy.log('Check that iPhone 17 Pro Max starts at $1199')
    cy.contains('.form-selector-label', /iPhone 17 Pro Max\s+6\.9-inch display[\s\S]*From \$1199/)
      .should('be.visible')

    // Select the iPhone 17 Pro Max size option.
    cy.log('Select iPhone 17 Pro Max')
    cy.get('[data-autom="dimensionScreensize6_9inch"]')
      .click({ force: true })
      .should('be.checked')

    // Select the Silver color option.
    cy.log('Select Silver color')
    cy.get('[data-autom="dimensionColorsilver"]')
      .click({ force: true })
      .should('be.checked')

    // Verify that Silver is selected or visible on the page.
    cy.contains('label', /^Silver$/).should('be.visible')
  })
})
