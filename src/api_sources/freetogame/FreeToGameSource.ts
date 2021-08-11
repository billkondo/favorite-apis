import ApiSourceType from 'api_sources/ApiSourceType';

import FreeToGameForm from './FreeToGameForm';
import FreeToGameItemType from './FreeToGameItemType';

import FREE_TO_GAME_KEY from './FreeToGameKey';
import FreeToGameRenderButton from './FreeToGameRenderButton';
import FreeToGameRenderItem from './FreeToGameRenderItem';
import FreeToGameRenderSearchBar from './FreeToGameRenderSearchBar';
import FreeToGameSearch from './FreeToGameSearch';

const FreeToGameSource: ApiSourceType<FreeToGameItemType, FreeToGameForm> = {
  key: FREE_TO_GAME_KEY,

  apiName: 'FREETOGAME',

  renderButton: FreeToGameRenderButton,
  renderItem: FreeToGameRenderItem,
  renderSearchBar: FreeToGameRenderSearchBar,

  search: FreeToGameSearch,
};

export default FreeToGameSource;
