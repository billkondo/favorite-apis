import { CheckboxChangeEvent } from 'antd/lib/checkbox';

import QueryResultType from 'domain/query/QueryResultType';

import ApiSourceField from './ApiSourceField';

type ApiSourceType<T, S> = {
  key: string;
  apiName: string;

  fields: Array<ApiSourceField>;

  defaultPageSize?: number;
  pageSizes?: Array<string>;

  renderButton: (onClick: () => void) => JSX.Element;
  renderItem: (item: T) => JSX.Element;
  renderSearchBar: (params?: {
    initialForm?: S;
    names?: Array<string>;
  }) => JSX.Element;
  renderCheckBoxes: (onChange: (e: CheckboxChangeEvent) => void) => JSX.Element;
  renderCheckedInputs: (checkedInputs: Array<string>) => JSX.Element;

  search: (query?: S) => Promise<QueryResultType<T>>;
  filter: (filters: { [key: string]: string }) => (item: T) => boolean;
};

export default ApiSourceType;
