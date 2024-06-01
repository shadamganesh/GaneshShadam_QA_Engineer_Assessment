class CheckoutPage {
    fillBillingAddress(address) {
        cy.get('input#BillingNewAddress_FirstName').type(address.firstName);
        cy.get('input#BillingNewAddress_LastName').type(address.lastName);
        cy.get('input#BillingNewAddress_Email').type(address.email);
        cy.get('input#BillingNewAddress_Company').type(address.company);
        cy.get('select#BillingNewAddress_CountryId').select(address.country);
        cy.get('input#BillingNewAddress_City').type(address.city);
        cy.get('input#BillingNewAddress_Address1').type(address.address1);
        cy.get('input#BillingNewAddress_ZipPostalCode').type(address.zipPostalCode);
        cy.get('input#BillingNewAddress_PhoneNumber').type(address.phoneNumber);
        cy.get('button[name="save"]').click();
    }

    proceedToShipping() {
        cy.get('button[name="save"]').click();
    }

    acceptTermsAndCheckout() {
        cy.get('#termsofservice').check();
        cy.get('#checkout').click();
    }
}

export default CheckoutPage;
