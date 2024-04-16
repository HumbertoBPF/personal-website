it("should redirect to the projects page when clicking on the 'projects' menu item", () => {
    cy.visit('/home');

    cy.getByTestId('web-menu-item-1').click();

    cy.url().should('include', '/projects');

    cy.getByTestId('projects-title')
        .should('have.text', 'Selected projects')
        .and('be.visible');

    cy.getByTestId('competences-title')
        .should('have.text', 'Competences')
        .and('be.visible');
});

it("should redirect to the about me page when clicking on the 'about me' menu item", () => {
    cy.visit('/home');

    cy.getByTestId('web-menu-item-2').click();

    cy.url().should('include', '/about-me');

    cy.getByTestId('about-me-title').should(
        'have.text',
        'Thank you for checking my website!'
    );
});

it("should redirect to the projects page when clicking on the 'view my work' button", () => {
    cy.visit('/home');

    cy.getByTestId('projects-button').click();

    cy.url().should('include', '/projects');

    cy.getByTestId('projects-title')
        .should('have.text', 'Selected projects')
        .and('be.visible');

    cy.getByTestId('competences-title')
        .should('have.text', 'Competences')
        .and('be.visible');
});
