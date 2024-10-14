import homePageSelectors from '../../fixtures/Verify_Homepage_Loads.json'
describe('Verify Homepage Loads Successfully', () => {

    // Before the test begins, navigate to the homepage
    beforeEach(() => {
        cy.visit('')
    })

    it('Verify that key element is visible at the top of the page', () => {

        // Verify key element in products section
        cy.get(homePageSelectors.productSection)
            .should('exist')
            .and('be.visible')

        //Verify logo
        cy.findAllByAltText('Демо магазин OpenCart')
            .should('exist')
            .should('be.visible')

        //Verify navigation bar
        cy.get(homePageSelectors.navbar)
            .should('exist')
            .and('be.visible')

        // Verify that the search bar is visible
        cy.findAllByPlaceholderText('Пошук')
            .should('be.visible')

        // Verify that the top slider is visible
        cy.get(homePageSelectors.topSlider).should('exist').should('be.visible')

    })

    it('Verify that the products section key element is present', () =>{

        // Verify that products section title is visible
        cy.findAllByText('Рекомендовані')
            .should('exist')
            .and('be.visible')

        // Verify that products carts is visible
        cy.get(homePageSelectors.productSectionItem)
            .should('exist')


        // Verify that the bottom slider is visible
        cy.get(homePageSelectors.bottomSlider, { timeout: 10000 })
            .should('exist')
            .should('be.visible')

        // Verify that the footer is visible
        cy.get(homePageSelectors.footer)
            .should('exist')
            .should('be.visible')

    })
    it('')
})