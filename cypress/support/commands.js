const cypress = require("cypress");

Cypress.Commands.add('login', (username, password) => {

    cy.session([username,password], () => {

        cy.visit('/cupertino')
        cy.wait(2000)
        cy.get('[id="userName"]').type(username)
        cy.get("button#onetrust-accept-btn-handler").should('be.visible').click()
        cy.get('.MuiButtonBase-root').should('have.text','Continue').click()
        cy.wait(1000)
        cy.get('[id="password"]').type(password)
        cy.get('[type="submit"]').click()
        cy.get("[data-testid='done']").click()

    })
}),

Cypress.Commands.add('getByTestId', (testId) => {
    return cy.get(`[data-testid=${testId}]`)
});

