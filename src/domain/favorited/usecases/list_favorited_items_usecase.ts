import FavoriteService from 'services/favorite/FavoriteService';

const listFavoritedItemsUseCase =
  (favoriteService: FavoriteService) => async () => {
    const favoritedItems = await favoriteService.list();
    return favoritedItems;
  };

export default listFavoritedItemsUseCase;
