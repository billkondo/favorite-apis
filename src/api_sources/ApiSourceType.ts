import QueryResultType from 'domain/query/QueryResultType';
import QueryType from 'domain/query/QueryType';

type ApiSourceType<T> = {
  key: string;

  renderButton: (onClick: () => void) => JSX.Element;
  renderItem: (item: T) => JSX.Element;

  search: (query?: QueryType) => Promise<QueryResultType<T>>;
};

export default ApiSourceType;
