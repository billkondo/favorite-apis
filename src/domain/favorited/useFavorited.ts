import { useContext } from 'react';

import FavoritedContext from './FavoritedContext';

const useFavorited = () => {
  const {
    favoritedList,
    favoritedMap,

    isFavorited,
    favoriteItem,

    done,

    loading,
  } = useContext(FavoritedContext);

  return {
    favoritedList,
    favoritedMap,

    isFavorited: isFavorited!,
    favoriteItem: favoriteItem!,

    done,
    loading,
  };
};

export default useFavorited;
