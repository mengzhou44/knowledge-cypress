/// <reference types="cypress" />

describe('integration test', () => {
  it('click increase button, should display 1', () => {
    // eslint-disable-next-line no-undef
    cy.visit(`http://localhost:3000`);
    // eslint-disable-next-line no-undef
    cy.contains('0').should('exist');

    // eslint-disable-next-line no-undef
    cy.contains('Increase').click();

    // eslint-disable-next-line no-undef
    cy.contains('0').should('not.exist');

    // eslint-disable-next-line no-undef
    cy.contains('1').should('exist');
  });
});
