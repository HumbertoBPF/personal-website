import { screen } from '@testing-library/react';
import NotFound from 'pages/NotFound';
import React from 'react';
import { renderWithProviders } from 'utils/testing';

it('should display error message and button to the homepage', async () => {
    renderWithProviders(<NotFound />);

    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Page not found');

    const text = screen.getByTestId('text');
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent(
        "The page that you tried to access doesn't exist."
    );

    const homepageButton = screen.getByTestId('homepage-button');
    expect(homepageButton).toBeInTheDocument();
    expect(homepageButton).toHaveTextContent('Go to the homepage');
});
