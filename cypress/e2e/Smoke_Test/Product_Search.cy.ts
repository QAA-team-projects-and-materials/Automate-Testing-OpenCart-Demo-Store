describe('OpenCart Search Functionality', () => {
    const searchTerm = 'MacBook'

    beforeEach(() => {
        // Navigate to the homepage
        cy.visit('')
    })

    it('Test Product Search Functionality', () => {

        // Locate the search bar and type the search term
        cy.findAllByPlaceholderText('Пошук')
            .type(searchTerm)

        // Click the search button
        cy.findAllByRole('button').eq(0)
            .should('exist')
            .should('be.visible')
            .click()

        // Redirecting to the product page
        cy.url().should('include', 'product/')

        // Alternatively, press Enter to submit the search
        //cy.findAllByRole('button').eq(0).type(`${searchTerm}{enter}`);

        // Wait for the search results to load
        cy.get('.product-thumb')
            .should('be.visible')

        // Check if any results are found
        cy.get('.product-thumb')
            .should('have.length.greaterThan', 0)

        // Loop through each product and verify the name matches the search term
        cy.get('.product-thumb').each((el) => {
            const productName = el.find('.caption a').text()
            expect(productName.toLowerCase()).to.include(searchTerm.toLowerCase())
        })
    })
})