import React from 'react';
import { screen } from '@testing-library/react';
import CurriculumItem from 'components/CurriculumItem';
import { fakerEN_US as faker } from '@faker-js/faker';
import { renderWithProviders } from 'utils/testing';

const item = {
    title: faker.word.words(),
    description: faker.lorem.sentences(),
};

it('should display title and description of a curriculum item', async () => {
    renderWithProviders(<CurriculumItem item={item} />);

    const curriculumItemTitle = screen.getByTestId('curriculum-item-title');
    expect(curriculumItemTitle).toBeInTheDocument();
    expect(curriculumItemTitle).toHaveTextContent(item.title);

    const curriculumItemDescription = screen.getByTestId(
        'curriculum-item-description'
    );
    expect(curriculumItemDescription).toBeInTheDocument();
    expect(curriculumItemDescription).toHaveTextContent(item.description);
});
