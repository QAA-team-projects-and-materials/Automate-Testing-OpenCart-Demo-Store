import logInSelectors from '..//..//fixtures/user_Log_In.json'
describe('User Login', () => {

    beforeEach(() => {
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
    })

    it('should log in with valid credentials', () => {
        // LOG IN
        // Loading user data
        const user = Cypress.env("user")

        // Enter credentials
        cy.findAllByPlaceholderText('Enter email').eq(0).type(user.email);
        cy.findAllByPlaceholderText('Password').type(user.password)



    })
})