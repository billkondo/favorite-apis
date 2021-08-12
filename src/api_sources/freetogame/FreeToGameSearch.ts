import QueryResultType from 'domain/query/QueryResultType';

import FREETOGAME_KEY from './FreeToGameKey';

import FreeToGameForm from './FreeToGameForm';
import FreeToGameItemType from './FreeToGameItemType';

import FreeToGameApiCall from './FreeToGameApiCall';

type FreeToGameResponseItem = {
  id: number;

  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;

  freetogame_profile_url: string;
};

type FreeToGameResponse = {
  items_count: number;
  items: Array<FreeToGameResponseItem>;
};

const FreeToGameSearch = async (
  query: FreeToGameForm = {
    category: '',
    platform: '',
    sortBy: '',
    page: 1,
    pageSize: 20,
  }
): Promise<QueryResultType<FreeToGameItemType>> => {
  const {
    sortBy = '',
    platform = '',
    category = '',
    page = 1,
    pageSize = 20,
  } = query;

  let queryString = '';

  if (platform) queryString += `&platform=${platform}`;
  if (category) queryString += `&category=${category}`;
  if (sortBy) queryString += `&sort-by=${sortBy}`;

  const queryStringWithFirstLetterRemoved = queryString.slice(1);
  const response = await FreeToGameApiCall(queryStringWithFirstLetterRemoved);
  const { items, items_count } = response.data as FreeToGameResponse;

  const pagedResults = items
    .slice((page - 1) * pageSize, page * pageSize)
    .map(mapResponseItemToItemType);

  return {
    items: pagedResults,
    totalCount: items_count,
  };
};

const mapResponseItemToItemType = (
  item: FreeToGameResponseItem
): FreeToGameItemType => ({
  id: `${FREETOGAME_KEY}_${item.id}`,
  developer: item.developer,
  genre: item.genre,
  platform: item.platform,
  publisher: item.publisher,
  releaseDate: item.release_date,
  shortDescription: item.short_description,
  thumbnail: item.thumbnail,
  title: item.title,
  url: item.game_url,
  key: FREETOGAME_KEY,
});

export default FreeToGameSearch;
