import { render, waitFor } from '@testing-library/react';

import mockMatchMedia from 'mocks/matchMedia';

import GitHubApiSource from 'api_sources/github/GitHubApiSouce';
import SpotifyApiSource from 'api_sources/spotify/SpotifyApiSource';

import searchGitHub from 'api_sources/github/searchGitHub';
import searchSpotify from 'api_sources/spotify/searchSpotify';

import ApisPageSearchList from './ApisPageSearchList';

type TestParams = {
  apiSourceKey?: string;
};

jest.mock('api_sources/github/searchGitHub');
jest.mock('api_sources/spotify/searchSpotify');

describe('ApisPageSearchList', () => {
  const setup = (
    params: TestParams = { apiSourceKey: GitHubApiSource.key }
  ) => {
    const { apiSourceKey = GitHubApiSource.key } = params;

    mockMatchMedia();

    const searchGitHubMock = jest.fn();
    (searchGitHub as jest.Mock).mockImplementation(searchGitHubMock);

    const searchSpotifyMock = jest.fn();
    (searchSpotify as jest.Mock).mockImplementation(searchSpotifyMock);

    render(
      <ApisPageSearchList
        selectedKey={apiSourceKey}
        unselectKey={() => jest.fn()}
      ></ApisPageSearchList>
    );

    return { searchGitHubMock, searchSpotifyMock };
  };

  test('it should search without query parameters when it first load and GitHub is selected', async () => {
    const { searchGitHubMock } = setup();

    await waitFor(() => expect(searchGitHubMock).toBeCalledWith());
    expect(searchGitHubMock).toBeCalledTimes(1);
  });

  test('it should search without query parameters when it first load and Spotify is selected', async () => {
    const { searchSpotifyMock } = setup({ apiSourceKey: SpotifyApiSource.key });

    await waitFor(() => expect(searchSpotifyMock).toBeCalledWith());
    expect(searchSpotifyMock).toBeCalledTimes(1);
  });
});
