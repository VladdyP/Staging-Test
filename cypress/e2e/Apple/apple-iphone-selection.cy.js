/// <reference types="cypress" />

const applePage = require('../../support/pageObjects/applePage')

describe('Apple iPhone 18 Pro Buy Test', () => {
  it('opens the iPhone page from the iPhone menu button', () => {
    // Open the Apple home page before clicking the iPhone tab.
    applePage.openHomePage()

    // Click the iPhone tab from the top navigation menu.
    applePage.clickIphoneTab()

    // Verify that the user landed on the iPhone page.
    applePage.verifyIphonePage()

    // Verify that the browser page title says iPhone.
    applePage.verifyIphonePageTitle()
  })

  it('opens iPhone 18 Pro Max, selects Silver storage, and chooses no trade-in', () => {
    // Open the Apple home page before starting the test flow.
    applePage.openHomePage()

    // Click the iPhone tab from the top navigation menu.
    applePage.clickIphoneTab()

    // Verify that the user landed on the iPhone page.
    applePage.verifyIphonePage()

    // Open the iPhone 18 Pro product page.
    applePage.clickIphone18ProProduct()

    // Verify that the iPhone 18 Pro page is displayed.
    applePage.verifyIphone18ProProductPage()

    // Open the iPhone 18 Pro pricing page.
    applePage.clickIphone18ProPricing()

    // Verify that the user landed on the buy page.
    applePage.verifyIphone18ProBuyPage()

    // Verify both iPhone 18 Pro options and starting prices.
    applePage.verifyIphone18ProStartingPrice()
    applePage.verifyIphone18ProMaxStartingPrice()

    // Select the iPhone 18 Pro Max size option.
    applePage.selectIphone18ProMax()

    // Verify that storage options are disabled before choosing a color.
    applePage.verifyStorageOptionsDisabled()

    // Select the Silver color option.
    applePage.selectSilverColor()

    // Verify that Silver is selected or visible on the page.
    applePage.verifySilverColorVisible()

    // Verify that storage options become enabled after choosing Silver.
    applePage.verifyStorageOptionsEnabled()

    // Select the 256GB storage option.
    applePage.select256gbStorage()

    // Verify that the 256GB option is displayed on the page.
    applePage.verify256gbStorageVisible()

    // Verify that payment options are disabled before answering Apple Trade In.
    applePage.verifyPaymentOptionsDisabled()

    // Select No Trade-In in the Apple Trade In section.
    applePage.selectNoTradeIn()

    // Verify that the No Trade-In option is displayed on the page.
    applePage.verifyNoTradeInVisible()
  })
})
