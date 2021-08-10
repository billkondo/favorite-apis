import { useEffect, useMemo } from 'react';

import { ApiSourcesMap } from 'api_sources';

import useSubmit from 'utils/useSubmit';

const useApisPageSearchList = (apiSourceKey: string) => {
  const apiSource = useMemo(() => ApiSourcesMap[apiSourceKey], [apiSourceKey]);

  const { submit } = useSubmit(async () => {
    await apiSource.search();
  });

  useEffect(() => {
    submit();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {};
};

export default useApisPageSearchList;
