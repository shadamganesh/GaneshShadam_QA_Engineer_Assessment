import RegistrationPage from '../support/pageObjects/registrationPage';
import LoginPage from '../support/pageObjects/loginPage';
import SearchPage from '../support/pageObjects/searchPage';
import CartPage from '../support/pageObjects/cartPage';
import CheckoutPage from '../support/pageObjects/checkoutPage';

describe('Demo Web Shop Functionalities', () => {
    const registrationPage = new RegistrationPage();
    const loginPage = new LoginPage();
    const searchPage = new SearchPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();

    let userData;

    before(() => {
        // Load the data from the JSON file
       
        
    });

    beforeEach("Visit the url" , ()=>{
        cy.fixture('userData').then((data) => {
            userData = data;
            cy.visit('http://demowebshop.tricentis.com/');
            cy.loginUser(userData.user.email, userData.user.password);
        });

        
    })

    afterEach("Saving the session", ()=>{
        cy.saveLocalStorage();
    })
    
    it.skip('Should register a new user', () => {
        registrationPage.visit();
        registrationPage.fillFirstName(userData.user.firstName);
        registrationPage.fillLastName(userData.user.lastName);
        registrationPage.fillEmail(userData.user.email);
        registrationPage.fillPassword(userData.user.password);
        registrationPage.fillConfirmPassword(userData.user.confirmPassword);
        registrationPage.submit();
        cy.url().should('include', '/registerresult');
        cy.get('.result').should('contain', 'Your registration completed');
    });

    it.skip('Should login the registered user', () => {
        loginPage.visit();
        loginPage.fillEmail(userData.user.email);
        loginPage.fillPassword(userData.user.password);
        loginPage.submit();
        cy.get('.account').should('contain', userData.user.email);
    });

    it('Should search for a product', () => {
        searchPage.searchProduct(userData.product);
        cy.get('.product-item').should('have.length.greaterThan', 0);
    });

    it('Should add a product to the cart', () => {
        searchPage.selectFirstProduct();
        cartPage.addToCart();
        cy.get('.cart-qty').should('contain', '1');
    });

    it('Should proceed to checkout', () => {
        cartPage.proceedToCheckout();
        cy.url().should('include', '/checkout');
    });

    it('Should fill in the billing address and proceed to shipping', () => {
        checkoutPage.fillBillingAddress(userData.billingAddress);
        cy.url().should('include', '/shippingoption');
    });

    it('Should select shipping method and proceed', () => {
        checkoutPage.proceedToShipping();
        cy.url().should('include', '/paymentmethod');
    });

    it('Should select payment method and proceed', () => {
        checkoutPage.proceedToShipping();
        cy.url().should('include', '/paymentinfo');
    });

    it('Should accept the terms of service and confirm the order', () => {
        checkoutPage.acceptTermsAndCheckout();
        cy.url().should('include', '/orderconfirmation');
        cy.get('.title').should('contain', 'Thank you');
    });

    it('Should logout the user', () => {
        cy.get('.ico-logout').click();
        cy.get('.ico-login').should('be.visible');
    });
});
