import QueryResultType from 'domain/query/QueryResultType';
import QueryType from 'domain/query/QueryType';

import GitHubItemType from './GitHubItemType';

import GITHUB_KEY from './keyGitHub';
import apiCallGitHub from './apiCallGitHub';

type GitHubResponseItem = {
  id: number;
  stargazers_count: number;
  forks: number;
  full_name: string;
  html_url: string;
  description: string;
  language: string;
};

type GitHubResponse = {
  total_count: number;
  items: Array<GitHubResponseItem>;
};

const searchGitHub = async (
  query?: QueryType
): Promise<QueryResultType<GitHubItemType>> => {
  const queryString = 'q=react';

  const response = await apiCallGitHub(queryString);

  const { total_count, items } = response.data as GitHubResponse;

  return {
    totalCount: total_count,
    items: items.map(mapGitHubResponseItemToGitHubItem),
  };
};

const mapGitHubResponseItemToGitHubItem = (
  item: GitHubResponseItem
): GitHubItemType => {
  return {
    id: `${GITHUB_KEY}_${item.id}`,
    stars: item.stargazers_count,
    forks: item.forks,
    name: item.full_name,
    url: item.html_url,
    description: item.description,
    language: item.language,
  };
};

export default searchGitHub;
