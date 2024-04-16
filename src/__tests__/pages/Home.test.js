import { screen, within } from '@testing-library/react';
import Home from 'pages/Home';
import React from 'react';
import { renderWithProviders } from 'utils/testing';

it('should display general description, work experience, and educational background', async () => {
    renderWithProviders(<Home />);

    const avatar = screen.getByTestId('avatar');
    const avatarImg = within(avatar).getByRole('img');
    expect(avatarImg).toBeInTheDocument();
    expect(avatarImg).toHaveAccessibleName('Humberto Borges');
    expect(avatarImg).toHaveAttribute('src', 'my_picture.png');

    const greeting = screen.getByTestId('greeting');
    expect(greeting).toBeInTheDocument();
    expect(greeting).toHaveTextContent("Hi! I'm Humberto Borges");

    const profession = screen.getByTestId('profession');
    expect(profession).toBeInTheDocument();
    expect(profession).toHaveTextContent('Full-stack developer');

    const linkedInButton = screen.getByTestId('linkedin-button');
    expect(linkedInButton).toBeInTheDocument();
    expect(linkedInButton).toHaveTextContent('Contact me');
    expect(linkedInButton).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/humberto-bpf'
    );

    const projectsButton = screen.getByTestId('projects-button');
    expect(projectsButton).toBeInTheDocument();
    expect(projectsButton).toHaveTextContent('Check my work');

    const workExperienceSection = screen.getByTestId('work-experience-section');
    const workExperienceSectionTitle = within(
        workExperienceSection
    ).getByTestId('section-title');
    expect(workExperienceSectionTitle).toBeInTheDocument();
    expect(workExperienceSectionTitle).toHaveTextContent('Work experience');

    const workExperience0 = within(workExperienceSection).getByTestId(
        'work-experience-0'
    );
    expect(workExperience0).toBeInTheDocument();

    const workExperience1 = within(workExperienceSection).getByTestId(
        'work-experience-1'
    );
    expect(workExperience1).toBeInTheDocument();

    const educationalBackgroundSection = screen.getByTestId(
        'educational-background-section'
    );
    const educationalBackgroundSectionTitle = within(
        educationalBackgroundSection
    ).getByTestId('section-title');
    expect(educationalBackgroundSectionTitle).toBeInTheDocument();
    expect(educationalBackgroundSectionTitle).toHaveTextContent(
        'Degrees and certifications'
    );

    const education0 = within(educationalBackgroundSection).getByTestId(
        'education-0'
    );
    expect(education0).toBeInTheDocument();

    const education1 = within(educationalBackgroundSection).getByTestId(
        'education-1'
    );
    expect(education1).toBeInTheDocument();
});
