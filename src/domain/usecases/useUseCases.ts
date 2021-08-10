import { useContext } from 'react';

import UseCasesContext from './UseCasesContext';

const useUseCases = () => {
  const { authentication } = useContext(UseCasesContext);

  return { authentication: authentication! };
};

export default useUseCases;
