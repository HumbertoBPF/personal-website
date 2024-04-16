import React from 'react';
import { screen } from '@testing-library/react';
import CompetencesList from 'components/CompetencesList';
import { fakerEN_US as faker } from '@faker-js/faker';
import { renderWithProviders } from 'utils/testing';

const label = faker.word.noun();
const items = [faker.word.noun(), faker.word.noun(), faker.word.noun()];

it('should display list of competences after a label', async () => {
    renderWithProviders(<CompetencesList label={label} items={items} />);

    const competenceLabel = screen.getByTestId('competence-label');
    expect(competenceLabel).toBeInTheDocument();
    expect(competenceLabel).toHaveTextContent(label);

    const competenceChip0 = screen.getByTestId('competence-chip-0');
    expect(competenceChip0).toBeInTheDocument();
    expect(competenceChip0).toHaveTextContent(items[0]);

    const competenceChip1 = screen.getByTestId('competence-chip-1');
    expect(competenceChip1).toBeInTheDocument();
    expect(competenceChip1).toHaveTextContent(items[1]);

    const competenceChip2 = screen.getByTestId('competence-chip-2');
    expect(competenceChip2).toBeInTheDocument();
    expect(competenceChip2).toHaveTextContent(items[2]);
});
