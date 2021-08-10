import { createContext } from 'react';

import { AuthenticationUseCasesType } from 'domain/authentication/usecases/authentication_usecases';

type UseCasesContextType = {
  authentication?: AuthenticationUseCasesType;
};
const UseCasesContext = createContext<UseCasesContextType>({});

export default UseCasesContext;
