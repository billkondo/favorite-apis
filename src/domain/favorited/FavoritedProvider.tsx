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

  const { done, loading, submit } = useSubmit(
    async () => {
      const favoritedItems = await delayed(
        favoritedUseCases.listFavoritedItemsUseCase()
      );
      return favoritedItems;
    },
    (favoritedItems) => {
      const initialMap: { [key: string]: any } = {};
      for (const item of favoritedItems) initialMap[item.id] = item;

      setFavoritedMap(initialMap);
      setFavoritedList(favoritedItems);
    }
  );

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

      if (favorited) {
        setFavoritedList((oldList) => oldList.concat(item));
        setFavoritedMap((oldMap) => {
          const newMap = {
            ...oldMap,
            [item.id]: item,
          };

          return newMap;
        });
      } else {
        setFavoritedList((oldList) =>
          oldList.filter((oldItem) => oldItem.id !== item.id)
        );
        setFavoritedMap((oldMap) => {
          const newMap = {
            ...oldMap,
          };

          delete newMap[item.id];

          return newMap;
        });
      }
    },
    [favoritedUseCases]
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
