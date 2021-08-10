import { createContext } from 'react';

import UserType from 'domain/user/UserType';
import LoginFormType from './LoginFormType';

type AuthenticationContextType = {
  currentUser: UserType | null;
  authenticated: boolean;

  login?: (form: LoginFormType) => Promise<void>;
  logout?: () => Promise<void>;
};
const AuthenticationContext = createContext<AuthenticationContextType>({
  authenticated: false,
  currentUser: null,
});

export default AuthenticationContext;
