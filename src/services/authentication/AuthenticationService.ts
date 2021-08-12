import LoginFormType from 'domain/authentication/LoginFormType';
import RegisterFormType from 'domain/authentication/RegisterFormType';

import UserType from 'domain/user/UserType';

type AuthenticationService = {
  login: (form: LoginFormType) => Promise<UserType>;
  register: (form: RegisterFormType) => Promise<UserType>;
  logout: () => Promise<void>;
};

export default AuthenticationService;
