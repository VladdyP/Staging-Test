/// <reference types="cypress" />

const applePage = require('../support/pageObjects/applePage')

describe('Apple iPhone 17 Pro Buy Test', () => {
  it('opens iPhone 17 Pro Max, selects Silver storage, and chooses no trade-in', () => {
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
