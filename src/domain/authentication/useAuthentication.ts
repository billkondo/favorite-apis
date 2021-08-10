import { useContext } from 'react';

import AuthenticationContext from './AuthenticationContext';

const useAuthentication = () => {
  const { authenticated, login, currentUser } = useContext(
    AuthenticationContext
  );

  return { authenticated, login: login!, currentUser };
};

export default useAuthentication;
