import { useContext } from 'react';

import AuthenticationContext from './AuthenticationContext';

const useAuthentication = () => {
  const { authenticated, login } = useContext(AuthenticationContext);

  return { authenticated, login: login! };
};

export default useAuthentication;
