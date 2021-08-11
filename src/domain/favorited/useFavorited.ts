import { useContext } from 'react';

import FavoritedContext from './FavoritedContext';

const useFavorited = () => {
  const { favoritedList, favoritedMap, done, loading } =
    useContext(FavoritedContext);

  return { favoritedList, favoritedMap, done, loading };
};

export default useFavorited;
