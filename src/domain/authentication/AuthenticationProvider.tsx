import { FC, useCallback, useState } from 'react';

import UserType from 'domain/user/UserType';
import useUseCases from 'domain/usecases/useUseCases';

import AuthenticationContext from './AuthenticationContext';
import LoginFormType from './LoginFormType';

const AuthenticationProvider: FC = ({ children }) => {
  const { authenticationUseCases } = useUseCases();

  const [currentUser, setCurrentUser] = useState<UserType | null>(
    authenticationUseCases.readPersistedUserUseCase()
  );

  const login = useCallback(
    async (form: LoginFormType) => {
      const user = await authenticationUseCases.loginUseCase(form);
      setCurrentUser(user);
    },
    [authenticationUseCases]
  );

  const logout = useCallback(async () => {
    await authenticationUseCases.logoutUseCase();
    setCurrentUser(null);
  }, [authenticationUseCases]);

  return (
    <AuthenticationContext.Provider
      value={{
        currentUser: currentUser,
        authenticated: !!currentUser,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
