class loginpage {

    open() {
        cy.visit('/cupertino')
    }

    get username() {
        return cy.get('[id="userName"]')
    }

    get password() {
        return cy.get('[id="password"]')
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