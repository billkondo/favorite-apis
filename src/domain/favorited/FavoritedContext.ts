import { createContext } from 'react';

type FavoritedContextType = {
  favoritedList: Array<any>;
  favoritedMap: { [key: string]: any };
  favoritedApiSourceKeys: Array<string>;

  isFavorited?: (id: string) => boolean;
  favoriteItem?: (item: any) => Promise<void>;
  getFavoritedList: () => void;

  done: boolean;
  loading: boolean;
  failed: boolean;
};
const FavoritedContext = createContext<FavoritedContextType>({
  favoritedList: [],
  favoritedMap: {},
  favoritedApiSourceKeys: [],

  getFavoritedList: () => {},

  done: false,
  loading: false,
  failed: false,
});

export default FavoritedContext;
