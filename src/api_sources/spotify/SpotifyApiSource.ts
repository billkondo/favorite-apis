import ApiSourceType from 'api_sources/ApiSourceType';

import SPOTIFY_KEY from './keySpotify';
import renderButtonSpotify from './renderButtonSpotify';
import searchSpotify from './searchSpotify';

const SpotifyApiSource: ApiSourceType = {
  key: SPOTIFY_KEY,
  renderButton: renderButtonSpotify,
  search: searchSpotify,
};

export default SpotifyApiSource;
