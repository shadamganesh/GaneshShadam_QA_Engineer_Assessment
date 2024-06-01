class CartPage {
    addToCart() {
        cy.get('input[value="Add to cart"]').first().click();
    }

    proceedToCheckout() {
        cy.get('.cart-label').first().click();
        cy.get('button[name="checkout"]').click();
    }
}

export default CartPage;
