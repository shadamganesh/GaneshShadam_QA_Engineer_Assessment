class RegistrationPage {
    visit() {
        cy.visit('http://demowebshop.tricentis.com/register');
    }

    fillFirstName(firstName) {
        cy.get('input#FirstName').type(firstName);
    }

    fillLastName(lastName) {
        cy.get('input#LastName').type(lastName);
    }

    fillEmail(email) {
        cy.get('input#Email').type(email);
    }

    fillPassword(password) {
        cy.get('input#Password').type(password);
    }

    fillConfirmPassword(confirmPassword) {
        cy.get('input#ConfirmPassword').type(confirmPassword);
    }

    submit() {
        cy.get('input#register-button').click();
    }
}

export default RegistrationPage;
