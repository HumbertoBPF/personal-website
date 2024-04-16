import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

export function renderWithProviders(ui, extendedRenderOptions = {}) {
    const { ...renderOptions } = extendedRenderOptions;

    const Wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;

    return {
        ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    };
}
