/// <reference types="cypress" />

const applePage = require('../../support/pageObjects/applePage')

describe('Apple Home Page Test', () => {
  it('displays the education offer title and gift card message', () => {
    // Open the Apple home page before verifying the education offer.
    applePage.openHomePage()

    // Verify that the education offer tile displays the expected headline and subhead.
    applePage.verifyEducationOfferTileCopy()
  })
})
