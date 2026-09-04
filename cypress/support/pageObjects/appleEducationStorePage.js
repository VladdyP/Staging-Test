class AppleEducationStorePage {
  open() {
    cy.log('Open Apple Education Store')
    cy.visit('https://www.apple.com/us-edu/store')
  }

  verifyTitleIsVisible() {
    cy.log('Verify the Education Store title is visible')
    cy.get('h1')
      .should('have.length', 1)
      .and('be.visible')
      .and(($title) => {
        const normalizedTitle = $title.text().replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim()

        expect(normalizedTitle).to.eq('Education Store')
      })
  }
}

module.exports = new AppleEducationStorePage()
