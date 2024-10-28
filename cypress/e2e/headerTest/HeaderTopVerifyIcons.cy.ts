//import homePageSelectors from "../../fixtures/verifyHomepageLoadsSelectors.json";

describe('Verify Header top icons', () => {

    // Before the test begins, navigate to the homepage
    beforeEach(() => {
        cy.visit('')
    })

    it('Verify Header Top Icons', () => {

        // Verify Header Top section
        cy.get('#top')
            .should('exist')
            .and('be.visible')

        //Verify phone icon
        cy.get(':nth-child(1) > a > .fa')
            .should('exist')
            .should('be.visible')
            .and('not.be.disabled')

        //Verify account icon
        cy.get('.list-inline > .dropdown > .dropdown-toggle')
            .should('exist')
            .should('be.visible')
            .and('not.be.disabled')

        // Verify like icon
        cy.get('.list-inline > :nth-child(3)')
            .should('exist')
            .should('be.visible')
            .and('not.be.disabled')

        // Verify basket icon
        cy.get('.list-inline > :nth-child(4) > a')
            .should('exist')
            .should('be.visible')
            .and('not.be.disabled')

        // Verify checkout icon
        cy.get('.list-inline > :nth-child(4) > a')
            .should('exist')
            .should('be.visible')
            .and('not.be.disabled')
    })
})