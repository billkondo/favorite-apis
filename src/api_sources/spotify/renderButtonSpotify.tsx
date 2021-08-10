import { Button } from 'antd';

import SPOTIFY_KEY from './keySpotify';

const renderButtonSpotify = (onClick: () => void) => {
  return (
    <Button onClick={onClick} size="large" title={`${SPOTIFY_KEY} BUTTON`}>
      Spotify
    </Button>
  );
};

export default renderButtonSpotify;
