/// <reference types="cypress" />

const applePage = require('../../support/pageObjects/applePage')

describe('Apple Mac mini Home Page Test', () => {
  it('displays the Mac mini promotion and opens both calls to action', () => {
    // Open the Apple home page before verifying the Mac mini promotion.
    applePage.openHomePage()

    // Verify the headline, subhead, callout, and both visible links.
    applePage.verifyMacMiniHomePageTile()

    // Verify that Learn more is clickable and opens the Mac mini page.
    applePage.clickMacMiniLearnMore()
    applePage.verifyMacMiniPage()

    // Return home to verify that Pre-order is also clickable.
    applePage.openHomePage()
    applePage.clickMacMiniPreOrder()
    applePage.verifyMacMiniPreOrderPage()
  })
})
