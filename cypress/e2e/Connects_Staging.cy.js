/// <reference types="cypress" />

import loginpage from "/cypress/support/pageObjects/login.cy.js"

describe('Login Page test', () => {

  beforeEach(() => {
    loginpage.open()
    cy.wait(2000)
  })
  
  it('Test 01', () => {
    loginpage.username.type('Chris')
    loginpage.allcookies.click()
    loginpage.continuebtn.should('have.text','Continue').click()
    loginpage.password.type('Welcome1!')
    loginpage.loginbtn.click()
    cy.get("[data-testid='CloseIcon']").click()
  }),

  it('Test 02', () => {
    loginpage.allcookies.click()
    loginpage.username.type('Chris')
    loginpage.continuebtn.should('have.text','Continue').click()
    loginpage.password.type('Welcome1!')
    loginpage.loginbtn.click()
    cy.get("[data-testid='CloseIcon']").click()
  }),

  it('Test 03', () => {

    cy.get('#userName').type('Chris')
    cy.get('.MuiButtonBase-root').should('have.text','Continue').click()
    cy.get('#password').type('Welcome1!')
    cy.get('[type="submit"]').click()
  }),

  it('Test 04', () => {

    cy.get('#userName').type('Chris')
    cy.get('.MuiButtonBase-root').should('have.text','Continue').click()
    cy.get('#password').type('Welcome1!')
    cy.get('[type="submit"]').click()
  
  })
})