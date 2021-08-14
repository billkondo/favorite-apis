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
  const [favoritedApiSourceKeys, setFavoritedApiSourceKeys] = useState<
    Array<string>
  >([]);

  const [updatedList, setUpdatedList] = useState<Array<any>>([]);

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
    const newFavoritedMap: { [key: string]: any } = {};
    for (const item of updatedList) newFavoritedMap[item.id] = item;

    const markedSources: { [key: string]: any } = {};
    const selectedSources: Array<string> = [];
    for (const item of updatedList)
      if (!markedSources[item.key]) {
        markedSources[item.key] = item;
        selectedSources.push(item.key);
      }

    setFavoritedMap(newFavoritedMap);
    setFavoritedList(updatedList);
    setFavoritedApiSourceKeys(selectedSources);
  }, [updatedList]);

  useEffect(() => {
    if (authenticated) submit();
    else setUpdatedList([]);

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

      if (favorited) setUpdatedList((updatedList) => updatedList.concat(item));
      else
        setUpdatedList((updatedList) =>
          updatedList.filter((_item) => _item.id !== item.id)
        );
    },
    [favoritedUseCases]
  );

  return (
    <FavoritedContext.Provider
      value={{
        favoritedList,
        favoritedMap,
        favoritedApiSourceKeys,

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
