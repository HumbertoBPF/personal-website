import { screen } from '@testing-library/react';
import AboutMe from 'pages/AboutMe';
import React from 'react';
import { renderWithProviders } from 'utils/testing';

it('should display information about me', async () => {
    renderWithProviders(<AboutMe />);

    const aboutMeTitle = screen.getByTestId('about-me-title');
    expect(aboutMeTitle).toBeInTheDocument();
    expect(aboutMeTitle).toHaveTextContent(
        'Thank you for checking my website!'
    );

    const profilePicture = screen.getByTestId('profile-picture');
    expect(profilePicture).toBeInTheDocument();
    expect(profilePicture).toHaveAccessibleName('Humberto Borges');
    expect(profilePicture).toHaveAttribute('src', 'my_picture.png');
});
