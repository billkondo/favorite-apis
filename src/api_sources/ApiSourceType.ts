import QueryType from 'domain/query/QueryType';

type ApiSourceType = {
  key: string;
  renderButton: (onClick: () => void) => JSX.Element;

  search: (query?: QueryType) => Promise<void>;
};

export default ApiSourceType;
