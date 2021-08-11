import UserType from 'domain/user/UserType';

const readPersistedUserUseCase = (): UserType | null => {
  const savedUser = localStorage.getItem('user');

  if (!savedUser) return null;

  return JSON.parse(savedUser);
};

export default readPersistedUserUseCase;
