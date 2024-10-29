import headerTopIconSelectors from "../../fixtures/headerTopSelectors.json";

describe('https://demo.opencart.ua/', () => {

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

    it('Verify phone links', () => {
        //Verify phone icon
        cy.get(headerTopIconSelectors.phoneIcon)
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

        //Verify h1
        cy.findAllByText('Контакти')
            .should('exist')
            .should('be.visible')
    })

    it('Verify account link and button "Реєстрація"', () => {
        //Verify account icon
        cy.get(headerTopIconSelectors.accountIcon)
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        cy.get(headerTopIconSelectors.accountDropdown)
            cy.findByText('Реєстрація')
                .should('exist')
                .should('be.visible')
                .should('not.be.disabled')
                .click()

        //Verify breadcrumb menu
        cy.get(headerTopIconSelectors.breadcrumbMenu)
            .should('exist')
            .should('be.visible')

        // Asserts that the current URL contains the '/register'
        cy.url().should('include', '/register')
    })
    it('Verify account link and button "Вхід"', () => {
        //Verify account icon
        cy.get(headerTopIconSelectors.accountIcon)
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        //Verify that account dropdown is visible and clickable
        cy.get(headerTopIconSelectors.accountDropdown)
        cy.findByText('Вхід')
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        //Verify breadcrumb menu
        cy.get(headerTopIconSelectors.breadcrumbMenu)
            .should('exist')
            .should('be.visible')

        // Asserts that the current URL contains the '/login'
        cy.url().should('include', '/login')
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

        cy.findAllByText('Обліковий запис')
            .should('exist')
            .should('be.visible')
            .and('not.be.disabled')

        // Asserts that the current URL contains the '/login'
        cy.url().should('include', '/login')
    })

    it('Verify basket icon', () => {
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

        //Verify h1
        cy.findAllByText('Кошик')
            .should('exist')
            .should('be.visible')

        // Asserts that the current URL contains the 'checkout/cart'
        cy.url().should('include', 'checkout/cart')
    })

    it('Verify checkout link', () => {
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

        //Verify h1
        cy.findAllByText('Кошик')
            .should('exist')
            .should('be.visible')

        // Asserts that the current URL contains the 'checkout/cart'
        cy.url().should('include', 'checkout/cart')
    })
})