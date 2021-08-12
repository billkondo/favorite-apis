import { CheckboxChangeEvent } from 'antd/lib/checkbox';

import QueryResultType from 'domain/query/QueryResultType';

type ApiSourceType<T, S> = {
  key: string;

  apiName: string;

  defaultPageSize?: number;
  pageSizes?: Array<string>;

  renderButton: (onClick: () => void) => JSX.Element;
  renderItem: (item: T) => JSX.Element;
  renderSearchBar: () => JSX.Element;
  renderCheckBoxes: (onChange: (e: CheckboxChangeEvent) => void) => JSX.Element;

  search: (query?: S) => Promise<QueryResultType<T>>;
};

export default ApiSourceType;
