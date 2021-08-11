import FavoriteService from 'services/favorite/FavoriteService';

const favoriteItemUseCase =
  (favoriteService: FavoriteService) =>
  async (item: any): Promise<boolean> => {
    const favorited = await favoriteService.favorite(item);
    return favorited;
  };

export default favoriteItemUseCase;
