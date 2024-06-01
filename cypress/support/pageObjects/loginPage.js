class LoginPage {
    visit() {
        cy.visit('http://demowebshop.tricentis.com/login');
    }

    fillEmail(email) {
        cy.get('input#Email').type(email);
    }

    fillPassword(password) {
        cy.get('input#Password').type(password);
    }

    submit() {
        cy.get('input[value="Log in"]').click();
    }
}

export default LoginPage;
