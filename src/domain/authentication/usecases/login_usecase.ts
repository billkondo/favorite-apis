import LoginFormType from 'domain/authentication/LoginFormType';
import UserType from 'domain/user/UserType';

const loginUseCase = async (form: LoginFormType): Promise<UserType> => {
  const { email } = form;

  const user: UserType = { id: '1', email };

  localStorage.setItem('user', JSON.stringify(user));

  return user;
};

export default loginUseCase;
