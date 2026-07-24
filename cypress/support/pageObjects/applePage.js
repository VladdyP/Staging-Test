class ApplePage {
  openHomePage() {
    cy.log('Open Apple home page')
    cy.visit('https://www.apple.com/')
  }

  verifyTopNavigationVisible() {
    cy.get('#globalnav').should('be.visible')
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

  clickIphone17ProProduct() {
    cy.log('Click iPhone 17 Pro on the iPhone page')
    cy.get('a[href="/iphone-17-pro/"]')
      .first()
      .click({ force: true })
  }

  verifyIphone17ProProductPage() {
    cy.location('pathname', { timeout: 20000 }).should('eq', '/iphone-17-pro/')
    cy.contains('body', 'iPhone 17 Pro').should('be.visible')
  }

  clickBuyButton() {
    cy.log('Click the Buy button for iPhone 17 Pro')
    cy.get('a[aria-label="Buy, iPhone 17 Pro"]')
      .first()
      .click({ force: true })
  }

  verifyBuyPage() {
    cy.location('pathname', { timeout: 30000 }).should('include', '/shop/buy-iphone/iphone-17-pro')
  }

  verifyIphone17ProStartingPrice() {
    cy.log('Check that iPhone 17 Pro starts at $1099')
    cy.contains('.form-selector-label', /iPhone 17 Pro\s+6\.3-inch display[\s\S]*From \$1099/)
      .should('be.visible')
  }

  verifyIphone17ProMaxStartingPrice() {
    cy.log('Check that iPhone 17 Pro Max starts at $1199')
    cy.contains('.form-selector-label', /iPhone 17 Pro Max\s+6\.9-inch display[\s\S]*From \$1199/)
      .should('be.visible')
  }

  selectIphone17ProMax() {
    cy.log('Select iPhone 17 Pro Max')
    cy.get('[data-autom="dimensionScreensize6_9inch"]')
      .click({ force: true })
      .should('be.checked')
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
      .click({ force: true })
      .should('be.checked')
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
      .click({ force: true })
      .should('be.checked')
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
    cy.get('[data-autom="choose-noTradeIn"]')
      .click({ force: true })
      .should('be.checked')
  }

  verifyNoTradeInVisible() {
    cy.contains('label', /No trade-in/i).should('be.visible')
  }
}

module.exports = new ApplePage()
