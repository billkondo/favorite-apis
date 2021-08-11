import ApiSourceType from 'api_sources/ApiSourceType';

import SPOTIFY_KEY from './keySpotify';

import renderButtonSpotify from './renderButtonSpotify';
import renderItemSpotify from './renderItemSpotify';
import renderSearchBarSpotify from './renderSearchBarSpotify';

import searchSpotify from './searchSpotify';

const SpotifyApiSource: ApiSourceType<any, any> = {
  key: SPOTIFY_KEY,

  renderButton: renderButtonSpotify,
  renderItem: renderItemSpotify,
  renderSearchBar: renderSearchBarSpotify,

  search: searchSpotify,
};

export default SpotifyApiSource;
