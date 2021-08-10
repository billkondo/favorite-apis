import ApiSourceType from 'api_sources/ApiSourceType';

import GITHUB_KEY from './keyGitHub';
import renderButtonGitHub from './renderButtonGitHub';

const GitHubApiSource: ApiSourceType = {
  key: GITHUB_KEY,
  renderButton: renderButtonGitHub,
};

export default GitHubApiSource;
