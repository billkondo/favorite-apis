import { useEffect, useMemo, useState } from 'react';

import { ApiSourcesMap } from 'api_sources';

import useSubmit from 'utils/useSubmit';

import SEARCH_FIELDS_LOCAL_STORAGE_KEY from '../search_fields_key';

const useApisPageSearchList = (apiSourceKey: string) => {
  const apiSource = useMemo(() => ApiSourcesMap[apiSourceKey], [apiSourceKey]);

  const persistedQuery = localStorage.getItem(SEARCH_FIELDS_LOCAL_STORAGE_KEY);
  const savedQuery = persistedQuery ? JSON.parse(persistedQuery) : {};

  const [totalCount, setTotalCount] = useState<number>();
  const [items, setItems] = useState<Array<any>>([]);

  const [query, setQuery] = useState<any>(savedQuery);

  const [page, setPage] = useState<number>(savedQuery.page || 1);
  const [pageSize, setPageSize] = useState<number>(
    savedQuery.pageSize || apiSource.defaultPageSize || 25
  );

  const { submit, loading, done } = useSubmit(
    async () => {
      const queryResult = await apiSource.search({
        ...query,
        page,
        pageSize,
      });
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

  useEffect(() => {
    const newQuery = {
      ...query,
      page,
      pageSize,
    };

    localStorage.setItem(
      SEARCH_FIELDS_LOCAL_STORAGE_KEY,
      JSON.stringify(newQuery)
    );
  }, [page, pageSize, query]);

  const filter = (query: any) => {
    setQuery(query);
    setPage(1);
    submit();
  };

  const repaginate = (pageSize: number | undefined) => (page: number) => {
    setPage(page);
    if (pageSize) setPageSize(pageSize);

    submit();
  };

  return {
    initialQuery: savedQuery,

    totalCount,
    items,

    apiName: apiSource.apiName,

    renderItem: apiSource.renderItem,
    renderSearchBar: apiSource.renderSearchBar,

    filter,

    loading,
    done,

    page,
    pageSize,
    pagesSize: apiSource.pageSizes || [],
    hidePagination: !apiSource.pageSizes,
    repaginate,
  };
};

export default useApisPageSearchList;
