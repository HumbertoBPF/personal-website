import ProjectCard from 'components/ProjectCard';
import React from 'react';
import { renderWithProviders } from 'utils/testing';
import { fakerEN_US as faker } from '@faker-js/faker';
import { screen } from '@testing-library/react';

const item = {
    title: faker.word.words(),
    description: faker.lorem.sentences(),
    image: faker.image.url(),
    link: faker.internet.url(),
};

it('should display details of the project on the card', () => {
    renderWithProviders(<ProjectCard item={item} />);

    const projectImage = screen.getByTestId('project-image');
    expect(projectImage).toBeInTheDocument();
    expect(projectImage).toHaveAccessibleName(item.title);
    expect(projectImage).toHaveAttribute('src', item.image);

    const projectTitle = screen.getByTestId('project-title');
    expect(projectTitle).toBeInTheDocument();
    expect(projectTitle).toHaveTextContent(item.title);

    const projectDescription = screen.getByTestId('project-description');
    expect(projectDescription).toBeInTheDocument();
    expect(projectDescription).toHaveTextContent(item.description);

    const projectButton = screen.getByTestId('project-button');
    expect(projectButton).toBeInTheDocument();
    expect(projectButton).toHaveTextContent('See on GitHub');
    expect(projectButton).toHaveAttribute('href', item.link);
});
