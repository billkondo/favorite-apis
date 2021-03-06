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
    renderSearchBar: () => <></>,
    repaginate: () => jest.fn(),
    page: 1,
    fields: [],
  }),
}));

describe('ApisPage', () => {
  const GITHUB_BUTTON_TITLE = 'GitHub button';
  const FREETOGAME_BUTTON_TITLE = 'FreeToGame button';

  const setup = () => {
    mockMatchMedia();

    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
      },
    });

    render(<ApisPage></ApisPage>);
  };

  test('it should render api source buttons', async () => {
    setup();

    const gitHubApiButton = await screen.findByTitle(GITHUB_BUTTON_TITLE);
    const freeToGameButton = await screen.findByTitle(FREETOGAME_BUTTON_TITLE);

    expect(gitHubApiButton).toBeVisible();
    expect(freeToGameButton).toBeVisible();
  });

  test('it should go to GitHub search list when GitHub button is clicked', async () => {
    setup();

    const gitHubApiButton = await screen.findByTitle(GITHUB_BUTTON_TITLE);
    userEvent.click(gitHubApiButton);

    const gitHubTitle = await screen.findByTitle('GITHUB API');
    expect(gitHubTitle).toBeVisible();
  });

  test('it should return to api source options when back button is clicked', async () => {
    setup();

    const gitHubApiButton = await screen.findByTitle(GITHUB_BUTTON_TITLE);
    userEvent.click(gitHubApiButton);

    expect(gitHubApiButton).not.toBeVisible();

    const backButton = await screen.findByTitle('APIs Page Back Button');
    userEvent.click(backButton);

    await waitFor(() =>
      expect(screen.getByTitle(GITHUB_BUTTON_TITLE)).toBeVisible()
    );
    expect(backButton).not.toBeVisible();
  });
});
