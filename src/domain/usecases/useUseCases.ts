import { useContext } from 'react';

import UseCasesContext from './UseCasesContext';

const useUseCases = () => {
  const { authenticationUseCases, favoritedUseCases } =
    useContext(UseCasesContext);

  return {
    authenticationUseCases: authenticationUseCases!,
    favoritedUseCases: favoritedUseCases!,
  };
};

export default useUseCases;
