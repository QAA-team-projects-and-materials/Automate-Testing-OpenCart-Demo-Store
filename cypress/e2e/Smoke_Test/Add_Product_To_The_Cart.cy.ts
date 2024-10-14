import searchItemSelectors from "../../fixtures/add_Product_To_The_Cart.json"

describe('Adding a Product to the Cart', () => {

    let productName = 'iPhone'

    before(() => {
        // Navigate to the homepage
        cy.visit('')

        // Search for the product
        cy.findAllByPlaceholderText('Пошук')
            .type(productName)

        // Click the search button
        cy.findAllByRole('button').eq(0)
            .click()
    })

    it('Adds a product to the cart and verifies', () => {

        // Open the product details page
        cy.get(searchItemSelectors.productItem)
            .first().click()

        // Add the product to the cart
        cy.findByRole('button', { name: /В кошик/i })
            .click().wait(1000)

        // Verify the success message
        cy.get(searchItemSelectors.successAllert)
            .should('contain', `Ви додали ${productName} до Вашого кошика!`)

        // Open the cart dropdown and verify the product is displayed
        cy.findAllByRole('button').eq(1)
            .click()

        cy.get(searchItemSelectors.shoppingCartItemText)
            .should('contain.text', productName)
    })
})
