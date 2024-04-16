import { screen } from '@testing-library/react';
import Projects from 'pages/Projects';
import React from 'react';
import { renderWithProviders } from 'utils/testing';

it('should display the projects and the competences', async () => {
    renderWithProviders(<Projects />);

    const projectsTitle = screen.getByTestId('projects-title');
    expect(projectsTitle).toBeInTheDocument();
    expect(projectsTitle).toHaveTextContent('Selected projects');

    const project0 = screen.getByTestId('project-0');
    expect(project0).toBeInTheDocument();

    const project1 = screen.getByTestId('project-1');
    expect(project1).toBeInTheDocument();

    const project2 = screen.getByTestId('project-2');
    expect(project2).toBeInTheDocument();

    const project3 = screen.getByTestId('project-3');
    expect(project3).toBeInTheDocument();

    const competencesTitle = screen.getByTestId('competences-title');
    expect(competencesTitle).toBeInTheDocument();
    expect(competencesTitle).toHaveTextContent('Competences');

    const webCompetences = screen.getByTestId('web-competences');
    expect(webCompetences).toBeInTheDocument();

    const mobileCompetences = screen.getByTestId('mobile-competences');
    expect(mobileCompetences).toBeInTheDocument();

    const testingCompetences = screen.getByTestId('testing-competences');
    expect(testingCompetences).toBeInTheDocument();

    const awsCompetences = screen.getByTestId('aws-competences');
    expect(awsCompetences).toBeInTheDocument();
});
