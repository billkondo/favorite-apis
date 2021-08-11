import FavoriteService from 'services/favorite/FavoriteService';

import favoriteItemUseCase from './favorite_item_usecase';
import listFavoritedItemsUseCase from './list_favorited_items_usecase';

const FavoritedUseCases = (favoriteService: FavoriteService) => ({
  favoriteItemUseCase: favoriteItemUseCase(favoriteService),
  listFavoritedItemsUseCase: listFavoritedItemsUseCase(favoriteService),
});

export type FavoritedUseCasesType = ReturnType<typeof FavoritedUseCases>;

export default FavoritedUseCases;
