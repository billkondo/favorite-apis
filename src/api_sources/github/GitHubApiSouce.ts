import ApiSourceType from 'api_sources/ApiSourceType';

import GitHubForm from './GitHubForm';
import GitHubItemType from './GitHubItemType';

import GITHUB_KEY from './keyGitHub';

import renderButtonGitHub from './renderButtonGitHub';
import renderItemGitHub from './renderItemGitHub';
import renderSearchBarGitHub from './renderSearchBarGitHub';

import searchGitHub from './searchGitHub';

const GitHubApiSource: ApiSourceType<GitHubItemType, GitHubForm> = {
  key: GITHUB_KEY,

  apiName: 'GitHub',

  renderButton: renderButtonGitHub,
  renderItem: renderItemGitHub,
  renderSearchBar: renderSearchBarGitHub,

  search: searchGitHub,
};

export default GitHubApiSource;
