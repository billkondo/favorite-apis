import QueryResultType from 'domain/query/QueryResultType';
import QueryType from 'domain/query/QueryType';

const searchSpotify = async (
  query?: QueryType
): Promise<QueryResultType<any>> => {
  return {
    totalCount: 0,
    items: [],
  };
};

export default searchSpotify;
