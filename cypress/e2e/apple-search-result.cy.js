/// <reference types="cypress" />

const applePage = require('../support/pageObjects/applePage')

describe('Apple Search Result Test', () => {
  it('shows suggested links when user searches for iPhone', () => {
    // Open the Apple home page before starting the search flow.
    applePage.openHomePage()

    // Verify that the search window is hidden before opening search.
    applePage.verifySearchWindowHidden()

    // Click the search icon from the top navigation menu.
    applePage.clickSearchIcon()

    // Verify that the search window and search field appear after clicking search.
    applePage.verifySearchWindowVisible()

    // Type iPhone into the search field.
    applePage.enterSearchValue('iPhone')

    // Verify that an iPhone suggested search link is visible.
    applePage.verifySuggestedSearchLinkVisible('iPhone')
  })
})
