import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('it should render menu items', async () => {
    render(<App />);

    const apiMenuItem = await waitFor(() => screen.getByText('APIs'));
    expect(apiMenuItem).toBeInTheDocument();

    const favoriteMenuItem = screen.getByText('Favorites');
    expect(favoriteMenuItem).toBeInTheDocument();
  });
});
