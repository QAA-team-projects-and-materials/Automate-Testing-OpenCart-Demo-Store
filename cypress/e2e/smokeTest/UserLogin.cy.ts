import logInSelectors from '../../fixtures/userLogInSelectors.json'
describe('User Login', () => {

    before(() => {
        // Navigate to the Open demo store login page
        cy.visit('')

        // Click on user icon
        cy.get(logInSelectors.userIcon)
            .click()

        // Click on "Вхід" button
        cy.findByText('Вхід')
            .click();

        // Asserts that the current URL contains the '/login'
        cy.url().should('include', '/login')

        // Loading user data
        const user = Cypress.env("user")

        // Enter credentials
        cy.findAllByPlaceholderText('E-Mail')
            .should('exist').should('be.visible')
            .type(user.email)

        cy.findAllByPlaceholderText('Пароль')
            .should('exist').should('be.visible')
            .type(user.password)

        // Submit the login form
        cy.findByRole("button", {name: /Вхід/i}).click()

        // Verification that user is registered
        cy.findAllByText('Обліковий запис')
            .should('exist')
            .and('be.visible')

        // Asserts that the current URL contains the '/account'
        cy.url().should('include', '/account')
    })


})