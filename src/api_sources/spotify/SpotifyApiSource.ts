import ApiSourceType from 'api_sources/ApiSourceType';

import SPOTIFY_KEY from './keySpotify';
import renderButtonSpotify from './renderButtonSpotify';
import renderItemSpotify from './renderItemSpotify';
import searchSpotify from './searchSpotify';

const SpotifyApiSource: ApiSourceType<any> = {
  key: SPOTIFY_KEY,

  renderButton: renderButtonSpotify,
  renderItem: renderItemSpotify,

  search: searchSpotify,
};

export default SpotifyApiSource;
