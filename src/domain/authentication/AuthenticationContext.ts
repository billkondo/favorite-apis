import { createContext } from 'react';

import LoginFormType from './LoginFormType';

type AuthenticationContextType = {
  authenticated: boolean;
  login?: (form: LoginFormType) => Promise<void>;
};
const AuthenticationContext = createContext<AuthenticationContextType>({
  authenticated: false,
});

export default AuthenticationContext;
