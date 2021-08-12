import { FC, useCallback, useEffect, useState } from 'react';

import useUseCases from 'domain/usecases/useUseCases';
import useAuthentication from 'domain/authentication/useAuthentication';

import useSubmit from 'utils/useSubmit';
import delayed from 'utils/delayed';

import FavoritedContext from './FavoritedContext';

const FavoritedProvider: FC = ({ children }) => {
  const { favoritedUseCases } = useUseCases();
  const { authenticated } = useAuthentication();

  const [favoritedList, setFavoritedList] = useState<Array<any>>([]);
  const [favoritedMap, setFavoritedMap] = useState<{ [key: string]: any }>({});

  const [updatedList, setUpdatedList] = useState<Array<any> | null>(null);

  const { done, loading, submit } = useSubmit(
    async () => {
      const favoritedItems = await delayed(
        favoritedUseCases.listFavoritedItemsUseCase()
      );
      return favoritedItems;
    },
    (favoritedItems) => setUpdatedList(favoritedItems)
  );

  useEffect(() => {
    if (updatedList === null) return;
    setUpdatedList(null);

    const newFavoritedMap: { [key: string]: any } = {};
    for (const item of updatedList) newFavoritedMap[item.id] = item;

    setFavoritedMap(newFavoritedMap);
    setFavoritedList(updatedList);
  }, [updatedList]);

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

  const favoriteItem = useCallback(
    async (item: any) => {
      const favorited = await delayed(
        favoritedUseCases.favoriteItemUseCase(item)
      );

      if (favorited) setUpdatedList(favoritedList.concat(item));
      else
        setUpdatedList(favoritedList.filter((_item) => _item.id !== item.id));
    },
    [favoritedUseCases, favoritedList]
  );

  return (
    <FavoritedContext.Provider
      value={{
        favoritedList,
        favoritedMap,

        isFavorited,
        favoriteItem,

        done,
        loading,
      }}
    >
      {children}
    </FavoritedContext.Provider>
  );
};

export default FavoritedProvider;
