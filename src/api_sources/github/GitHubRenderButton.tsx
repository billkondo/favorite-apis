import { Button } from 'antd';

import GITHUB_KEY from './GitHubKey';

const GitHubRenderButton = (onClick: () => void) => {
  return (
    <Button onClick={onClick} size="large" title={`${GITHUB_KEY} BUTTON`}>
      GitHub
    </Button>
  );
};

export default GitHubRenderButton;
