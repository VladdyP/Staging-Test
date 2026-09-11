/// <reference types="cypress" />

const applePage = require('../../support/pageObjects/applePage')

describe('Apple Menu Bar Tests', () => {
  it('opens the Store tab from the top menu', () => {
    // Open the Apple home page before clicking the menu tab.
    applePage.openHomePage()

    // Verify that the top navigation menu is displayed.
    applePage.verifyTopNavigationVisible()

    // Click the Store tab from the top navigation menu.
    applePage.clickStoreTab()

    // Verify that the user landed on the Store page.
    applePage.verifyStorePage()
  })

  it('opens the Mac tab from the top menu', () => {
    // Open the Apple home page before clicking the menu tab.
    applePage.openHomePage()

    // Verify that the top navigation menu is displayed.
    applePage.verifyTopNavigationVisible()

    // Click the Mac tab from the top navigation menu.
    applePage.clickMacTab()

    // Verify that the user landed on the Mac page.
    applePage.verifyMacPage()
  })

  it('opens the iPad tab from the top menu', () => {
    // Open the Apple home page before clicking the menu tab.
    applePage.openHomePage()

    // Verify that the top navigation menu is displayed.
    applePage.verifyTopNavigationVisible()

    // Click the iPad tab from the top navigation menu.
    applePage.clickIpadTab()

    // Verify that the user landed on the iPad page.
    applePage.verifyIpadPage()
  })

  it('opens the iPhone tab from the top menu', () => {
    // Open the Apple home page before clicking the menu tab.
    applePage.openHomePage()

    // Verify that the top navigation menu is displayed.
    applePage.verifyTopNavigationVisible()

    // Click the iPhone tab from the top navigation menu.
    applePage.clickIphoneTab()

    // Verify that the user landed on the iPhone page.
    applePage.verifyIphonePage()
  })
})
