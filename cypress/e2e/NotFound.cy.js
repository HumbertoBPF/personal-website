it("should redirect to the homepage when clicking on the 'go to homepage' button", () => {
    cy.visit('/');

    cy.getByTestId('homepage-button').click();

    cy.url().should('include', '/home');

    cy.getByTestId('greeting').should('have.text', "Hi! I'm Humberto Borges");

    cy.getByTestId('profession').should('have.text', 'Full-stack developer');

    cy.getByTestId('work-experience-section')
        .find('[data-testid="section-title"]')
        .should('have.text', 'Work experience');

    cy.getByTestId('educational-background-section')
        .find('[data-testid="section-title"]')
        .should('have.text', 'Degrees and certifications');
});
