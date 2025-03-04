import headerSelectors from '..//..//../fixtures/headerSelectors.json'
describe('Verify header bottom section links', () => {

    // Before the test begins, navigate to the homepage
    beforeEach(() => {
        cy.visit('')
    })

    it('Verify logo links', () => {

        //Verify logo and click
        cy.findAllByAltText('Демо магазин OpenCart')
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        // Assert that the URL includes the expected path
        cy.url().should('include', '/home')
    })

    it('Verify search bar links', () => {

        // Verify that the search bar is visible and clickable
        cy.findAllByPlaceholderText('Пошук')
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')

        // Verify that the search button is visible and clickable
        cy.get(headerSelectors.searchButton)
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        // Assert that the URL includes the expected path
        cy.url().should('include', '/search')
    })



    it('Verify search bar links', () => {

        //Verify that the basket button is visible and clickable
        cy.get(headerSelectors.basketButton)
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()
    })
})