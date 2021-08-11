import { createContext } from 'react';

import { AuthenticationUseCasesType } from 'domain/authentication/usecases/authentication_usecases';
import { FavoritedUseCasesType } from 'domain/favorited/usecases/favorited_usecases';

type UseCasesContextType = {
  authenticationUseCases?: AuthenticationUseCasesType;
  favoritedUseCases?: FavoritedUseCasesType;
};
const UseCasesContext = createContext<UseCasesContextType>({});

export default UseCasesContext;
