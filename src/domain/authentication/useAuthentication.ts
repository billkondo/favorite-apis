import { useContext } from 'react';

import AuthenticationContext from './AuthenticationContext';

const useAuthentication = () => {
  const { currentUser, authenticated, login, register, logout } = useContext(
    AuthenticationContext
  );

  return {
    currentUser,
    authenticated,
    login: login!,
    register: register!,
    logout: logout!,
  };
};

export default useAuthentication;
