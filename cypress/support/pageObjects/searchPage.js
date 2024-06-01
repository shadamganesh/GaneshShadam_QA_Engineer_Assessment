class SearchPage {
    searchProduct(productName) {
        cy.get('input[name="q"]').type(`${productName}{enter}`);
    }

    selectFirstProduct() {
        cy.get('.product-item').first().click();
    }
}

export default SearchPage;
