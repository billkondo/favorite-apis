import { FC, useState } from 'react';

import UserType from 'domain/user/UserType';
import useUseCases from 'domain/usecases/useUseCases';

import AuthenticationContext from './AuthenticationContext';
import LoginFormType from './LoginFormType';

const AuthenticationProvider: FC = ({ children }) => {
  const { authentication } = useUseCases();

  const [currentUser, setCurrentUser] = useState<UserType | null>(null);

  const login = async (form: LoginFormType) => {
    const user = await authentication.loginUseCase(form);
    setCurrentUser(user);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        authenticated: !!currentUser,
        login: login,
        currentUser: currentUser,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
