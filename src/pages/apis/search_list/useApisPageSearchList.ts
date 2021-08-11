import { useEffect, useMemo, useState } from 'react';

import { ApiSourcesMap } from 'api_sources';

import useSubmit from 'utils/useSubmit';

const useApisPageSearchList = (apiSourceKey: string) => {
  const apiSource = useMemo(() => ApiSourcesMap[apiSourceKey], [apiSourceKey]);

  const [totalCount, setTotalCount] = useState<number>();
  const [items, setItems] = useState<Array<any>>([]);

  const { submit, loading, done } = useSubmit(
    async () => {
      const queryResult = await apiSource.search();
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

  return {
    totalCount,
    items,

    renderItem: apiSource.renderItem,

    loading,
    done,
  };
};

export default useApisPageSearchList;
