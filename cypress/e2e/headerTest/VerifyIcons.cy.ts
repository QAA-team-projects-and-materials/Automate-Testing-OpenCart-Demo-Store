import headerTopIconSelectors from "../../fixtures/headerTopSelectors.json";

describe('Verify Header Top section', () => {

    // Before the test begins, navigate to the homepage
    beforeEach(() => {
        cy.visit('')
    })

    it('Verify Header Top section', () => {
        // Verify Header Top section
        cy.get('#top')
            .should('exist')
            .and('be.visible')
    })

    it('Verify phone icon', () => {
        //Verify phone icon
        cy.get(headerTopIconSelectors.phoneIcon)
            .should('exist')
            .should('be.visible')
            .and('not.be.disabled')
    })

    it('Verify account icon', () => {
        //Verify account icon
        cy.get(headerTopIconSelectors.accountIcon)
            .should('exist')
            .should('be.visible')
            .and('not.be.disabled')
    })

    it('Verify like icon', () => {
        // Verify like icon
        cy.get(headerTopIconSelectors.likeIcon)
            .should('exist')
            .should('be.visible')
            .and('not.be.disabled')
    })

    it('Verify basket icon', () => {
        // Verify basket icon
        cy.get(headerTopIconSelectors.basketIcon)
            .should('exist')
            .should('be.visible')
            .and('not.be.disabled')
    })

    it('Verify checkout icon', () => {
        // Verify checkout icon
        cy.get(headerTopIconSelectors.checkoutIcon)
            .should('exist')
            .should('be.visible')
            .and('not.be.disabled')
    })
})