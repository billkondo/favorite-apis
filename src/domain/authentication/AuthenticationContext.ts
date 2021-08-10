import { createContext } from 'react';

import UserType from 'domain/user/UserType';
import LoginFormType from './LoginFormType';

type AuthenticationContextType = {
  authenticated: boolean;
  login?: (form: LoginFormType) => Promise<void>;
  currentUser: UserType | null;
};
const AuthenticationContext = createContext<AuthenticationContextType>({
  authenticated: false,
  currentUser: null,
});

export default AuthenticationContext;
