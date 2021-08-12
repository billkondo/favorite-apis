import { FC, useMemo } from 'react';

import AuthenticationUseCases from 'domain/authentication/usecases/authentication_usecases';
import FavoritedUseCases from 'domain/favorited/usecases/favorited_usecases';

import AuthenticationServiceLocal from 'services/authentication/local';
import FavoriteServiceLocal from 'services/favorite/local';

import UseCasesContext from './UseCasesContext';

const UseCasesProvider: FC = ({ children }) => {
  const authenticationUseCases = useMemo(
    () => AuthenticationUseCases(AuthenticationServiceLocal),
    []
  );
  const favoritedUseCases = useMemo(
    () => FavoritedUseCases(FavoriteServiceLocal),
    []
  );

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
