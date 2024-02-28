describe('Basic flow', () => {
  beforeEach(async () => {
    cy.viewport('macbook-13');

    // From https://github.com/cypress-io/cypress/issues/702#issuecomment-435873135
    if (!window.navigator || !navigator.serviceWorker) {
      return null;
    }
    const registrations = await navigator.serviceWorker.getRegistrations();
    return Promise.all(
      registrations.map((registration) => {
        return registration.unregister();
      }),
    );
  });

  it('Should be visible the cookie banner', () => {
    cy.visit('/');
    cy.wait(500);
    cy.get('#cookie-accept').should('have.text', 'Accept').click();
  });

  it('Should show a 404 page', () => {
    // cy.request({ url: '/404', failOnStatusCode: false }).its('status').should('equal', 404);
    cy.request('/404', { failOnStatusCode: false });
    cy.visit('/404', {
      timeout: 5000,
    });
    cy.get('#error-code').should('have.text', '404');
  });

  // it('Should show a 404 page', () => {
  //   // cy.request({ url: '/404', failOnStatusCode: false }).its('status').should('equal', 404);
  //   cy.visit('/404', { failOnStatusCode: false });
  //   cy.get('#error-code').should('have.text', '404');
  // });
});
