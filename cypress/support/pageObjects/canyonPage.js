class CanyonPage {
  getBaseUrl() {
    return Cypress.env('canyonBaseUrl') || 'https://www.canyon.com/en-us/'
  }

  openHomePage() {
    cy.log('Open Canyon home page')
    cy.visit(this.getBaseUrl())
  }

  saveCookiePopupChoice() {
    cy.session(
      'canyon-cookie-popup-accepted',
      () => {
        cy.log('Save Canyon cookie popup choice')
        this.openHomePage()
        this.acceptCookiePopupIfVisible()
        this.verifyCookiePopupClosed()
      },
      {
        validate() {
          cy.getCookies().should('have.length.greaterThan', 0)
        },
        cacheAcrossSpecs: true,
      },
    )
  }

  acceptCookiePopupIfVisible() {
    cy.log('Accept Canyon cookie popup if it appears')
    cy.get('body').then(($body) => {
      const cookieButtonSelectors = [
        '.js-cookiesModal .xlt-modalCookiesBtnAllowAll',
        '.js-cookiesModal .js-saveCookiesChoice',
        '#onetrust-accept-btn-handler',
        'button[data-testid="uc-accept-all-button"]',
        'button[aria-label="Accept all"]',
      ]

      const visibleCookieButton = cookieButtonSelectors.find((selector) => {
        return $body.find(selector).filter(':visible').length > 0
      })

      if (visibleCookieButton) {
        cy.get(visibleCookieButton)
          .first()
          .should('be.visible')
          .click({ force: true })
      } else if ($body.find('.js-cookiesModal').filter(':visible').length > 0) {
        cy.contains('.js-cookiesModal button', /^Allow all$/)
          .should('be.visible')
          .click({ force: true })
      }
    })
  }

  verifyCookiePopupClosed() {
    cy.get('body').should(($body) => {
      expect($body.find('.js-cookiesModal').filter(':visible')).to.have.length(0)
    })
  }

  verifyHomePageUrl() {
    cy.location('origin', { timeout: 20000 }).should('eq', 'https://www.canyon.com')
    cy.location('pathname', { timeout: 20000 }).should('eq', '/en-us/')
  }

  verifyHomePageLoaded() {
    cy.get('body').should('be.visible')
    cy.title().should('not.be.empty')
  }
}

module.exports = new CanyonPage()
