import headerTopIconSelectors from "../../../fixtures/headerTopSelectors.json"

// Array containing each icon's description and selector
const icons = [
    { name: 'Phone icon', selector: headerTopIconSelectors.phoneIcon },
    { name: 'Account icon', selector: headerTopIconSelectors.accountIcon },
    { name: 'Wishlist icon', selector: headerTopIconSelectors.wishlistIcon },
    { name: 'Basket icon', selector: headerTopIconSelectors.basketIcon },
    { name: 'Checkout icon', selector: headerTopIconSelectors.checkoutIcon }
];

describe('Verify Header Top section', () => {

    // Before each test, navigate to the homepage
    beforeEach(() => {
        cy.visit('')
    })

    it('Verify Header Top section is visible', () => {
        // Check that the Header Top section exists and is visible
        cy.get('#top')
            .should('exist')
            .and('be.visible')
    })

    // Parameterized test for each icon in the Header Top section
    icons.forEach(({ name, selector }) => {
        it(`Verify ${name}`, () => {
            // Verify the icon exists, is visible, and is not disabled
            cy.get(selector)
                .should('exist')
                .should('be.visible')
                .and('not.be.disabled')
        })
    })
})
