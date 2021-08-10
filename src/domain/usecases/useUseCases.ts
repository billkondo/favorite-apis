import { useContext } from 'react';

import UseCasesContext from './UseCasesContext';

const useUseCases = () => {
  const { authenticationUseCases } = useContext(UseCasesContext);

  return { authenticationUseCases: authenticationUseCases! };
};

export default useUseCases;
