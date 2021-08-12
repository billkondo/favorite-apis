import { useEffect, useState } from 'react';

import SEARCH_FIELDS_LOCAL_STORAGE_KEY from './search_fields_key';

const useApisPage = () => {
  const [selectedApiSourceKey, setSelectedApiSourceKey] = useState<
    string | null
  >(localStorage.getItem('api-source-key'));

  useEffect(() => {
    if (selectedApiSourceKey)
      localStorage.setItem('api-source-key', selectedApiSourceKey);
    else {
      localStorage.removeItem('api-source-key');
      localStorage.removeItem(SEARCH_FIELDS_LOCAL_STORAGE_KEY);
    }
  }, [selectedApiSourceKey]);

  const selectApiSourceKey = (apiSourceKey: string) =>
    setSelectedApiSourceKey(apiSourceKey);

  const unselectApiSourceKey = () => setSelectedApiSourceKey(null);

  return {
    selectedApiSourceKey,

    showApiSourceOptions: !selectedApiSourceKey,
    showApiSourceSearchList: !!selectedApiSourceKey,

    selectApiSourceKey,
    unselectApiSourceKey,
  };
};

export default useApisPage;
