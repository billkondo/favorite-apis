import { FC, useCallback, useEffect, useState } from 'react';

import UserType from 'domain/user/UserType';
import useUseCases from 'domain/usecases/useUseCases';

import AuthenticationContext from './AuthenticationContext';
import LoginFormType from './LoginFormType';
import RegisterFormType from './RegisterFormType';

const AuthenticationProvider: FC = ({ children }) => {
  const { authenticationUseCases } = useUseCases();

  const [currentUser, setCurrentUser] = useState<UserType | null>(
    authenticationUseCases.readPersistedUserUseCase()
  );

  useEffect(() => {
    if (currentUser) authenticationUseCases.persistUserUseCase(currentUser);
  }, [currentUser, authenticationUseCases]);

  const login = useCallback(
    async (form: LoginFormType) => {
      const user = await authenticationUseCases.loginUseCase(form);
      setCurrentUser(user);
    },
    [authenticationUseCases]
  );

  const register = useCallback(
    async (form: RegisterFormType) => {
      const user = await authenticationUseCases.registerUseCase(form);
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
        register: register,
        logout: logout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
