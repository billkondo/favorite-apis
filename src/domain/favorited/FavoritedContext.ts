import { createContext } from 'react';

type FavoritedContextType = {
  favoritedList: Array<any>;
  favoritedMap: { [key: string]: any };
  favoritedApiSourceKeys: Array<string>;

  isFavorited?: (id: string) => boolean;
  favoriteItem?: (item: any) => Promise<void>;

  done: boolean;
  loading: boolean;
};
const FavoritedContext = createContext<FavoritedContextType>({
  favoritedList: [],
  favoritedMap: {},
  favoritedApiSourceKeys: [],

  done: false,
  loading: false,
});

export default FavoritedContext;
