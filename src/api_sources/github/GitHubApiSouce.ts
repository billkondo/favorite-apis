import ApiSourceType from 'api_sources/ApiSourceType';

import GitHubForm from './GitHubForm';
import GitHubItemType from './GitHubItemType';

import GITHUB_KEY from './GitHubKey';

import GitHubRenderItem from './GitHubRenderItem';

import GitHubSearch from './GitHubSearch';
import GitHubFilter from './GitHubFilter';

import { GitHubApiFields, GitHubFavoriteFields } from './GitHubFields';

const GitHubApiSource: ApiSourceType<GitHubItemType, GitHubForm> = {
  key: GITHUB_KEY,
  apiName: 'GitHub',

  apiFields: GitHubApiFields,
  favoriteFields: GitHubFavoriteFields,

  defaultPageSize: 25,
  pageSizes: ['25', '50', '100'],

  renderItem: GitHubRenderItem,

  search: GitHubSearch,
  filter: GitHubFilter,
};

export default GitHubApiSource;
