import LoginFormType from 'domain/authentication/LoginFormType';
import UserType from 'domain/user/UserType';

import AuthenticationService from 'services/authentication/AuthenticationService';

const loginUseCase =
  (authenticationServices: AuthenticationService) =>
  async (form: LoginFormType): Promise<UserType> => {
    const user = await authenticationServices.login(form);
    return user;
  };

export default loginUseCase;
