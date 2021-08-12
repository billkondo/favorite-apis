import RegisterFormType from 'domain/authentication/RegisterFormType';
import UserType from 'domain/user/UserType';

import AuthenticationService from 'services/authentication/AuthenticationService';

const registerUseCase =
  (authenticationServices: AuthenticationService) =>
  async (form: RegisterFormType): Promise<UserType> => {
    const user = await authenticationServices.register(form);
    return user;
  };

export default registerUseCase;
