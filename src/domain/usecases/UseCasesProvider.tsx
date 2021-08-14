import { FC, useMemo } from 'react';

import { LOCAL } from 'config/environment';

import AuthenticationUseCases from 'domain/authentication/usecases/authentication_usecases';
import FavoritedUseCases from 'domain/favorited/usecases/favorited_usecases';

import AuthenticationServiceFirebase from 'services/authentication/firebase';
import FavoriteServiceFirebase from 'services/favorite/firebase';

import AuthenticationServiceLocal from 'services/authentication/local';
import FavoriteServiceLocal from 'services/favorite/local';

import UseCasesContext from './UseCasesContext';

const UseCasesProvider: FC = ({ children }) => {
  const authenticationService = LOCAL
    ? AuthenticationServiceLocal
    : AuthenticationServiceFirebase;
  const authenticationUseCases = useMemo(
    () => AuthenticationUseCases(authenticationService),
    [authenticationService]
  );

  const favoriteService = LOCAL
    ? FavoriteServiceLocal
    : FavoriteServiceFirebase;
  const favoritedUseCases = useMemo(
    () => FavoritedUseCases(favoriteService),
    [favoriteService]
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
