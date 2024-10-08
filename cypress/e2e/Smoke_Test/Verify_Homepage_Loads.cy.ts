describe('Verify Homepage Loads Successfully', () => {
  
  // Before the test begins, navigate to the homepage
  before(() => {
    cy.visit('');
  });

  it('Should display the store logo', () => {

  // Verify that key elevey is visible at the top of the page
  //Verify logo
    cy.get('img[alt="Демо магазин OpenCart"]')
    .should('exist')
    .should('be.visible');

  //Verify navigation bar
    cy.get('.navbar').should('exist').and('be.visible');

  // Verify that the search bar is visible
    cy.findAllByPlaceholderText('Пошук').should('be.visible');

    // Verify that the featured products section is present
    cy.get('#content .product-layout').should('have.length.greaterThan', 0);
  });
});
