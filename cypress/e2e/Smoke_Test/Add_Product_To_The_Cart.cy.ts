describe('Adding a Product to the Cart', () => {
    let productName = 'iPhone'

    beforeEach(() => {
        // Navigate to the homepage
        cy.visit('')

        // Search for the product
        cy.findAllByPlaceholderText('Пошук')
            .type(productName)

        // Click the search button
        cy.findAllByRole('button').eq(0).click()
    });

    it('adds a product to the cart and verifies', () => {
        // Open the product details page
        cy.get('.product-thumb a')
            .first().click()

        // Add the product to the cart
        cy.findByRole('button', { name: /В кошик/i })
            .click().wait(1000)

        // Verify the success message
        cy.get('.alert.alert-success').should('contain', `Ви додали ${productName} до Вашого кошика!`)

        // Open the cart dropdown and verify the product is displayed
        cy.findAllByRole('button').eq(1).click()
        cy.get('.text-left > a')
        .should('contain.text', productName)
    });
});
