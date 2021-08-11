import { useState } from 'react';

const useApisPage = () => {
  const [selectedApiSourceKey, setSelectedApiSourceKey] = useState<
    string | null
  >(localStorage.getItem('api-source-key'));

  const selectApiSourceKey = (apiSourceKey: string) => {
    setSelectedApiSourceKey(apiSourceKey);
    localStorage.setItem('api-source-key', apiSourceKey);
  };

  const unselectApiSourceKey = () => {
    setSelectedApiSourceKey(null);
    localStorage.removeItem('api-source-key');
  };

  return {
    selectedApiSourceKey,

    showApiSourceOptions: !selectedApiSourceKey,
    showApiSourceSearchList: !!selectedApiSourceKey,

    selectApiSourceKey,
    unselectApiSourceKey,
  };
};

export default useApisPage;
