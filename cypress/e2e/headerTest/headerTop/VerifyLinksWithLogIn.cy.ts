import logInSelectors from '../../../fixtures/userLogInSelectors.json';
import headerTopIconSelectors from "../../../fixtures/headerSelectors.json";

// Array with test data for verifying different links and buttons
const testCases = [
    { name: 'Phone link', selector: headerTopIconSelectors.phoneIconTop, url: '/contact' },
    { name: 'Account - Обліковий запис', selector: headerTopIconSelectors.accountIcon, url: '/account', buttonText: 'Обліковий запис' },
    { name: 'Account - Історія замовлень', selector: headerTopIconSelectors.accountIcon, url: '/order', buttonText: 'Історія замовлень' },
    { name: 'Account - Оплата', selector: headerTopIconSelectors.accountIcon, url: '/transaction', buttonText: 'Оплати' },
    { name: 'Account - Завантаження', selector: headerTopIconSelectors.accountIcon, url: '/download', buttonText: 'Завантаження' },
    { name: 'Account - Вихід', selector: headerTopIconSelectors.accountIcon, url: '/logout', buttonText: 'Вихід' },
    { name: 'Wishlist link', selector: headerTopIconSelectors.wishlistIcon, url: '/wishlist' },
    { name: 'Basket icon', selector: headerTopIconSelectors.basketIcon, url: '/cart' },
    { name: 'Checkout link', selector: headerTopIconSelectors.checkoutIcon, url: 'checkout/' }
];

describe('User Login', () => {

    // Before each test, perform user login
    beforeEach(() => {
        // Navigate to the website's main page
        cy.visit('')

        // Click on the user icon
        cy.get(logInSelectors.userIcon).click()

        // Click on the "Вхід" (Login) button
        cy.findByText('Вхід').click()

        // Assert that the URL includes '/login', indicating navigation to the login page
        cy.url().should('include', '/login')

        // Load user data
        const user = Cypress.env("user")

        // Enter the user's email
        cy.findAllByPlaceholderText('E-Mail')
            .should('exist')
            .should('be.visible')
            .type(user.email)

        // Enter the user's password
        cy.findAllByPlaceholderText('Пароль')
            .should('exist')
            .should('be.visible')
            .type(user.password)

        // Submit the login form
        cy.findByRole("button", {name: /Вхід/i}).click()
    })

    // Parameterized test that iterates through each case in `testCases`
    testCases.forEach(({ name, selector, url, buttonText }) => {
        it(`Verify ${name}`, () => {
            // Verify that the icon/button exists, is visible, and is not disabled
            cy.get(selector)
                .should('exist')
                .should('be.visible')
                .should('not.be.disabled')
                .click()

            // If `buttonText` is provided, click on the specified button within the submenu
            if (buttonText) {
                cy.findAllByText(buttonText)
                    .eq(1)
                    .should('exist')
                    .should('be.visible')
                    .should('not.be.disabled')
                    .click()
            }

            // Verify the breadcrumb menu is present and visible
            cy.get(headerTopIconSelectors.breadcrumbMenu)
                .should('exist')
                .should('be.visible')

            // Assert that the URL includes the expected path
            cy.url().should('include', url)

            // Additional check for the "Logout" button
            if (name === 'Account - Вихід') {
                // Verify and click the "Continue" button after logging out
                cy.findAllByText('Продовжити')
                    .should('exist')
                    .should('be.visible')
                    .should('not.be.disabled')
                    .click()

                // Assert that after logging out, the URL includes '/home'
                cy.url().should('include', '/home')
            }
        })
    })
})


