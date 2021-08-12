import {
  FREETOGAME_CATEGORY,
  FREETOGAME_PLATFORM,
} from './FreeToGameInputKeys';
import FreeToGameItemType from './FreeToGameItemType';

const FreeToGameValidator = (filters: { [key: string]: string }) => ({
  [FREETOGAME_PLATFORM]: (item: FreeToGameItemType): boolean => {
    if (!filters[FREETOGAME_PLATFORM]) return true;
    if (filters[FREETOGAME_PLATFORM] === 'all') return true;

    return item.platform.toLowerCase().includes(filters[FREETOGAME_PLATFORM]);
  },
  [FREETOGAME_CATEGORY]: (item: FreeToGameItemType): boolean => {
    if (!filters[FREETOGAME_CATEGORY]) return true;

    return item.genre.toLowerCase().includes(filters[FREETOGAME_CATEGORY]);
  },
});

const FreeToGameFilter =
  (filters: { [key: string]: string }) =>
  (item: FreeToGameItemType): boolean => {
    const filterKeys = Object.keys(filters);
    if (!filterKeys.length) return true;

    const freeToGameFilterKeys = [FREETOGAME_PLATFORM, FREETOGAME_CATEGORY];
    const hasAnyFieldSelected = freeToGameFilterKeys
      .map((filterKey) => filterKeys.includes(filterKey))
      .includes(true);
    if (!hasAnyFieldSelected) return false;

    const validations = freeToGameFilterKeys.map((key) =>
      FreeToGameValidator(filters)[key](item)
    );
    const hasAnyValidationFailed = validations.includes(false);

    return !hasAnyValidationFailed;
  };

export default FreeToGameFilter;
