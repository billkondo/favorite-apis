import { useContext } from 'react';

import FavoritedContext from './FavoritedContext';

const useFavorited = () => {
  const {
    favoritedList,
    favoritedMap,
    favoritedApiSourceKeys,

    isFavorited,
    favoriteItem,
    getFavoritedList,

    done,
    loading,
    failed,
  } = useContext(FavoritedContext);

  return {
    favoritedList,
    favoritedMap,
    favoritedApiSourceKeys,

    isFavorited: isFavorited!,
    favoriteItem: favoriteItem!,
    getFavoritedList,

    done,
    loading,
    failed,
  };
};

export default useFavorited;
