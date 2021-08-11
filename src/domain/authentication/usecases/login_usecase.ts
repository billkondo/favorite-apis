import LoginFormType from 'domain/authentication/LoginFormType';
import UserType from 'domain/user/UserType';

const loginUseCase = async (form: LoginFormType): Promise<UserType> => {
  const { email } = form;

  const user: UserType = { email };

  localStorage.setItem('user', JSON.stringify(user));

  return { email };
};

export default loginUseCase;
