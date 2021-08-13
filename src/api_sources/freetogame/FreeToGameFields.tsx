import ApiSourceField, {
  OptionApiSourceField,
  SELECT_API_SOURCE_FIELD,
} from 'api_sources/ApiSourceField';
import FREETOGAME_KEY from './FreeToGameKey';

const FreeToGameCategories = [
  'mmorpg',
  'shooter',
  'strategy',
  'moba',
  'racing',
  'sports',
  'social',
  'sandbox',
  'open-world',
  'survival',
  'pvp',
  'pve',
  'pixel',
  'voxel',
  'zombie',
  'turn-based',
  'first-person',
  'third-Person',
  'top-down',
  'tank',
  'space',
  'sailing',
  'side-scroller',
  'superhero',
  'permadeath',
  'card',
  'battle-royale',
  'mmo',
  'mmofps',
  'mmotps',
  '3d',
  '2d',
  'anime',
  'fantasy',
  'sci-fi',
  'fighting',
  'action-rpg',
  'action',
  'military',
  'martial-arts',
  'flight',
  'low-spec',
  'tower-defense',
  'horror',
  'mmorts',
];
const categoryOptions: Array<OptionApiSourceField> = FreeToGameCategories.map(
  (category) => ({
    label: category,
    value: category,
  })
);

const FreeToGameFields: Array<ApiSourceField> = [
  {
    type: SELECT_API_SOURCE_FIELD,
    apiSourceKey: FREETOGAME_KEY,
    label: 'Platform',
    name: 'platform',
    group: false,
    options: [
      {
        value: 'pc',
        label: 'PC',
      },
      {
        value: 'browser',
        label: 'Browser',
      },
      {
        value: 'all',
        label: 'All',
      },
    ],
    placeholder: 'PC',
  },
  {
    type: SELECT_API_SOURCE_FIELD,
    apiSourceKey: FREETOGAME_KEY,
    label: 'Category',
    name: 'category',
    group: false,
    options: categoryOptions,
    placeholder: 'shooter',
  },
  {
    type: SELECT_API_SOURCE_FIELD,
    apiSourceKey: FREETOGAME_KEY,
    label: 'Sort By',
    name: 'sortBy',
    group: false,
    options: [
      {
        value: 'release-date',
        label: 'Release Date',
      },
      {
        value: 'alphabetical',
        label: 'Alphabetical',
      },
      {
        value: 'relevance',
        label: 'Relevance',
      },
    ],
    placeholder: 'PC',
  },
];

export default FreeToGameFields;
