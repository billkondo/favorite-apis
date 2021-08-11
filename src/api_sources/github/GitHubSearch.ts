import QueryResultType from 'domain/query/QueryResultType';

import GITHUB_KEY from './GitHubKey';

import GitHubItemType from './GitHubItemType';
import GitHubForm from './GitHubForm';

import GitHubApiCall from './GitHubApiCall';

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

const GitHubSearch = async (
  query: GitHubForm = { name: 'react', sortBy: '', page: 1, pageSize: 25 }
): Promise<QueryResultType<GitHubItemType>> => {
  const { name = 'react', sortBy = '', page = 1, pageSize = 25 } = query;

  let queryString = `q=${name}`;

  if (sortBy) {
    const params = sortBy.split(':');

    const sort = params[0];
    const order = params[1];

    queryString += `&sort=${sort}&order=${order}`;
  }

  if (page) queryString += `&page=${page}`;
  if (pageSize) queryString += `&per_page=${pageSize}`;

  const response = await GitHubApiCall(queryString);

  const { total_count, items } = response.data as GitHubResponse;

  return {
    totalCount: Math.min(1000, total_count), // Only first 1000 results are available
    items: items.map(mapGitHubResponseItemToGitHubItem),
  };
};

const mapGitHubResponseItemToGitHubItem = (
  item: GitHubResponseItem
): GitHubItemType => {
  return {
    id: `${GITHUB_KEY}_${item.id}`,
    stars: item.stargazers_count || 0,
    forks: item.forks || 0,
    name: item.full_name || '',
    url: item.html_url || '',
    description: item.description || '',
    language: item.language || '',
  };
};

export default GitHubSearch;
