const { describe } = require("mocha");

const productcount = 5;

if(productcount > 0) {
    cy.get('[data-testid="product-card"]').should('be.visible');
} 


const expectedTitle = 'Orders';
const actualTitle = 'Home' 

cy.get('[data-testid="Orders"]').should(contains.expectedTitle)



const productCount = 5;

if(productCount <5) {
    cy.get('[data-testid="card"]').should(be.visible)
}


const userName = "fsfsdfln@ksdf.com";

cy.get('[data-testid="openbutten"]').should(be.visible).clear().type(expectedTitle)


///

function login(email, password) {
    cy.visit('/login');
  
    cy.get('[data-testid="email-input"]')
      .should('be.visible')
      .clear()
      .type(email);
  
    cy.get('[data-testid="password-input"]')
      .should('be.visible')
      .clear()
      .type(password);
  
    cy.get('[data-testid="login-button"]')
      .should('be.visible')
      .click();
  }
  
  function logout() {
    cy.get('[data-testid="user-menu"]')
      .should('be.visible')
      .click();
  
    cy.get('[data-testid="logout-button"]')
      .should('be.visible')
      .click();
  }
  
  describe('Orders', () => {
    it('user can open orders page and logout', () => {
      login('user@test.com', 'User123');
  
      cy.get('[data-testid="orders-menu"]')
        .should('be.visible')
        .click();
  
      cy.get('[data-testid="orders-page-title"]')
        .should('contain', 'My Orders');
  
      logout();
    });
  });


function login(email,password) {
    cy.visit("/login");
    cy.get('[data-testid="userNamefield"]').should('be.visible').clear().type(email);
    cy.get('[data-testid="userpasswordfield"]').should('be.visible').clear().type(password);
    cy.get('[data-testid="loginbutton"]').click()

}

function loginout() {
    cy.get('[data-testid="loginOutbutton"]').click()
}

describe('Login-logout test', () => {

    it('testing login page', () => {
        login('vova_user_name', "koook123");
        loginout()
    })

})


describe('Verify the userRole', () => {
 it('if/else test user Role', () => {
  const userRole = 'admin';
  if (userRole === 'admin'){
    cy.get('[data-testid="admin-dashboard"]')
  .should('be.visible');
  }
  else {cy.get('[data-testid="user-dashboard"]')
  .should('be.visible')}
 })
})


describe('User Role Dashboard', () => {
  it('shows correct dashboard based on user role', () => {
    const userRole = 'manager';
    if(userRole === 'admin'){
      cy.get('[data-testid="admin-dashboard"]')
  .should('be.visible')
    } 
    else if(userRole === 'manager'){
      cy.get('[data-testid="manager-dashboard"]')
  .should('be.visible');
    }
    else {cy.get('[data-testid="user-dashboard"]')
    .should('be.visible')
  }
  
  });
});


const userRole = 'manager';
const isUserActive = true;

if ((userRole === 'manager' || userRole === 'admin') && isUserActive ) {

}





if ((userRole === 'manager' || userRole === 'admin') && isUserActive) {

}


const isUserActive = false;

if (isUserActive) {
  cy.get('[data-testid="inactive-message"]')
  .should('be.visible')
} else {
  cy.get('[data-testid="dashboard"]')
  .should('be.visible');
}






describe('Checkout Access', () => {
  it('allows checkout only when cart has items, user is logged in, and payment is not expired', () => {
    const cartItems = 2;
    const isLoggedIn = true;
    const isPaymentExpired = false;

    if (cartItems > 0 && isLoggedIn && !isPaymentExpired) {
      cy.get('[data-testid="checkout-button"]')
        .should('be.visible');
    }
    else {
      cy.get('[data-testid="checkout-blocked-message"]')
        .should('be.visible')
    }
  });
});


