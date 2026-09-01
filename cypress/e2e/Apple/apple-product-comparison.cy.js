/// <reference types="cypress" />

const applePage = require('../../support/pageObjects/applePage')
const appleComparisonPage = require('../../support/pageObjects/appleComparisonPage')

const comparedProducts = [
  'MacBook Air 13-in. (M5)',
  'MacBook Air 15-in. (M5)',
  'MacBook Pro 14-in. (M5)'
]

describe('Apple Mac Product Comparison Tests', () => {
  beforeEach(() => {
    appleComparisonPage.useDesktopViewport()
  })

  it('opens the MacBook Air comparison page through the Apple navigation', () => {
    applePage.openHomePage()
    applePage.verifyGlobalNavigationTabIsInteractive('mac', '/mac/')
    applePage.clickGlobalNavigationTab('mac')
    applePage.verifyGlobalNavigationDestination('https://www.apple.com/mac/')

    appleComparisonPage.clickMacBookAirLink()
    appleComparisonPage.verifyMacBookAirPage()
    appleComparisonPage.followCompareLink()
    appleComparisonPage.verifyComparePage()
  })

  it('limits the comparison to three unique products shown side by side', () => {
    appleComparisonPage.openComparePage()
    appleComparisonPage.selectProducts(comparedProducts)

    appleComparisonPage.verifyProductSelectorLimit(3)
    appleComparisonPage.verifySelectedProducts(comparedProducts)
    appleComparisonPage.verifyProductsAreSideBySide(3)
  })

  it('shows the required purchase and hardware details for every compared product', () => {
    appleComparisonPage.openComparePage()
    appleComparisonPage.selectProducts(comparedProducts)

    appleComparisonPage.verifyRequiredComparisonDetails(comparedProducts)
  })
})
