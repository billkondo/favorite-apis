import ApiSourceType from 'api_sources/ApiSourceType';

import FreeToGameForm from './FreeToGameForm';
import FreeToGameItemType from './FreeToGameItemType';

import FREE_TO_GAME_KEY from './FreeToGameKey';
import FreeToGameRenderButton from './FreeToGameRenderButton';
import FreeToGameRenderCheckBoxes from './FreeToGameRenderCheckBoxes';
import FreeToGameRenderItem from './FreeToGameRenderItem';
import FreeToGameRenderSearchBar from './FreeToGameRenderSearchBar';
import FreeToGameSearch from './FreeToGameSearch';

const FreeToGameSource: ApiSourceType<FreeToGameItemType, FreeToGameForm> = {
  key: FREE_TO_GAME_KEY,

  apiName: 'FREETOGAME',

  defaultPageSize: 20,
  pageSizes: ['10', '20', '30'],

  renderButton: FreeToGameRenderButton,
  renderItem: FreeToGameRenderItem,
  renderSearchBar: FreeToGameRenderSearchBar,
  renderCheckBoxes: FreeToGameRenderCheckBoxes,

  search: FreeToGameSearch,
};

export default FreeToGameSource;
