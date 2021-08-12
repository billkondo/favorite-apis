import useAuthentication from 'domain/authentication/useAuthentication';
import useFavorited from 'domain/favorited/useFavorited';

const useFavoritesPage = () => {
  const { authenticated } = useAuthentication();
  const { favoritedList, favoritedApiSources, done, loading } = useFavorited();

  return { authenticated, favoritedList, favoritedApiSources, done, loading };
};

export default useFavoritesPage;
