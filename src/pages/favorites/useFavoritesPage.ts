import useAuthentication from 'domain/authentication/useAuthentication';
import useFavorited from 'domain/favorited/useFavorited';

const useFavoritesPage = () => {
  const { authenticated } = useAuthentication();
  const { favoritedList, done, loading } = useFavorited();

  return { authenticated, favoritedList, done, loading };
};

export default useFavoritesPage;
