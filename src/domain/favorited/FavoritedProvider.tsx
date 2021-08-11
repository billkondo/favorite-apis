import { FC, useCallback, useEffect, useState } from 'react';

import useUseCases from 'domain/usecases/useUseCases';
import useAuthentication from 'domain/authentication/useAuthentication';

import useSubmit from 'utils/useSubmit';
import delayed from 'utils/delayed';

import FavoritedContext from './FavoritedContext';

const FavoritedProvider: FC = ({ children }) => {
  const { favoritedUseCases } = useUseCases();
  const { authenticated, currentUser } = useAuthentication();

  const [favoritedList, setFavoritedList] = useState<Array<any>>([]);
  const [favoritedMap, setFavoritedMap] = useState<{ [key: string]: any }>({});

  const { done, loading, submit } = useSubmit(async () => {
    const favoritedItems = await delayed(
      favoritedUseCases.listFavoritedItemsUseCase(currentUser!)
    );
    return favoritedItems;
  });

  useEffect(() => {
    if (authenticated) submit();
    else {
      setFavoritedList([]);
      setFavoritedMap({});
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated]);

  const isFavorited = useCallback(
    (id: string) => !!favoritedMap[id],
    [favoritedMap]
  );

  return (
    <FavoritedContext.Provider
      value={{
        favoritedList,
        favoritedMap,

        isFavorited,

        done,
        loading,
      }}
    >
      {children}
    </FavoritedContext.Provider>
  );
};

export default FavoritedProvider;
