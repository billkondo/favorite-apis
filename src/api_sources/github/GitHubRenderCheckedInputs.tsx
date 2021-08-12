import GITHUB_KEY from './GitHubKey';

import GitHubRenderSearchBar from './GitHubRenderSearchBar';

const GitHubInputKeys = [`${GITHUB_KEY}_name`];

const GitHubRenderCheckedInputs = (checkedInputs: Array<string>) => {
  const checkedKeys = GitHubInputKeys.map((key) =>
    checkedInputs.includes(key) ? key : ''
  );

  return GitHubRenderSearchBar(checkedKeys);
};

export default GitHubRenderCheckedInputs;
