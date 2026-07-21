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

  it('opens the Apple Watch page from the Watch menu tab', () => {
    // Open the Apple home page before clicking the Watch tab.
    applePage.openHomePage()

    // Click the Watch tab from the top navigation menu.
    applePage.clickWatchTab()

    // Verify that the user landed on the Apple Watch page.
    applePage.verifyWatchPage()

    // Verify that the browser page title says Apple Watch.
    applePage.verifyWatchPageTitle()
  })
})
