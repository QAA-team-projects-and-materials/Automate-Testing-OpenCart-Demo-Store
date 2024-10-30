import logInSelectors from '../../../fixtures/userLogInSelectors.json'
import headerTopIconSelectors from "../../../fixtures/headerTopSelectors.json";
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

    })

    it('Verify phone links', () => {
        //Verify phone icon
        cy.get(headerTopIconSelectors.phoneIconTop)
            .should('exist')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        // Asserts that the current URL contains the '/contact'
        cy.url().should('include', '/contact')

        //Verify breadcrumb menu
        cy.get(headerTopIconSelectors.breadcrumbMenu)
            .should('exist')
            .should('be.visible')
    })

       it('Verify account link and button "Обліковий запис"', () => {
        //Verify account icon
        cy.get(headerTopIconSelectors.accountIcon)
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        cy.findAllByText('Обліковий запис').eq(1)
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        //Verify breadcrumb menu
        cy.get(headerTopIconSelectors.breadcrumbMenu)
            .should('exist')
            .should('be.visible')

        // Asserts that the current URL contains the '/account'
        cy.url().should('include', '/account')
    })

    it('Verify account link and button "Історія замовлень"', () => {
        //Verify account icon
        cy.get(headerTopIconSelectors.accountIcon)
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        //Verify that account dropdown is visible and clickable
        cy.get(headerTopIconSelectors.accountDropdown)
        cy.findAllByText('Історія замовлень').eq(1)
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        //Verify breadcrumb menu
        cy.get(headerTopIconSelectors.breadcrumbMenu)
            .should('exist')
            .should('be.visible')

        // Asserts that the current URL contains the '/order'
        cy.url().should('include', '/order')
    })

    it('Verify account link and button "Оплата"', () => {
        //Verify account icon
        cy.get(headerTopIconSelectors.accountIcon)
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        //Verify that account dropdown is visible and clickable
        cy.get(headerTopIconSelectors.accountDropdown)
        cy.findAllByText('Оплати').eq(1)
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        //Verify breadcrumb menu
        cy.get(headerTopIconSelectors.breadcrumbMenu)
            .should('exist')
            .should('be.visible')

        // Asserts that the current URL contains the '/transaction'
        cy.url().should('include', '/transaction')
    })

    it('Verify account link and button "Завантаження"', () => {
        //Verify account icon
        cy.get(headerTopIconSelectors.accountIcon)
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        //Verify that account dropdown is visible and clickable
        cy.get(headerTopIconSelectors.accountDropdown)
        cy.findAllByText('Завантаження').eq(1)
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        //Verify breadcrumb menu
        cy.get(headerTopIconSelectors.breadcrumbMenu)
            .should('exist')
            .should('be.visible')

        // Asserts that the current URL contains the '/download'
        cy.url().should('include', '/download')
    })

    it('Verify account link and button "Вихід"', () => {
        //Verify account icon
        cy.get(headerTopIconSelectors.accountIcon)
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        //Verify that account dropdown is visible and clickable
        cy.get(headerTopIconSelectors.accountDropdown)
        cy.findAllByText('Вихід').eq(1)
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        //Verify breadcrumb menu
        cy.get(headerTopIconSelectors.breadcrumbMenu)
            .should('exist')
            .should('be.visible')

        // Asserts that the current URL contains the '/logout'
        cy.url().should('include', '/logout')
    })

    it('Verify like link', () => {
         // Verify like icon
         cy.get(headerTopIconSelectors.likeIcon)
             .should('exist')
             .should('be.visible')
             .and('not.be.disabled')
             .click()

         //Verify breadcrumb menu
         cy.get(headerTopIconSelectors.breadcrumbMenu)
             .should('exist')
             .should('be.visible')

         // Asserts that the current URL contains the '/wishlist'
         cy.url().should('include', '/wishlist')
     })

    it('Verify basket icon link', () => {
        // Verify basket icon
        cy.get(headerTopIconSelectors.basketIcon)
            .should('exist')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        //Verify breadcrumb menu
        cy.get(headerTopIconSelectors.breadcrumbMenu)
            .should('exist')
            .should('be.visible')

        // Asserts that the current URL contains the 'checkout/cart'
        cy.url().should('include', 'checkout/cart')
    })

    it('Verify checkout link',
      () => {
          // Verify checkout icon
          cy.get(headerTopIconSelectors.checkoutIcon)
              .should('exist')
              .should('be.visible')
              .and('not.be.disabled')
              .click()

          //Verify breadcrumb menu
          cy.get(headerTopIconSelectors.breadcrumbMenu)
              .should('exist')
              .should('be.visible')
          
          // Asserts that the current URL contains the 'checkout/cart'
          cy.url().should('include', 'checkout/cart')
      })
})
