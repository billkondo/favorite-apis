import { FC, useMemo } from 'react';

import AuthenticationUseCases from 'domain/authentication/usecases/authentication_usecases';
import FavoritedUseCases from 'domain/favorited/usecases/favorited_usecases';

import UseCasesContext from './UseCasesContext';

const UseCasesProvider: FC = ({ children }) => {
  const authenticationUseCases = useMemo(() => AuthenticationUseCases(), []);
  const favoritedUseCases = useMemo(() => FavoritedUseCases(), []);

  return (
    <UseCasesContext.Provider
      value={{
        authenticationUseCases,
        favoritedUseCases,
      }}
    >
      {children}
    </UseCasesContext.Provider>
  );
};

export default UseCasesProvider;
