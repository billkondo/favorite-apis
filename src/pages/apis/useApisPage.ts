import { useEffect, useState } from 'react';

const useApisPage = () => {
  const [selectedApiSourceKey, setSelectedApiSourceKey] = useState<
    string | null
  >(localStorage.getItem('api-source-key'));

  useEffect(() => {
    if (selectedApiSourceKey)
      localStorage.setItem('api-source-key', selectedApiSourceKey);
    else localStorage.removeItem('api-source-key');
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
