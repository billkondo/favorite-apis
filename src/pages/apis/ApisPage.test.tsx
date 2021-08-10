import { render, screen } from '@testing-library/react';

import mockMatchMedia from 'mocks/matchMedia';

import ApisPage from './ApisPage';

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
});
