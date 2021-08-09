import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import 'mocks/matchMedia';

import App from './App';

describe('App', () => {
  const setup = (params = { initialRoute: '/' }) => {
    const { initialRoute } = params;

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <App />
      </MemoryRouter>
    );
  };

  test('it should render menu items', async () => {
    setup();

    const apiMenuItem = await waitFor(() => screen.getByTitle('APIs'));
    expect(apiMenuItem).toBeInTheDocument();

    const favoriteMenuItem = screen.getByTitle('Favorites');
    expect(favoriteMenuItem).toBeInTheDocument();
  });

  test('it should show 404 page when none of the routes are matched', async () => {
    setup({ initialRoute: '/this' });

    const notFoundText = await waitFor(() => screen.getByText('404'));
    expect(notFoundText).toBeInTheDocument();
  });
});
