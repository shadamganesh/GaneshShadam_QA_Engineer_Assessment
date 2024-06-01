describe('Checkout Process', () => {
    beforeEach(() => {
        cy.visit('http://demowebshop.tricentis.com/');
        cy.searchProduct('Laptop');
        cy.get('.product-item').first().click();
        cy.addToCart();
        cy.acceptTermsAndCheckout()
        cy.proceedToCheckout();
    });

    it('Should proceed to checkout', () => {
        cy.url().should('include', '/checkout');
    });

    it('Should add a billing address', () => {
        cy.get('input#BillingNewAddress_FirstName').type('John');
        cy.get('input#BillingNewAddress_LastName').type('Doe');
        cy.get('input#BillingNewAddress_Email').type('john.doe@example.com');
        cy.get('input#BillingNewAddress_Company').type('Company Inc.');
        cy.get('select#BillingNewAddress_CountryId').select('United States');
        cy.get('input#BillingNewAddress_City').type('New York');
        cy.get('input#BillingNewAddress_Address1').type('123 Main St');
        cy.get('input#BillingNewAddress_ZipPostalCode').type('10001');
        cy.get('input#BillingNewAddress_PhoneNumber').type('1234567890');
        cy.get('button[name="save"]').click();

        cy.url().should('include', '/shippingoption');
    });

    it('Should accept the terms of service and proceed', () => {
        // Fill in billing address
        cy.get('input#BillingNewAddress_FirstName').type('John');
        cy.get('input#BillingNewAddress_LastName').type('Doe');
        cy.get('input#BillingNewAddress_Email').type('john.doe@example.com');
        cy.get('input#BillingNewAddress_Company').type('Company Inc.');
        cy.get('select#BillingNewAddress_CountryId').select('United States');
        cy.get('input#BillingNewAddress_City').type('New York');
        cy.get('input#BillingNewAddress_Address1').type('123 Main St');
        cy.get('input#BillingNewAddress_ZipPostalCode').type('10001');
        cy.get('input#BillingNewAddress_PhoneNumber').type('1234567890');
        cy.get('button[name="save"]').click();

        // Shipping method
        cy.get('button[name="save"]').click();

        // Payment method
        cy.get('button[name="save"]').click();

        // Check the terms of service checkbox
        cy.get('#termsofservice').check();

        // Confirm the order
        cy.get('#checkout').click();

        cy.url().should('include', '/orderconfirmation');
    });
});
