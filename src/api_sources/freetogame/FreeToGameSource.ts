import ApiSourceType from 'api_sources/ApiSourceType';

import FreeToGameForm from './FreeToGameForm';
import FreeToGameItemType from './FreeToGameItemType';

import FREE_TO_GAME_KEY from './FreeToGameKey';

import FreeToGameRenderItem from './FreeToGameRenderItem';

import FreeToGameSearch from './FreeToGameSearch';
import FreeToGameFilter from './FreeToGameFilter';

import {
  FreeToGameApiFields,
  FreeToGameFavoriteFields,
} from './FreeToGameFields';

const FreeToGameSource: ApiSourceType<FreeToGameItemType, FreeToGameForm> = {
  key: FREE_TO_GAME_KEY,

  apiName: 'FreeToGame',

  apiFields: FreeToGameApiFields,
  favoriteFields: FreeToGameFavoriteFields,

  defaultPageSize: 20,
  pageSizes: ['10', '20', '30'],

  renderItem: FreeToGameRenderItem,

  search: FreeToGameSearch,
  filter: FreeToGameFilter,
};

export default FreeToGameSource;
