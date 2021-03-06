import { render, screen, waitFor } from '@testing-library/react';

import mockMatchMedia from 'mocks/matchMedia';

import GitHubApiSource from 'api_sources/github/GitHubApiSouce';
import GitHubItemType from 'api_sources/github/GitHubItemType';
import GitHubSearch from 'api_sources/github/GitHubSearch';

import ApisPageSearchList from './ApisPageSearchList';

type TestParams = {
  apiSourceKey?: string;
  totalCount?: 400;
  items?: Array<any>;
};

jest.mock('api_sources/github/GitHubSearch');
jest.mock('components/favorite_button/FavoriteButton', () => ({
  __esModule: true,
  default: () => <></>,
}));

describe('ApisPageSearchList', () => {
  const DEFAULT_QUERY = {
    page: 1,
    pageSize: 25,
  };

  const setup = (
    params: TestParams = {
      apiSourceKey: GitHubApiSource.key,
      totalCount: 400,
      items: [],
    }
  ) => {
    const {
      apiSourceKey = GitHubApiSource.key,
      totalCount = 400,
      items = [],
    } = params;

    mockMatchMedia();

    const GitHubSearchMock = jest.fn();
    (GitHubSearch as jest.Mock).mockImplementation(GitHubSearchMock);

    GitHubSearchMock.mockImplementation(async () => ({
      totalCount,
      items,
    }));

    render(
      <ApisPageSearchList
        selectedKey={apiSourceKey}
        unselectKey={() => jest.fn()}
      ></ApisPageSearchList>
    );

    return { GitHubSearchMock };
  };

  test('it should search without query parameters when it first load and GitHub is selected', async () => {
    const { GitHubSearchMock } = setup();

    await waitFor(() => expect(GitHubSearchMock).toBeCalledWith(DEFAULT_QUERY));
    expect(GitHubSearchMock).toBeCalledTimes(1);
  });

  test('it should show total results count when first search is completed', async () => {
    setup();

    const resultsText = await screen.findByText(': 400');
    expect(resultsText).toBeVisible();
  });

  test('it should render GitHub items when first search is completed', async () => {
    const items: Array<GitHubItemType> = [
      {
        id: '1',
        name: 'name',
        description: 'description',
        forks: 32,
        stars: 123,
        language: 'C++',
        url: '/url',
      },
    ];

    setup({
      items,
    });

    const itemName = await screen.findByText('name');
    const itemDescription = await screen.findByText('description');
    const itemForks = await screen.findByText('3');
    const itemStars = await screen.findByText('123');
    const itemLanguage = await screen.findByText('C++');

    await waitFor(() => expect(itemName).toBeVisible());
    expect(itemDescription).toBeVisible();
    expect(itemForks).toBeVisible();
    expect(itemStars).toBeVisible();
    expect(itemLanguage).toBeVisible();
  });
});
