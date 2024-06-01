// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom commands for the project
Cypress.Commands.add('registerUser', (firstName, lastName, email, password, confirmPassword) => {
    cy.get('.ico-register').click();
    cy.get('input#FirstName').type(firstName);
    cy.get('input#LastName').type(lastName);
    cy.get('input#Email').type(email);
    cy.get('input#Password').type(password);
    cy.get('input#ConfirmPassword').type(confirmPassword);
    cy.get('input#register-button').click();
});

Cypress.Commands.add('loginUser', (email, password) => {
    cy.get('.ico-login').click();
    cy.get('input#Email').type(email);
    cy.get('input#Password').type(password);
    cy.get('input[value="Log in"]').click();
});

Cypress.Commands.add('searchProduct', (productName) => {
    cy.get('input[name="q"]').type(`${productName}{enter}`);
});

Cypress.Commands.add('addToCart', () => {
    cy.get('input[value="Add to cart"]').click();
});

Cypress.Commands.add('proceedToCheckout', () => {
    cy.get('.cart-label').click();
    cy.get('button[name="checkout"]').click();
});

Cypress.Commands.add('acceptTermsAndCheckout', () => {
    cy.get('#termsofservice').check();
    cy.get('#checkout').click();
});

