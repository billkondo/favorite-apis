import ApiSourceType from 'api_sources/ApiSourceType';

import GitHubForm from './GitHubForm';
import GitHubItemType from './GitHubItemType';

import GITHUB_KEY from './GitHubKey';

import GitHubRenderButton from './GitHubRenderButton';
import GitHubRenderItem from './GitHubRenderItem';
import GitHubRenderSearchBar from './GitHubRenderSearchBar';

import GitHubSearch from './GitHubSearch';

const GitHubApiSource: ApiSourceType<GitHubItemType, GitHubForm> = {
  key: GITHUB_KEY,

  apiName: 'GitHub',

  defaultPageSize: 25,
  pageSizes: ['25', '50', '100'],

  renderButton: GitHubRenderButton,
  renderItem: GitHubRenderItem,
  renderSearchBar: GitHubRenderSearchBar,

  search: GitHubSearch,
};

export default GitHubApiSource;
