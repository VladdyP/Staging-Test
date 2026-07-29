class BlackPackPage {
  saveEnglishLanguage() {
    cy.session(
      'blackpack-english-language',
      () => {
        cy.log('Save Black Pack English language session')
        cy.visit('/')

        cy.get('a[aria-label="Switch to EN"]', { timeout: 20000 })
          .should('be.visible')
          .click()

        cy.location('pathname', { timeout: 20000 }).should('eq', '/en/')
        cy.getCookie('wp-wpml_current_language').should('have.property', 'value', 'en')
      },
      {
        validate() {
          cy.getCookie('wp-wpml_current_language').should('have.property', 'value', 'en')
        },
        cacheAcrossSpecs: true,
      },
    )
  }

  openHomePage() {
    cy.log('Open Black Pack English home page')
    cy.visit('/')

    cy.location('pathname', { timeout: 20000 }).then((pathname) => {
      if (!/^\/en\/?$/.test(pathname)) {
        cy.get('a[aria-label="Switch to EN"]', { timeout: 20000 })
          .should('be.visible')
          .click()
      }
    })

    this.verifyEnglishLanguageSelected()
  }

  verifyHomePageUrl() {
    cy.url({ timeout: 20000 }).should('match', /^https:\/\/blackpack\.ua\/en\/?$/)
  }

  verifyHomePageLoaded() {
    cy.get('body').should('be.visible')
    cy.title().should('not.be.empty')
  }

  verifyEnglishLanguageSelected() {
    cy.location('pathname', { timeout: 20000 }).should('match', /^\/en\/?$/)
    cy.get('a[aria-label="Switch to UA"]', { timeout: 20000 }).should('be.visible')
  }

  verifyMainMenuVisible() {
    cy.get('#menu-main').should('be.visible')
  }

  verifyMainMenuTabVisible(tabName) {
    cy.contains('#menu-main > li > a.item-link', tabName)
      .should('be.visible')
  }

  verifyMainMenuTabClickable(tabName, expectedUrl) {
    cy.contains('#menu-main > li > a.item-link', tabName)
      .should('be.visible')
      .and('have.attr', 'href', expectedUrl)
  }

  clickMainMenuTab(tabName) {
    cy.log(`Click ${tabName} in the main menu`)
    cy.contains('#menu-main > li > a.item-link', tabName)
      .should('be.visible')
      .click()
  }

  verifyCurrentUrl(expectedUrl) {
    cy.url({ timeout: 20000 }).should('eq', expectedUrl)
  }
}

module.exports = new BlackPackPage()
