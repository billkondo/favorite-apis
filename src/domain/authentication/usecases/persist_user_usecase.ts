import UserType from 'domain/user/UserType';

const persistUserUseCase = (user: UserType) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export default persistUserUseCase;
