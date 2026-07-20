/// <reference types="cypress" />

const applePage = require('../support/pageObjects/applePage')

describe('Apple Store Page Test', () => {
  it('opens the Store page from the Store menu tab', () => {
    // Open the Apple home page before clicking the Store tab.
    applePage.openHomePage()

    // Click the Store tab from the top navigation menu.
    applePage.clickStoreTab()

    // Verify that the user landed on the Store page.
    applePage.verifyStorePage()

    // Verify that the Store page URL is correct.
    applePage.verifyStorePageUrl()

    // Verify that the browser page title says Store.
    applePage.verifyStorePageTitle()
  })
})
