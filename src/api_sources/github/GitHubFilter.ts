import isSubstring from 'utils/is_substring';

import GitHubItemType from './GitHubItemType';

const GitHubFilter =
  (filters: { [key: string]: string } = {}) =>
  (item: GitHubItemType): boolean => {
    const name = filters.name || '';
    const fields = [item.description, item.language, item.name];

    return !!fields.find((field) => isSubstring(field, name));
  };

export default GitHubFilter;
