import { Button } from 'antd';

import GITHUB_KEY from './keyGitHub';

const renderButtonGitHub = (onClick: () => void) => {
  return (
    <Button onClick={onClick} size="large" title={`${GITHUB_KEY} BUTTON`}>
      GitHub
    </Button>
  );
};

export default renderButtonGitHub;
