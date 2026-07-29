/// <reference types="cypress" />

const blackPackPage = require('../../../support/pageObjects/blackPackPage')

describe('Black Pack Home Page Tests', { baseUrl: 'https://blackpack.ua' }, () => {
  before(() => {
    // Save the English language session once before the home page tests run.
    blackPackPage.saveEnglishLanguage()
  })

  it('opens the Black Pack home page', () => {
    // Open the Black Pack home page in English.
    blackPackPage.openHomePage()

    // Verify that the user landed on the English Black Pack home page.
    blackPackPage.verifyHomePageUrl()

    // Verify that the page loaded visible content.
    blackPackPage.verifyHomePageLoaded()
  })
})
