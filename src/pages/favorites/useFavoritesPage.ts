import useAuthentication from 'domain/authentication/useAuthentication';

const useFavoritesPage = () => {
  const { authenticated } = useAuthentication();

  return { authenticated };
};

export default useFavoritesPage;
