import ApiSourceType from 'api_sources/ApiSourceType';

import GITHUB_KEY from './keyGitHub';
import renderButtonGitHub from './renderButtonGitHub';
import searchGitHub from './searchGitHub';

const GitHubApiSource: ApiSourceType = {
  key: GITHUB_KEY,
  renderButton: renderButtonGitHub,
  search: searchGitHub,
};

export default GitHubApiSource;
