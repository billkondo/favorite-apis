import { useEffect } from 'react';

import useAuthentication from 'domain/authentication/useAuthentication';

import useSubmit from 'utils/useSubmit';

const useLogoutPage = () => {
  const { authenticated, logout } = useAuthentication();

  const { submit } = useSubmit(async () => {
    await logout();
  });

  useEffect(() => {
    submit();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { authenticated };
};

export default useLogoutPage;
