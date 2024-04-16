import React from 'react';
import MobileMenu from 'components/MobileMenu';
import { fakerEN_US as faker } from '@faker-js/faker';
import { renderWithProviders } from 'utils/testing';
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

it('should display the menu items', () => {
    renderWithProviders(<MobileMenu items={items} />);

    const mobileMenuItem0 = screen.getByTestId('mobile-menu-item-0');
    expect(mobileMenuItem0).toBeInTheDocument();
    expect(mobileMenuItem0).toHaveTextContent(items[0].text);

    const mobileMenuItem1 = screen.getByTestId('mobile-menu-item-1');
    expect(mobileMenuItem1).toBeInTheDocument();
    expect(mobileMenuItem1).toHaveTextContent(items[1].text);

    const mobileMenuItem2 = screen.getByTestId('mobile-menu-item-2');
    expect(mobileMenuItem2).toBeInTheDocument();
    expect(mobileMenuItem2).toHaveTextContent(items[2].text);
});
