import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import mockMatchMedia from 'mocks/matchMedia';

import App from './App';

describe('App', () => {
  const setup = (params = { initialRoute: '/' }) => {
    const { initialRoute } = params;

    mockMatchMedia();

    render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <App />
      </MemoryRouter>
    );
  };

  test('it should show 404 page when none of the routes are matched', async () => {
    setup({ initialRoute: '/this' });

    const notFoundText = await waitFor(() => screen.getByText('404'));
    expect(notFoundText).toBeInTheDocument();
  });
});
