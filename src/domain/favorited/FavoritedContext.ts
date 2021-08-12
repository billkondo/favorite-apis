import { createContext } from 'react';

type FavoritedContextType = {
  favoritedList: Array<any>;
  favoritedMap: { [key: string]: any };
  favoritedApiSources: Array<string>;

  isFavorited?: (id: string) => boolean;
  favoriteItem?: (item: any) => Promise<void>;

  done: boolean;
  loading: boolean;
};
const FavoritedContext = createContext<FavoritedContextType>({
  favoritedList: [],
  favoritedMap: {},
  favoritedApiSources: [],

  done: false,
  loading: false,
});

export default FavoritedContext;
