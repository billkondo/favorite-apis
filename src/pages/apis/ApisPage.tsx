import ApisPageSearchList from './search_list/ApisPageSearchList';
import ApisPageSourceOptions from './source_options/ApisPageSourceOptions';

import useApisPage from './useApisPage';

const ApisPage = () => {
  const {
    selectedApiSourceKey,

    showApiSourceOptions,
    showApiSourceSearchList,

    selectApiSourceKey,
    unselectApiSourceKey,
  } = useApisPage();

  return (
    <>
      {showApiSourceOptions && (
        <ApisPageSourceOptions
          selectApiSourceKey={selectApiSourceKey}
        ></ApisPageSourceOptions>
      )}

      {showApiSourceSearchList && (
        <ApisPageSearchList
          selectedKey={selectedApiSourceKey!}
          unselectKey={unselectApiSourceKey}
        ></ApisPageSearchList>
      )}
    </>
  );
};

export default ApisPage;
