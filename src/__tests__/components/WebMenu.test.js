import WebMenu from 'components/WebMenu';
import React from 'react';
import { renderWithProviders } from 'utils/testing';
import { fakerEN_US as faker } from '@faker-js/faker';
import { screen } from '@testing-library/react';

const items = [
    {
        text: faker.word.noun(),
        link: faker.internet.url(),
    },
    {
        text: faker.word.noun(),
        link: faker.internet.url(),
    },
    {
        text: faker.word.noun(),
        link: faker.internet.url(),
    },
];

it('should display the menu items', async () => {
    renderWithProviders(<WebMenu items={items} />);

    const webMenuItem0 = screen.getByTestId('web-menu-item-0');
    expect(webMenuItem0).toBeInTheDocument();
    expect(webMenuItem0).toHaveTextContent(items[0].text);

    const webMenuItem1 = screen.getByTestId('web-menu-item-1');
    expect(webMenuItem1).toBeInTheDocument();
    expect(webMenuItem1).toHaveTextContent(items[1].text);

    const webMenuItem2 = screen.getByTestId('web-menu-item-2');
    expect(webMenuItem2).toBeInTheDocument();
    expect(webMenuItem2).toHaveTextContent(items[2].text);
});
