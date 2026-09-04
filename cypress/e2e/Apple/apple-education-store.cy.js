/// <reference types="cypress" />

const appleEducationStorePage = require('../../support/pageObjects/appleEducationStorePage')

describe('Apple Education Store Tests', () => {
  it('shows the Education Store title when the page opens', () => {
    appleEducationStorePage.open()
    appleEducationStorePage.verifyTitleIsVisible()
  })
})
