import { favoriteFunction, listFunction } from 'services/firebase';

import FavoriteService from 'services/favorite/FavoriteService';

const FavoriteServiceFirebase: FavoriteService = {
  favorite: async (item: any) => {
    const response = await favoriteFunction({ item });
    const favorited = response.data as boolean;

    return favorited;
  },
  list: async () => {
    const response = await listFunction();
    const data = response.data as Array<any>;
    const items = data.map((itemData) => itemData.item);

    return items;
  },
};

export default FavoriteServiceFirebase;
