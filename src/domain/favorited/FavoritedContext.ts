import { createContext } from 'react';

type FavoritedContextType = {
  favoritedList: Array<any>;
  favoritedMap: { [key: string]: any };

  isFavorited?: (id: string) => boolean;
  favoriteItem?: (item: any) => Promise<void>;

  done: boolean;
  loading: boolean;
};
const FavoritedContext = createContext<FavoritedContextType>({
  favoritedList: [],
  favoritedMap: {},

  done: false,
  loading: false,
});

export default FavoritedContext;
