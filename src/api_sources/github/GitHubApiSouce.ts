import ApiSourceType from 'api_sources/ApiSourceType';

import GitHubForm from './GitHubForm';
import GitHubItemType from './GitHubItemType';

import GITHUB_KEY from './GitHubKey';

import GitHubRenderButton from './GitHubRenderButton';
import GitHubRenderCheckBoxes from './GitHubRenderCheckBoxes';
import GitHubRenderCheckedInputs from './GitHubRenderCheckedInputs';
import GitHubRenderItem from './GitHubRenderItem';
import GitHubRenderSearchBar from './GitHubRenderSearchBar';

import GitHubSearch from './GitHubSearch';
import GitHubFilter from './GitHubFilter';

import GitHubFields from './GitHubFields';

const GitHubApiSource: ApiSourceType<GitHubItemType, GitHubForm> = {
  key: GITHUB_KEY,
  apiName: 'GitHub',

  fields: GitHubFields,

  defaultPageSize: 25,
  pageSizes: ['25', '50', '100'],

  renderButton: GitHubRenderButton,
  renderItem: GitHubRenderItem,
  renderSearchBar: GitHubRenderSearchBar,
  renderCheckBoxes: GitHubRenderCheckBoxes,
  renderCheckedInputs: GitHubRenderCheckedInputs,

  search: GitHubSearch,
  filter: GitHubFilter,
};

export default GitHubApiSource;
