import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import mockMatchMedia from 'mocks/matchMedia';

import ApisPage from './ApisPage';

jest.mock('pages/apis/search_list/useApisPageSearchList', () => ({
  __esModule: true,
  default: () => ({
    totalCount: 0,
    items: [],
    renderItem: () => <></>,
  }),
}));

describe('ApisPage', () => {
  const setup = () => {
    mockMatchMedia();

    render(<ApisPage></ApisPage>);
  };

  test('it should render api source buttons', async () => {
    setup();

    const gitHubApiButton = await screen.findByTitle('GITHUB BUTTON');
    const spotifyApiButton = await screen.findByTitle('SPOTIFY BUTTON');

    expect(gitHubApiButton).toBeVisible();
    expect(spotifyApiButton).toBeVisible();
  });

  test('it should go to GitHub search list when GitHub button is clicked', async () => {
    setup();

    const gitHubApiButton = await screen.findByTitle('GITHUB BUTTON');
    userEvent.click(gitHubApiButton);

    const gitHubTitle = await screen.findByTitle('GITHUB API');
    expect(gitHubTitle).toBeVisible();
  });

  test('it should go to Spotify search list when Spotify button is clicked', async () => {
    setup();

    const spotifyApiButton = await screen.findByTitle('SPOTIFY BUTTON');
    userEvent.click(spotifyApiButton);

    const spotifyTitle = await screen.findByTitle('SPOTIFY API');
    expect(spotifyTitle).toBeVisible();
  });

  test('it should return to api source options when back button is clicked', async () => {
    setup();

    const gitHubApiButton = await screen.findByTitle('GITHUB BUTTON');
    userEvent.click(gitHubApiButton);

    expect(gitHubApiButton).not.toBeVisible();

    const backButton = await screen.findByTitle('APIs Page Back Button');
    userEvent.click(backButton);

    await waitFor(() =>
      expect(screen.getByTitle('GITHUB BUTTON')).toBeVisible()
    );
    expect(backButton).not.toBeVisible();
  });
});
