import { render, screen } from '@testing-library/react';

import mockMatchMedia from 'mocks/matchMedia';

import FavoritesPage from './FavoritesPage';

describe('FavoritesPage', () => {
  const setup = () => {
    mockMatchMedia();

    render(<FavoritesPage></FavoritesPage>);
  };

  test('it should should unauthenticated message when user is not authenticated', async () => {
    setup();

    const unauthenticatedMessage = await screen.findByText(
      'You are not authenticated'
    );
    expect(unauthenticatedMessage).toBeVisible();
  });
});
