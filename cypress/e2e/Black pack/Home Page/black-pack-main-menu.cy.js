/// <reference types="cypress" />

const blackPackPage = require('../../../support/pageObjects/blackPackPage')

describe('Black Pack Main Menu Tests', { baseUrl: 'https://blackpack.ua' }, () => {
  before(() => {
    // Save the English language session once before the main menu tests run.
    blackPackPage.saveEnglishLanguage()
  })

  beforeEach(() => {
    // Use desktop size so the main menu is visible.
    cy.viewport(1280, 720)
  })

  it('shows and opens the Bags menu tab', () => {
    // Open the Black Pack home page.
    blackPackPage.openHomePage()

    // Verify that the main menu container is visible.
    blackPackPage.verifyMainMenuVisible()

    // Verify that the Bags tab is visible in the main menu.
    blackPackPage.verifyMainMenuTabVisible('Bags')

    // Verify that the Bags tab has the correct link.
    blackPackPage.verifyMainMenuTabClickable('Bags', 'https://blackpack.ua/en/shop/bags/')

    // Click the Bags tab.
    blackPackPage.clickMainMenuTab('Bags')

    // Verify that the user landed on the Bags page.
    blackPackPage.verifyCurrentUrl('https://blackpack.ua/en/shop/bags/')
  })

  it('shows and opens the Accessories menu tab', () => {
    // Open the Black Pack home page.
    blackPackPage.openHomePage()

    // Verify that the main menu container is visible.
    blackPackPage.verifyMainMenuVisible()

    // Verify that the Accessories tab is visible in the main menu.
    blackPackPage.verifyMainMenuTabVisible('Accessories')

    // Verify that the Accessories tab has the correct link.
    blackPackPage.verifyMainMenuTabClickable('Accessories', 'https://blackpack.ua/en/shop/accessories/')

    // Click the Accessories tab.
    blackPackPage.clickMainMenuTab('Accessories')

    // Verify that the user landed on the Accessories page.
    blackPackPage.verifyCurrentUrl('https://blackpack.ua/en/shop/accessories/')
  })

  it('shows and opens the New Products menu tab', () => {
    // Open the Black Pack home page.
    blackPackPage.openHomePage()

    // Verify that the main menu container is visible.
    blackPackPage.verifyMainMenuVisible()

    // Verify that the New Products tab is visible in the main menu.
    blackPackPage.verifyMainMenuTabVisible('New products')

    // Verify that the New Products tab has the correct link.
    blackPackPage.verifyMainMenuTabClickable('New products', 'https://blackpack.ua/en/shop/new/')

    // Click the New Products tab.
    blackPackPage.clickMainMenuTab('New products')

    // Verify that the user landed on the New Products page.
    blackPackPage.verifyCurrentUrl('https://blackpack.ua/en/shop/new/')
  })

  it('shows and opens the Discounts menu tab', () => {
    // Open the Black Pack home page.
    blackPackPage.openHomePage()

    // Verify that the main menu container is visible.
    blackPackPage.verifyMainMenuVisible()

    // Verify that the Discounts tab is visible in the main menu.
    blackPackPage.verifyMainMenuTabVisible('Discounts')

    // Verify that the Discounts tab has the correct link.
    blackPackPage.verifyMainMenuTabClickable('Discounts', 'https://blackpack.ua/en/shop/sale/')

    // Click the Discounts tab.
    blackPackPage.clickMainMenuTab('Discounts')

    // Verify that the user landed on the Discounts page.
    blackPackPage.verifyCurrentUrl('https://blackpack.ua/en/shop/sale/')
  })

  it('shows and opens the Blog menu tab', () => {
    // Open the Black Pack home page.
    blackPackPage.openHomePage()

    // Verify that the main menu container is visible.
    blackPackPage.verifyMainMenuVisible()

    // Verify that the Blog tab is visible in the main menu.
    blackPackPage.verifyMainMenuTabVisible('Blog')

    // Verify that the Blog tab has the correct link.
    blackPackPage.verifyMainMenuTabClickable('Blog', 'https://blackpack.ua/en/blog/')

    // Click the Blog tab.
    blackPackPage.clickMainMenuTab('Blog')

    // Verify that the user landed on the Blog page.
    blackPackPage.verifyCurrentUrl('https://blackpack.ua/en/blog/')
  })
})
