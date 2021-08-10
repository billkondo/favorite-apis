import ApiSourceType from 'api_sources/ApiSourceType';

import SPOTIFY_KEY from './keySpotify';
import renderButtonSpotify from './renderButtonSpotify';

const SpotifyApiSource: ApiSourceType = {
  key: SPOTIFY_KEY,
  renderButton: renderButtonSpotify,
};

export default SpotifyApiSource;
