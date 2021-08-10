import { FC, useMemo } from 'react';

import AuthenticationUseCases from 'domain/authentication/usecases/authentication_usecases';

import UseCasesContext from './UseCasesContext';

const UseCasesProvider: FC = ({ children }) => {
  const authenticationUseCases = useMemo(() => AuthenticationUseCases(), []);

  return (
    <UseCasesContext.Provider
      value={{
        authenticationUseCases: authenticationUseCases,
      }}
    >
      {children}
    </UseCasesContext.Provider>
  );
};

export default UseCasesProvider;
