describe('Screen Shots', () => {
  beforeEach(async () => {
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
  it('Accept cookies and taking screenshot "/" while viewport macbook-13', () => {
    cy.viewport('macbook-13');
    cy.then(() => {
      cy.visit('/');
      cy.wait(500);
      cy.get('#cookie-accept').click();
      cy.screenshot('screenshot-wide', {
        capture: 'viewport',
        overwrite: true,
      });
    });
    expect(true).to.equal(true);
  });
  it('Accept cookies and taking screenshot "/app" while viewport macbook-13', () => {
    cy.viewport('macbook-13');
    cy.then(() => {
      cy.visit('/app');
      cy.get('#cookie-accept').click();
      cy.screenshot('screenshot-wide-app', {
        capture: 'viewport',
        overwrite: true,
      });
    });
    expect(true).to.equal(true);
  });
  it('Accept cookies and taking screenshot "/" while viewport iphone-x', () => {
    cy.viewport('iphone-x');
    cy.visit('/');
    cy.get('#cookie-accept').click();
    cy.screenshot('screenshot-narrow', {
      capture: 'viewport',
      overwrite: true,
    });
    expect(true).to.equal(true);
  });

  it('Accept cookies and taking screenshot "/app" while viewport iphone-x', () => {
    cy.viewport('iphone-x');
    cy.visit('/app');
    cy.get('#cookie-accept').click();
    cy.screenshot('screenshot-narrow-app', {
      capture: 'viewport',
      overwrite: true,
    });
    expect(true).to.equal(true);
  });
});
