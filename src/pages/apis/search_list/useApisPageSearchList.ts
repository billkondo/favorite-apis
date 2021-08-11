import { useEffect, useMemo, useState } from 'react';

import { ApiSourcesMap } from 'api_sources';

import useSubmit from 'utils/useSubmit';

const useApisPageSearchList = (apiSourceKey: string) => {
  const apiSource = useMemo(() => ApiSourcesMap[apiSourceKey], [apiSourceKey]);

  const [totalCount, setTotalCount] = useState<number>();
  const [items, setItems] = useState<Array<any>>([]);

  const [query, setQuery] = useState<any>({});

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(
    apiSource.defaultPageSize || 25
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

  const filter = (query: any) => {
    setQuery(query);
    setPage(1);
    submit();
  };

  const repaginate = (pageSize: number) => (page: number) => {
    setPage(page);
    setPageSize(pageSize);

    submit();
  };

  return {
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
