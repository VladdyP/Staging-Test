/// <reference types="cypress" />

const canyonPage = require('../../../support/pageObjects/canyonPage')

describe('Canyon Home Page Tests', () => {
  before(() => {
    // Accept the cookie popup once and save it for future Canyon tests.
    canyonPage.saveCookiePopupChoice()
  })

  it('opens the Canyon home page', () => {
    // Open the Canyon US home page.
    canyonPage.openHomePage()

    // Verify that the cookie popup is not covering the page.
    canyonPage.verifyCookiePopupClosed()

    // Verify that the user landed on the correct Canyon URL.
    canyonPage.verifyHomePageUrl()

    // Verify that the page loaded visible content.
    canyonPage.verifyHomePageLoaded()
  })
})
