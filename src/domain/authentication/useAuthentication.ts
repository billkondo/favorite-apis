import { useContext } from 'react';

import AuthenticationContext from './AuthenticationContext';

const useAuthentication = () => {
  const { currentUser, authenticated, login, logout } = useContext(
    AuthenticationContext
  );

  return { currentUser, authenticated, login: login!, logout: logout! };
};

export default useAuthentication;
