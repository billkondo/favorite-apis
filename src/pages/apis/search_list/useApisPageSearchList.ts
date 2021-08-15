import { useEffect, useMemo, useState } from 'react';

import { ApiSourcesMap } from 'api_sources';

import useSubmit from 'utils/useSubmit';
import usePersist from 'utils/usePersist';
import delayed from 'utils/delayed';

import SEARCH_FIELDS_LOCAL_STORAGE_KEY from '../search_fields_key';

const useApisPageSearchList = (apiSourceKey: string) => {
  const apiSource = useMemo(() => ApiSourcesMap[apiSourceKey], [apiSourceKey]);

  const [totalCount, setTotalCount] = useState<number>();
  const [items, setItems] = useState<Array<any>>([]);

  const [query, setQuery, initialQuery] = usePersist<{ [key: string]: any }>(
    {
      page: 1,
      pageSize: apiSource.defaultPageSize || 25,
    },
    SEARCH_FIELDS_LOCAL_STORAGE_KEY
  );

  const { submit, loading, done, failed } = useSubmit(
    async () => {
      const queryResult = await delayed(apiSource.search(query));
      return queryResult;
    },
    (queryResult) => {
      const { totalCount, items } = queryResult;
      setTotalCount(totalCount);
      setItems(items);
    }
  );

  useEffect(() => {
    submit();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filter = (newQuery: any) => {
    setQuery((query) => ({
      ...query,
      ...newQuery[apiSourceKey],
      page: 1,
    }));

    submit();
  };

  const repaginate = (pageSize: number | undefined) => (page: number) => {
    setQuery((query) => ({
      ...query,
      page,
      pageSize: pageSize || query.pageSize,
    }));

    submit();
  };

  return {
    initialQuery,

    fields: apiSource.apiFields,

    totalCount,
    items,

    apiName: apiSource.apiName,

    renderItem: apiSource.renderItem,

    filter,

    loading,
    done,
    failed,
    retry: submit,

    page: query.page,
    pageSize: query.pageSize,
    pagesSize: apiSource.pageSizes || [],
    hidePagination: !apiSource.pageSizes,
    repaginate,
  };
};

export default useApisPageSearchList;
