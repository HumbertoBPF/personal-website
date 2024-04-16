import React from 'react';
import { screen } from '@testing-library/react';
import Footer from 'components/Footer';
import { renderWithProviders } from 'utils/testing';

it('should display links on the footer', async () => {
    renderWithProviders(<Footer />);

    const linkedInLink = screen.getByTestId('linkedin-link');
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/humberto-bpf'
    );
    expect(linkedInLink).toHaveTextContent('Find me on LinkedIn');

    const gitHubLink = screen.getByTestId('github-link');
    expect(gitHubLink).toBeInTheDocument();
    expect(gitHubLink).toHaveAttribute(
        'href',
        'https://github.com/HumbertoBPF'
    );
    expect(gitHubLink).toHaveTextContent('Check my coding projects');

    const mediumLink = screen.getByTestId('medium-link');
    expect(mediumLink).toBeInTheDocument();
    expect(mediumLink).toHaveAttribute(
        'href',
        'https://medium.com/@humbertofilho_30158'
    );
    expect(mediumLink).toHaveTextContent('Check my Medium articles');
});
