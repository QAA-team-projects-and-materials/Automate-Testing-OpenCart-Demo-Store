import headerTopIconSelectors from "../../../fixtures/headerTopSelectors.json";

// Array of test cases for top header links
const testCases = [
    { name: 'Phone link', selector: headerTopIconSelectors.phoneIcon, url: '/contact', breadcrumb: 'Контакти' },
    { name: 'Account - Реєстрація', selector: headerTopIconSelectors.accountIcon, url: '/register', buttonText: 'Реєстрація' },
    { name: 'Account - Вхід', selector: headerTopIconSelectors.accountIcon, url: '/login', buttonText: 'Вхід' },
    { name: 'Wishlist link', selector: headerTopIconSelectors.wishlistIcon, url: '/login', breadcrumb: 'Обліковий запис' },
    { name: 'Basket icon', selector: headerTopIconSelectors.basketIcon, url: 'checkout/cart', breadcrumb: 'Кошик' },
    { name: 'Checkout link', selector: headerTopIconSelectors.checkoutIcon, url: 'checkout/cart', breadcrumb: 'Кошик' }
];

describe('Verify top header links', () => {

    // Before each test, navigate to the homepage
    beforeEach(() => {
        cy.visit('');
    });

    it('Verify Header Top section', () => {
        // Check if the Header Top section is visible
        cy.get('#top')
            .should('exist')
            .and('be.visible');
    });

    // Parameterized test for each link in the header
    testCases.forEach(({ name, selector, url, buttonText, breadcrumb }) => {
        it(`Verify ${name}`, () => {
            // Verify that the icon/button exists, is visible, and not disabled
            cy.get(selector)
                .should('exist')
                .should('be.visible')
                .and('not.be.disabled')
                .click();

            // If a `buttonText` is provided, click on that specific button in the dropdown
            if (buttonText) {
                cy.get(headerTopIconSelectors.accountDropdown);
                cy.findByText(buttonText)
                    .should('exist')
                    .should('be.visible')
                    .and('not.be.disabled')
                    .click();
            }

            // Verify breadcrumb menu is present and visible
            cy.get(headerTopIconSelectors.breadcrumbMenu)
                .should('exist')
                .should('be.visible');

            // If a `breadcrumb` is specified, check that the breadcrumb text is visible
            if (breadcrumb) {
                cy.findAllByText(breadcrumb)
                    .should('exist')
                    .should('be.visible');
            }

            // Assert that the URL includes the expected path
            cy.url().should('include', url);
        });
    });
});
