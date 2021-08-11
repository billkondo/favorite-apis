import favoriteItemUseCase from './favorite_item_usecase';
import listFavoritedItemsUseCase from './list_favorited_items_usecase';

const FavoritedUseCases = () => ({
  favoriteItemUseCase,
  listFavoritedItemsUseCase,
});

export type FavoritedUseCasesType = ReturnType<typeof FavoritedUseCases>;

export default FavoritedUseCases;
