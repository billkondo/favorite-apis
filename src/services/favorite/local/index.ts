import FavoriteService from 'services/favorite/FavoriteService';

// The main purpose of this module is to make development easy
// It's not the best option for an production environment

const FAVORITED_LOCAL_STORAGE_KEY = 'favorited';

const readFavoritedItems = (): Array<any> => {
  const savedFavoritedItems = localStorage.getItem(FAVORITED_LOCAL_STORAGE_KEY);
  const favoritedItems = !savedFavoritedItems
    ? []
    : (JSON.parse(savedFavoritedItems) as Array<any>);

  return favoritedItems;
};

const FavoriteServiceLocal: FavoriteService = {
  favorite: async (item: any) => {
    const id = item.id;
    const favoritedItems = readFavoritedItems();
    const isItemFavorited = !!favoritedItems.find((_item) => _item.id === id);

    if (isItemFavorited) {
      localStorage.setItem(
        FAVORITED_LOCAL_STORAGE_KEY,
        JSON.stringify(favoritedItems.filter((_item) => _item.id !== id))
      );

      return false;
    }

    localStorage.setItem(
      FAVORITED_LOCAL_STORAGE_KEY,
      JSON.stringify(favoritedItems.concat(item))
    );

    return true;
  },
  list: async () => {
    const favoritedItems = readFavoritedItems();
    return favoritedItems;
  },
};

export default FavoriteServiceLocal;
