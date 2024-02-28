describe('Basic flow', () => {
  beforeEach(() => {
    cy.viewport('macbook-13');
  });

  it('Should be visible the cookie banner', () => {
    cy.visit('/');
    cy.wait(500);
    cy.get('#cookie-accept').should('have.text', 'Accept').click();
  });

  // it('Should show a 404 page', () => {
  //   // cy.request({ url: '/404', failOnStatusCode: false }).its('status').should('equal', 404);
  //   cy.visit('/404', { failOnStatusCode: false });
  //   cy.get('#error-code').should('have.text', '404');
  // });
});
