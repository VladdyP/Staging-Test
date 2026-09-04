/// <reference types="cypress" />

const applePage = require('../../support/pageObjects/applePage')

// Apple no longer displays the Mac mini promotional tile on the homepage.
describe.skip('Apple Mac mini Home Page Test', () => {
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

describe('Apple Mac mini Product Page Test', () => {
  it('displays the M6 and M5 Pro promotion', () => {
    // Open the Mac mini page and verify the current chip lineup.
    applePage.openMacMiniPage()
    applePage.verifyMacMiniChipLineup()
  })
})
