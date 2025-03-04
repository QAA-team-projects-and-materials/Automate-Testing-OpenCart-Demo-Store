import headerSelectors from '..//..//../fixtures/headerSelectors.json'
describe('Verify elements of the header bottom', () => {

    // Before the test begins, navigate to the homepage
    beforeEach(() => {
        cy.visit('')
    })

    it('Verify header bottom section element', () => {

        //Verify that logo and clickable
        cy.findAllByAltText('Демо магазин OpenCart')
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')

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

        //Verify that the basket button is visible and clickable
        cy.get(headerSelectors.basketButton)
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
    })
})