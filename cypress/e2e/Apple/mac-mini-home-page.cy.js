/// <reference types="cypress" />

const applePage = require('../../support/pageObjects/applePage')

describe('Apple Mac mini Home Page Test', () => {
  beforeEach(() => {
    // Start each test from the Apple home page.
    applePage.openHomePage()
  })

  it('displays the Mac mini promotion and calls to action', () => {
    // Verify the headline, subhead, callout, and both visible links.
    applePage.verifyMacMiniHomePageTile()
  })

  it('opens the Mac mini page from Learn more', () => {
    // Verify that Learn more is clickable and opens the Mac mini page.
    applePage.clickMacMiniLearnMore()
    applePage.verifyMacMiniPage()
  })

  it('opens the Mac mini purchase page from Pre-order', () => {
    // Verify that Pre-order is clickable and opens the Mac mini purchase page.
    applePage.clickMacMiniPreOrder()
    applePage.verifyMacMiniPreOrderPage()
  })
})
