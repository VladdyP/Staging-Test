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

describe('Apple iPhone 17 Pro Buy Test', () => {
  it('opens iPhone 17 Pro and selects iPhone 17 Pro Max in Silver', () => {
    // Open the Apple home page before starting the test flow.
    applePage.openHomePage()

    // Click the iPhone tab from the top navigation menu.
    applePage.clickIphoneTab()

    // Verify that the user landed on the iPhone page.
    applePage.verifyIphonePage()

    // Open the iPhone 17 Pro product page.
    applePage.clickIphone17ProProduct()

    // Verify that the iPhone 17 Pro page is displayed.
    applePage.verifyIphone17ProProductPage()

    // Click the Buy button to open the iPhone 17 Pro purchase page.
    applePage.clickBuyButton()

    // Verify that the user landed on the buy page.
    applePage.verifyBuyPage()

    // Verify both iPhone 17 Pro options and starting prices.
    applePage.verifyIphone17ProStartingPrice()
    applePage.verifyIphone17ProMaxStartingPrice()

    // Select the iPhone 17 Pro Max size option.
    applePage.selectIphone17ProMax()

    // Select the Silver color option.
    applePage.selectSilverColor()

    // Verify that Silver is selected or visible on the page.
    applePage.verifySilverColorVisible()
  })
})
