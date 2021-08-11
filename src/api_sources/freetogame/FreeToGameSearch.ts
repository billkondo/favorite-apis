import QueryResultType from 'domain/query/QueryResultType';

import FreeToGameItemType from './FreeToGameItemType';

const FreeToGameSearch = async (): Promise<
  QueryResultType<FreeToGameItemType>
> => {
  return {
    items: [],
    totalCount: 0,
  };
};

export default FreeToGameSearch;
