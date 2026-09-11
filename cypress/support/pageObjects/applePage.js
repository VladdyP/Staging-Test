class ApplePage {
  openHomePage() {
    cy.log('Open Apple home page')
    cy.visit('https://www.apple.com/')
  }

  openMacMiniPage() {
    cy.log('Open Apple Mac mini page')
    cy.visit('https://www.apple.com/mac-mini/')
  }

  verifyTopNavigationVisible() {
    cy.get('#globalnav').should('be.visible')
  }

  getGlobalNavigationTab(itemName) {
    return cy.get('.globalnav-menu-list')
      .find(`a[data-globalnav-item-name="${itemName}"]`)
      .should('have.length', 1)
  }

  verifyGlobalNavigationTabIsInteractive(itemName, expectedHref) {
    cy.log(`Verify ${itemName} global navigation tab is interactive`)
    this.getGlobalNavigationTab(itemName)
      .should('be.visible')
      .and(($tab) => {
        expect($tab).to.have.attr('href', expectedHref)
        expect($tab).not.to.have.attr('disabled')
        expect($tab).not.to.have.attr('aria-disabled', 'true')
      })
  }

  clickGlobalNavigationTab(itemName) {
    cy.log(`Click ${itemName} global navigation tab`)
    this.getGlobalNavigationTab(itemName)
      .should('be.visible')
      .click()
  }

  verifyGlobalNavigationDestination(expectedUrl) {
    cy.url({ timeout: 30000 }).should('eq', expectedUrl)
  }

  verifyPageTitleIncludes(expectedTitle) {
    cy.log(`Verify page title includes ${expectedTitle}`)
    cy.title().should('include', expectedTitle)
  }

  clickExternalGlobalNavigationTabAndVerifyDestination(itemName, expectedUrl) {
    let clickedUrl

    cy.log(`Click ${itemName} external global navigation tab`)
    this.getGlobalNavigationTab(itemName)
      .should('be.visible')
      .then(($tab) => {
        $tab.one('click', (event) => {
          event.preventDefault()
          clickedUrl = event.currentTarget.href
        })
      })
      .click()
      .then(() => {
        expect(clickedUrl).to.eq(expectedUrl)
      })
  }

  verifyExternalGlobalNavigationDestinationIsAvailable(expectedUrl) {
    cy.log(`Verify external global navigation destination responds: ${expectedUrl}`)
    cy.request(expectedUrl)
      .its('status')
      .should('eq', 200)
  }

  getMacMiniHomePageTile() {
    return cy.get('[data-tile-id="mac-mini-m6-m5-pro"]')
      .should('be.visible')
  }

  verifyMacMiniHomePageTile() {
    const expectedHeadline = 'Mac mini'
    const expectedSubhead = 'Now with M6 and M5 Pro.'
    const expectedCallout = 'Available starting 9.22'

    cy.log('Verify the Mac mini home page tile')
    this.getMacMiniHomePageTile()
      .within(() => {
        cy.get('.tile-headline')
          .should('be.visible')
          .and('have.text', expectedHeadline)

        cy.get('.tile-subhead')
          .should('be.visible')
          .and('have.text', expectedSubhead)

        cy.get('.tile-callout')
          .should('be.visible')
          .and('have.text', expectedCallout)

        cy.contains('.tile-ctas a', /^Learn more$/)
          .should('be.visible')
          .should(($link) => {
            expect($link).to.have.attr('href', '/mac-mini/')
            expect($link).not.to.have.attr('aria-disabled', 'true')
          })

        cy.contains('.tile-ctas a', /^Pre-order$/)
          .should('be.visible')
          .should(($link) => {
            expect($link).to.have.attr('href', '/us/shop/goto/buy_mac/mac_mini')
            expect($link).not.to.have.attr('aria-disabled', 'true')
          })
      })
  }

  clickMacMiniLearnMore() {
    cy.log('Click Learn more in the Mac mini home page tile')
    this.getMacMiniHomePageTile()
      .within(() => {
        cy.contains('.tile-ctas a', /^Learn more$/)
          .should('be.visible')
          .click()
      })
  }

  verifyMacMiniPage() {
    cy.url({ timeout: 20000 }).should('eq', 'https://www.apple.com/mac-mini/')

    cy.get('.section-welcome .welcome-headline')
      .should('be.visible')
      .and(($title) => {
        const normalizedTitleText = $title.text().replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim()

        expect(normalizedTitleText).to.eq('Little do-it-all.')
      })
  }

  verifyMacMiniChipLineup() {
    const expectedChipLineup = 'Mac mini now with M6 and M5 Pro.'

    cy.log('Verify the Mac mini chip lineup')
    cy.get('.section-welcome .welcome-subhead')
      .should('be.visible')
      .and(($subhead) => {
        const normalizedSubheadText = $subhead.text().replace(/\u00a0/g, ' ')

        expect(normalizedSubheadText).to.eq(expectedChipLineup)
      })
  }

  clickMacMiniPreOrder() {
    cy.log('Click Pre-order in the Mac mini home page tile')
    this.getMacMiniHomePageTile()
      .within(() => {
        cy.contains('.tile-ctas a', /^Pre-order$/)
          .should('be.visible')
          .click()
      })
  }

  verifyMacMiniPreOrderPage() {
    cy.url({ timeout: 20000 }).should('eq', 'https://www.apple.com/shop/buy-mac/mac-mini')

    cy.get('h1')
      .should('be.visible')
      .and(($title) => {
        const normalizedTitleText = $title.text().replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim()

        expect(normalizedTitleText).to.eq('Pre-order Mac mini')
      })
  }

  clickStoreTab() {
    cy.log('Click Store tab')
    cy.get('#globalnav a[href="/us/shop/goto/store"]')
      .first()
      .should('be.visible')
      .click()
  }

  clickMacTab() {
    cy.log('Click Mac tab')
    cy.get('#globalnav a[href="/mac/"]')
      .first()
      .should('be.visible')
      .click()
  }

  clickIpadTab() {
    cy.log('Click iPad tab')
    cy.get('#globalnav a[href="/ipad/"]')
      .first()
      .should('be.visible')
      .click()
  }

  clickIphoneTab() {
    cy.log('Click the iPhone tab in the top menu')
    cy.get('#globalnav a[href="/iphone/"]')
      .first()
      .should('be.visible')
      .click()
  }

  clickWatchTab() {
    cy.log('Click Watch tab')
    cy.get('#globalnav a[href="/watch/"]')
      .first()
      .should('be.visible')
      .click()
  }

  clickEntertainmentTab() {
    cy.log('Click Entertainment tab')
    cy.contains('#globalnav a', 'Entertainment')
      .should('be.visible')
      .click()
  }

  verifySearchWindowHidden() {
    cy.get('#globalnav-submenu-search')
      .should('not.be.visible')
  }

  clickSearchIcon() {
    cy.log('Click the search icon')
    cy.get('#globalnav-menubutton-link-search')
      .should('be.visible')
      .click()
  }

  verifySearchWindowVisible() {
    cy.get('#globalnav-submenu-search')
      .should('be.visible')

    cy.get('#globalnav-searchfield-src')
      .should('exist')

    cy.get('.globalnav-searchfield-input')
      .should('be.visible')
  }

  enterSearchValue(searchValue) {
    cy.log(`Search for ${searchValue}`)
    cy.get('.globalnav-searchfield-input')
      .should('be.visible')
      .clear()
      .type(searchValue)
  }

  verifySuggestedSearchLinkVisible(searchValue) {
    cy.get('.globalnav-searchresults')
      .should('be.visible')

    cy.contains('.globalnav-searchresults a', searchValue)
      .should('be.visible')
  }

  verifyStorePage() {
    cy.location('pathname', { timeout: 20000 }).should('eq', '/store')
    cy.contains('body', 'Store').should('be.visible')
  }

  verifyStorePageUrl() {
    cy.url({ timeout: 20000 }).should('eq', 'https://www.apple.com/store')
  }

  verifyStorePageTitle() {
    cy.title().should('include', 'Store')
  }

  verifyMacPage() {
    cy.location('pathname', { timeout: 20000 }).should('eq', '/mac/')
    cy.contains('body', 'Mac').should('be.visible')
  }

  verifyIpadPage() {
    cy.location('pathname', { timeout: 20000 }).should('eq', '/ipad/')
    cy.contains('body', 'iPad').should('be.visible')
  }

  verifyIphonePage() {
    cy.location('pathname', { timeout: 20000 }).should('eq', '/iphone/')
    cy.contains('body', 'iPhone').should('be.visible')
  }

  verifyIphonePageTitle() {
    cy.title().should('include', 'iPhone')
  }

  verifyWatchPage() {
    cy.location('pathname', { timeout: 20000 }).should('eq', '/watch/')
    cy.contains('body', 'Apple Watch').should('be.visible')
  }

  verifyWatchPageTitle() {
    cy.title().should('include', 'Apple Watch')
  }

  verifyServicesPage() {
    cy.url({ timeout: 20000 }).should('eq', 'https://www.apple.com/services/')
  }

  verifyEntertainmentPageTitle() {
    cy.contains('body', 'Meet the A-list of entertainment.')
      .should('be.visible')
  }

  clickAppleArcadeChapterNav() {
    cy.log('Click Apple Arcade in the chapter navigation')
    cy.get('.chapternav-items')
      .should('be.visible')
      .within(() => {
        cy.contains('a', 'Apple Arcade')
          .should('be.visible')
          .click()
      })
  }

  verifyAppleArcadePage() {
    cy.url({ timeout: 20000 }).should('eq', 'https://www.apple.com/apple-arcade/')
  }

  clickIphone18ProProduct() {
    cy.log('Click iPhone 18 Pro on the iPhone page')
    cy.get('a[href="/iphone-18-pro/"]')
      .filter(':visible')
      .first()
      .should('be.visible')
      .click()
  }

  verifyIphone18ProProductPage() {
    cy.location('pathname', { timeout: 20000 }).should('eq', '/iphone-18-pro/')
    cy.contains('body', 'iPhone 18 Pro').should('be.visible')
  }

  clickIphone18ProPricing() {
    cy.log('Open pricing for iPhone 18 Pro')
    cy.get('a[href="/us/shop/goto/buy_iphone/iphone_18_pro"]')
      .filter(':visible')
      .first()
      .should('be.visible')
      .click()
  }

  verifyIphone18ProBuyPage() {
    cy.location('pathname', { timeout: 30000 }).should('include', '/shop/buy-iphone/iphone-18-pro')
  }

  verifyIphone18ProStartingPrice() {
    cy.log('Check that iPhone 18 Pro starts at $1199')
    cy.contains('.form-selector-label', /iPhone 18 Pro[\s\S]*6\.3-inch display[\s\S]*(buy\s+)?from\s+\$1199/i)
      .should('be.visible')
  }

  verifyIphone18ProMaxStartingPrice() {
    cy.log('Check that iPhone 18 Pro Max starts at $1299')
    cy.contains('.form-selector-label', /iPhone 18 Pro Max[\s\S]*6\.9-inch display[\s\S]*(buy\s+)?from\s+\$1299/i)
      .should('be.visible')
  }

  selectIphone18ProMax() {
    cy.log('Select iPhone 18 Pro Max')
    cy.get('[data-autom="dimensionScreensize6_9inch"]')
      .invoke('attr', 'id')
      .then((inputId) => {
        cy.get(`label[for="${inputId}"]`)
          .should('be.visible')
          .click()
      })
    cy.get('[data-autom="dimensionScreensize6_9inch"]').should('be.checked')
  }

  verifyStorageOptionsDisabled() {
    cy.log('Check storage is disabled before selecting color')
    cy.get('[data-autom="dimensionCapacity256gb"]').should('be.disabled')
    cy.get('[data-autom="dimensionCapacity512gb"]').should('be.disabled')
    cy.get('[data-autom="dimensionCapacity1tb"]').should('be.disabled')
    cy.get('[data-autom="dimensionCapacity2tb"]').should('be.disabled')
  }

  selectSilverColor() {
    cy.log('Select Silver color')
    cy.get('[data-autom="dimensionColorsilver"]')
      .invoke('attr', 'id')
      .then((inputId) => {
        cy.get(`label[for="${inputId}"]`)
          .should('be.visible')
          .click()
      })
    cy.get('[data-autom="dimensionColorsilver"]').should('be.checked')
  }

  verifySilverColorVisible() {
    cy.contains('label', /^Silver$/).should('be.visible')
  }

  verifyStorageOptionsEnabled() {
    cy.log('Check storage is enabled after selecting Silver')
    cy.get('[data-autom="dimensionCapacity256gb"]').should('not.be.disabled')
    cy.get('[data-autom="dimensionCapacity512gb"]').should('not.be.disabled')
    cy.get('[data-autom="dimensionCapacity1tb"]').should('not.be.disabled')
    cy.get('[data-autom="dimensionCapacity2tb"]').should('not.be.disabled')
  }

  select256gbStorage() {
    cy.log('Select 256GB storage')
    cy.get('[data-autom="dimensionCapacity256gb"]')
      .invoke('attr', 'id')
      .then((inputId) => {
        cy.get(`label[for="${inputId}"]`)
          .should('be.visible')
          .click()
      })
    cy.get('[data-autom="dimensionCapacity256gb"]').should('be.checked')
  }

  verify256gbStorageVisible() {
    cy.contains('label', /256GB/).should('be.visible')
  }

  verifyPaymentOptionsDisabled() {
    cy.log('Check payment options are disabled before trade-in selection')
    cy.get('[data-autom="purchaseGroupOptionfullprice"]').should('be.disabled')
    cy.get('[data-autom="purchaseGroupOptionfinance"]').should('be.disabled')
  }

  selectNoTradeIn() {
    cy.log('Select No Trade-In')
    // Apple's invisible radio overlays the visible card and receives its pointer events.
    cy.get('[data-autom="choose-noTradeIn"]')
      .should('not.be.disabled')
      .click({ force: true })
      .should('be.checked')
  }

  verifyNoTradeInVisible() {
    cy.contains('label', /No trade-in/i).should('be.visible')
  }
}

module.exports = new ApplePage()
