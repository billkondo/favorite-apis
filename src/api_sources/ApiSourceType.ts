import QueryResultType from 'domain/query/QueryResultType';

import ApiSourceField from './ApiSourceField';

type ApiSourceType<T, S> = {
  key: string;
  apiName: string;

  // Fields that will appear in APIs page
  apiFields: Array<ApiSourceField>;

  // Checkboxes that will appear in Favorites page
  favoriteFields: Array<ApiSourceField>;

  defaultPageSize?: number;
  pageSizes?: Array<string>;

  renderItem: (item: T) => JSX.Element;

  search: (query?: S) => Promise<QueryResultType<T>>;
  filter: (filters: { [key: string]: string }) => (item: T) => boolean;
};

export default ApiSourceType;
