import QueryResultType from 'domain/query/QueryResultType';

const searchSpotify = async (query?: any): Promise<QueryResultType<any>> => {
  return {
    totalCount: 0,
    items: [],
  };
};

export default searchSpotify;
