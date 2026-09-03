/// <reference types="cypress" />

const applePage = require('../../support/pageObjects/applePage')

const globalNavigationTabs = [
  {
    label: 'Store',
    itemName: 'store',
    href: '/us/shop/goto/store',
    destinationUrl: 'https://www.apple.com/store'
  },
  {
    label: 'Mac',
    itemName: 'mac',
    href: '/mac/',
    destinationUrl: 'https://www.apple.com/mac/'
  },
  {
    label: 'iPad',
    itemName: 'ipad',
    href: '/ipad/',
    destinationUrl: 'https://www.apple.com/ipad/'
  },
  {
    label: 'iPhone',
    itemName: 'iphone',
    href: '/iphone/',
    destinationUrl: 'https://www.apple.com/iphone/'
  },
  {
    label: 'Watch',
    itemName: 'watch',
    href: '/watch/',
    destinationUrl: 'https://www.apple.com/watch/'
  },
  {
    label: 'Vision',
    itemName: 'vision',
    href: '/apple-vision-pro/',
    destinationUrl: 'https://www.apple.com/apple-vision-pro/'
  },
  {
    label: 'AirPods',
    itemName: 'airpods',
    href: '/airpods/',
    destinationUrl: 'https://www.apple.com/airpods/'
  },
  {
    label: 'TV & Home',
    itemName: 'tv-home',
    href: '/tv-home/',
    destinationUrl: 'https://www.apple.com/tv-home/'
  },
  {
    label: 'Entertainment',
    itemName: 'entertainment',
    href: '/entertainment/',
    destinationUrl: 'https://www.apple.com/services/'
  },
  {
    label: 'Accessories',
    itemName: 'accessories',
    href: '/us/shop/goto/buy_accessories',
    destinationUrl: 'https://www.apple.com/shop/accessories/all',
    expectedTitle: 'Accessories'
  },
  {
    label: 'Support',
    itemName: 'support',
    href: 'https://support.apple.com/?cid=gn-ols-home-hp-tab',
    destinationUrl: 'https://support.apple.com/?cid=gn-ols-home-hp-tab',
    isExternal: true
  }
]

describe('Apple Global Navigation Tests', () => {
  beforeEach(() => {
    // Start every navigation test from a clean Apple home page.
    applePage.openHomePage()
  })

  globalNavigationTabs.forEach(({ label, itemName, href, destinationUrl, expectedTitle, isExternal }) => {
    const testTitle = isExternal
      ? `clicks the ${label} menu tab and verifies its expected external URL`
      : expectedTitle
        ? `opens the ${label} destination and verifies its page title`
        : `opens the ${label} destination from its visible and interactive menu tab`

    it(testTitle, () => {
      // Verify the menu tab is visible, enabled, and points to the expected link.
      applePage.verifyGlobalNavigationTabIsInteractive(itemName, href)

      if (isExternal) {
        // Click the external tab, verify its exact destination, and confirm the endpoint is live.
        applePage.clickExternalGlobalNavigationTabAndVerifyDestination(itemName, destinationUrl)
        applePage.verifyExternalGlobalNavigationDestinationIsAvailable(destinationUrl)
      } else {
        // Use a normal user click and verify the final destination after redirects.
        applePage.clickGlobalNavigationTab(itemName)
        applePage.verifyGlobalNavigationDestination(destinationUrl)

        if (expectedTitle) {
          applePage.verifyPageTitleIncludes(expectedTitle)
        }
      }
    })
  })
})
