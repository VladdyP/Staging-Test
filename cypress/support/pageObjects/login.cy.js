class loginpage {

    open() {
        cy.visit('/cupertino')
    }

    get username() {
        return cy.get('#userName')
    }

    get password() {
        return cy.get('#password')
    }

    get continuebtn() {
        return cy.get('.MuiButtonBase-root')
    }

    get loginbtn() {
        return cy.get('[type="submit"]')
    }

    get allcookies() {
        return cy.get("#onetrust-accept-btn-handler") // Accept all cookies
    }
}

export default new loginpage()