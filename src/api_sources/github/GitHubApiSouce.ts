import ApiSourceType from 'api_sources/ApiSourceType';

import GITHUB_KEY from './keyGitHub';
import renderButtonGitHub from './renderButtonGitHub';
import renderItemGitHub from './renderItemGitHub';
import searchGitHub from './searchGitHub';

import GitHubItemType from './GitHubItemType';

const GitHubApiSource: ApiSourceType<GitHubItemType> = {
  key: GITHUB_KEY,

  renderButton: renderButtonGitHub,
  renderItem: renderItemGitHub,

  search: searchGitHub,
};

export default GitHubApiSource;
