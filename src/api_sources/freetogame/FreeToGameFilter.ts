import isSubstring from 'utils/is_substring';

import FreeToGameItemType from './FreeToGameItemType';

const FreeToGameFilter =
  (filters: { [key: string]: string } = {}) =>
  (item: FreeToGameItemType): boolean => {
    if (!isSubstring(item.platform, filters.platform || '')) return false;
    return isSubstring(item.genre, filters.category || '');
  };

export default FreeToGameFilter;
