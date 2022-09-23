/// <reference types="cypress" />

const REACT_SERVER =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:3000`
    : process.env.REACT_APP_DEPLOY_URI;

describe('E2E tests on the profile screen.', () => {
  it('The following elements must exist.', () => {
    cy.viewport(390, 844);

    cy.visit(`${REACT_SERVER}`);

    cy.get('[data-cy="menu"]');

    cy.get('[data-cy="welcome-text"]');

    cy.get('[data-cy="about-me-text"]');

    cy.get('[data-cy="profile-image"]');
  });
});
