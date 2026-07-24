/// <reference types="cypress" />

const applePage = require('../support/pageObjects/applePage')

describe('Apple Arcade Tests', () => {
  it('opens the Services page from the Entertainment menu tab', () => {
    // Open the Apple home page before clicking the Entertainment tab.
    applePage.openHomePage()

    // Click the Entertainment tab from the top navigation menu.
    applePage.clickEntertainmentTab()

    // Verify that the user landed on the Services page.
    applePage.verifyServicesPage()

    // Verify that the Services page title is visible.
    applePage.verifyEntertainmentPageTitle()
  })

  it('opens Apple Arcade from the Services chapter navigation', () => {
    // Open the Apple home page before starting the Apple Arcade flow.
    applePage.openHomePage()

    // Click the Entertainment tab from the top navigation menu.
    applePage.clickEntertainmentTab()

    // Verify that the user landed on the Services page.
    applePage.verifyServicesPage()

    // Click Apple Arcade from the chapter navigation.
    applePage.clickAppleArcadeChapterNav()

    // Verify that the user landed on the Apple Arcade page.
    applePage.verifyAppleArcadePage()
  })
})
