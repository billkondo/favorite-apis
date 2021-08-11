import UserType from 'domain/user/UserType';

const favoriteItemUseCase =
  (user: UserType) =>
  async (item: any): Promise<boolean> => {
    return true;
  };

export default favoriteItemUseCase;
