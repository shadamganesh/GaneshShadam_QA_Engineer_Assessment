import HomePage from '../support/pageObjects/homePage';

const homePage = new HomePage();

describe('Product Browsing and Searching', () => {
    it('Should search for a product', () => {
        homePage.visit();
        homePage.search('Laptop');
        cy.url().should('include', 'search?q=Laptop');
        cy.get('.product-item').should('have.length.greaterThan', 0);
    });


    it('Should add a product to the cart', () => {
        cy.visit('http://demowebshop.tricentis.com/');
        cy.searchProduct('Laptop');
        cy.get('.product-item').first().click();
        cy.addToCart();
        cy.get('.cart-qty').should('contain', '(1)');
    });
});