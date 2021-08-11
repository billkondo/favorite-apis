import UserType from 'domain/user/UserType';

const listFavoritedItemsUseCase = async (user: UserType) => {
  console.log('list', user);
};

export default listFavoritedItemsUseCase;
