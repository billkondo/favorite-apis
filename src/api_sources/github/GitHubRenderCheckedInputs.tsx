import GitHubInputKeys from './GitHubInputKeys';

import GitHubRenderSearchBar from './GitHubRenderSearchBar';

const GitHubRenderCheckedInputs = (checkedInputs: Array<string>) => {
  const checkedKeys = GitHubInputKeys.map((key) =>
    checkedInputs.includes(key) ? key : ''
  );

  return GitHubRenderSearchBar({ names: checkedKeys });
};

export default GitHubRenderCheckedInputs;
