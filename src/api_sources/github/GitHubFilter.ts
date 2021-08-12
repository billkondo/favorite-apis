import { GITHUB_NAME } from './GitHubInputKeys';
import GitHubItemType from './GitHubItemType';

const GitHubValidator = (filters: { [key: string]: string }) => ({
  [GITHUB_NAME]: (item: GitHubItemType): boolean => {
    const filterName = filters[GITHUB_NAME] || '';

    const fields = [item.description, item.language, item.name];

    return fields
      .map((field) => field.toLowerCase().includes(filterName.toLowerCase()))
      .includes(true);
  },
});

const GitHubFilter =
  (filters: { [key: string]: string }) =>
  (item: GitHubItemType): boolean => {
    const filterKeys = Object.keys(filters);
    if (!filterKeys.length) return true;

    const gitHubFilterKeys = [GITHUB_NAME];
    const hasAnyFieldSelected = gitHubFilterKeys
      .map((filterKey) => filterKeys.includes(filterKey))
      .includes(true);

    if (!hasAnyFieldSelected) return false;

    const validations = gitHubFilterKeys.map((filterKey) =>
      GitHubValidator(filters)[filterKey](item)
    );
    const hasAnyValidationFailed = validations.includes(false);

    return !hasAnyValidationFailed;
  };

export default GitHubFilter;
