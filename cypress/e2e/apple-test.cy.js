/// <reference types="cypress" />

const appleMenuTabs = [
  {
    name: 'Store',
    href: '/us/shop/goto/store',
    expectedPath: '/store',
  },
  {
    name: 'Mac',
    href: '/mac/',
    expectedPath: '/mac/',
  },
  {
    name: 'iPad',
    href: '/ipad/',
    expectedPath: '/ipad/',
  },
  {
    name: 'iPhone',
    href: '/iphone/',
    expectedPath: '/iphone/',
  },
]

function checkAppleMenuTab(name, href, expectedPath) {
  cy.get(`#globalnav a[href="${href}"]`)
    .first()
    .should('be.visible')
    .and('contain.text', name)
    .click()

  cy.location('pathname', { timeout: 20000 }).should('eq', expectedPath)
  cy.get('body').should('be.visible')
  cy.contains('body', name).should('be.visible')
}

describe('Apple Menu Bar Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.apple.com/')
    cy.get('#globalnav').should('be.visible')
  })

  appleMenuTabs.forEach(({ name, href, expectedPath }) => {
    it(`opens the ${name} menu tab`, () => {
      checkAppleMenuTab(name, href, expectedPath)
    })
  })
})
