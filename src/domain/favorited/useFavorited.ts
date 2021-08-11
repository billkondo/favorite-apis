import { useContext } from 'react';

import FavoritedContext from './FavoritedContext';

const useFavorited = () => {
  const { favoritedList, favoritedMap, isFavorited, done, loading } =
    useContext(FavoritedContext);

  return {
    favoritedList,
    favoritedMap,
    isFavorited: isFavorited!,
    done,
    loading,
  };
};

export default useFavorited;
