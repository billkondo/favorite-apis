import { createContext } from 'react';

import authenticationUseCases from 'domain/authentication/usecases/authentication_usecases';

type UseCasesContextType = {
  authentication?: typeof authenticationUseCases;
};
const UseCasesContext = createContext<UseCasesContextType>({});

export default UseCasesContext;
