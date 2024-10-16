import searchItemSelectors from "../../fixtures/addProductToTheCartSelectors.json"
import logInSelectors from "../../fixtures/userLogInSelectors.json"

describe('Adding a Product to the Cart', () => {

    let productName = 'iPhone'

    before(() => {
        // Navigate to the homepage
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
        
        // Search for the product
        cy.findAllByPlaceholderText('Пошук')
            .type(productName)

        // Click the search button
        cy.findAllByRole('button').eq(0)
            .click()
        
        // Open the product details page
        cy.get(searchItemSelectors.productItem)
            .first().click()

        // Add the product to the cart
        cy.findByRole('button', { name: /В кошик/i })
            .click().wait(1000)

        // Verify the success message
        cy.get(searchItemSelectors.successAllert)
            .should('contain', `Ви додали ${productName} до Вашого кошика!`)

        // Open the cart dropdown and verify the product is displayed
        cy.findAllByRole('button').eq(1)
            .click()

        cy.get(searchItemSelectors.shoppingCartItemText)
            .should('contain.text', productName)

        cy.findAllByText('Оформити замовлення')
            .should('exist')
            .should('be.visible')
            .click()

        // Asserts that the current URL contains the 't/checkout'
        cy.url().should('include', '/checkout')

        // Checkout section should be visible
        cy.findAllByText('Оформлення замовлення')
            .should('exist')
            .should('be.visible')
    })
    it('Steps for ordering using registration (default) data', () => {

        // Step 1 "Варіанти оформлення"
        cy.findAllByText('Крок 1: Варіанти оформлення')
            .should('exist')
            .should('be.visible')

        // Step 2 "Деталі рахунку"
        cy.findAllByText('Крок 2: Деталі рахунку')
            .should('exist')
            .should('be.visible')
        // Next step button
        cy.findByRole("button", { name: /Продовжити/i }).as('nextStepButton');
        cy.get('@nextStepButton').click();

        // Step 3 "Деталі доставки"
        cy.findAllByText('Крок 3: Деталі доставки')
            .should('exist')
            .should('be.visible')

        // Next step button
        cy.findByRole("button", { name: /Продовжити/i }).click()

        // Step 4 "Спосіб доставки"
        cy.findAllByText('Крок 4: Спосіб доставки')
            .should('exist')
            .should('be.visible')
            .wait(1000)

        // Next step button
        cy.findByRole("button", { name: /Продовжити/i }).click()

        // Step 5 "Спосіб оплати"
        cy.findAllByText('Крок 5: Спосіб оплати')
            .should('exist')
            .should('be.visible')
            .wait(1000)

        // Next step button
        cy.findByRole("button", { name: /Продовжити/i }).wait(1000).click()
        cy.get('input[name="agree"]').should('be.visible').click()
        //  cy.findByRole('checkbox', { name: /agree/i }).click();
        cy.findByRole("button", { name: /Продовжити/i }).wait(1000).click()

        // Step 6 "Підтвердження замовлення"
        cy.findAllByText('Крок 6: Підтвердження замовлення')
            .should('exist')
            .should('be.visible')
            .wait(1000)

        // Comperison search item and in order table
        cy.get('.table-responsive')
            .should('exist')
            .should('be.visible')
            .each((el) => {
            const searchTerm = el.find('.table-responsive > .table > tbody > tr > :nth-child(1)').text()
            expect(productName.toLowerCase()).to.include(searchTerm.toLowerCase())
        })

        // Confirm order button
        cy.findByRole("button", { name: /Підтвердити замовлення/i }).wait(1000).click()

        // Asserts that the current URL contains the 'checkout/success'
        cy.url().should('include', 'checkout/success')

        // Success alert
        cy.findAllByText('Ви успішно оформили замовлення!')
            .should('exist')
            .should('be.visible')

    })
})