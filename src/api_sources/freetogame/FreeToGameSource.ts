import ApiSourceType from 'api_sources/ApiSourceType';

import FreeToGameForm from './FreeToGameForm';
import FreeToGameItemType from './FreeToGameItemType';

import FREE_TO_GAME_KEY from './FreeToGameKey';
import FreeToGameRenderButton from './FreeToGameRenderButton';
import FreeToGameRenderCheckBoxes from './FreeToGameRenderCheckBoxes';
import FreeToGameRenderCheckedInputs from './FreeToGameRenderCheckedInputs';
import FreeToGameRenderItem from './FreeToGameRenderItem';
import FreeToGameRenderSearchBar from './FreeToGameRenderSearchBar';
import FreeToGameSearch from './FreeToGameSearch';
import FreeToGameFilter from './FreeToGameFilter';

const FreeToGameSource: ApiSourceType<FreeToGameItemType, FreeToGameForm> = {
  key: FREE_TO_GAME_KEY,

  apiName: 'FreeToGame',

  defaultPageSize: 20,
  pageSizes: ['10', '20', '30'],

  renderButton: FreeToGameRenderButton,
  renderItem: FreeToGameRenderItem,
  renderSearchBar: FreeToGameRenderSearchBar,
  renderCheckBoxes: FreeToGameRenderCheckBoxes,
  renderCheckedInputs: FreeToGameRenderCheckedInputs,

  search: FreeToGameSearch,
  filter: FreeToGameFilter,
};

export default FreeToGameSource;
