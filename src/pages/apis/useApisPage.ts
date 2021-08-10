import { useState } from 'react';

const useApisPage = () => {
  const [selectedApiSourceKey, setSelectedApiSourceKey] = useState<
    string | null
  >(null);

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
