import { FC } from 'react';

import authenticationUseCases from 'domain/authentication/usecases/authentication_usecases';

import UseCasesContext from './UseCasesContext';

const UseCasesProvider: FC = ({ children }) => {
  return (
    <UseCasesContext.Provider
      value={{
        authentication: authenticationUseCases,
      }}
    >
      {children}
    </UseCasesContext.Provider>
  );
};

export default UseCasesProvider;
