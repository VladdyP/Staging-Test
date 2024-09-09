/// <reference types="cypress" />
import loginpage from "/cypress/support/pageObjects/login.cy.js"

describe('Login Page test', () => {

  beforeEach(() => {
    loginpage.open()
    cy.wait(2000)
  })
  it('Test 01', () => {

    cy.get('[id="userName"]').type('Chris')
    cy.get('.MuiButtonBase-root').should('have.text','Continue').click()
    cy.get('[id="password"]').type('Welcome1!')
    cy.get('[type="submit"]').click()
  }),

  it('Test 02', () => {

    cy.get('[id="userName"]').type('Chris')
    cy.get('.MuiButtonBase-root').should('have.text','Continue').click()
    cy.get('[id="password"]').type('Welcome1!')
    cy.get('[type="submit"]').click()
  }),
  it('Test 03', () => {

    cy.get('[id="userName"]').type('Chris')
    cy.get('.MuiButtonBase-root').should('have.text','Continue').click()
    cy.get('[id="password"]').type('Welcome1!')
    cy.get('[type="submit"]').click()
  }),
  it('Test 04', () => {

    cy.get('[id="userName"]').type('Chris')
    cy.get('.MuiButtonBase-root').should('have.text','Continue').click()
    cy.get('[id="password"]').type('Welcome3!')
    cy.get('[type="submit"]').click()
  
  })
})