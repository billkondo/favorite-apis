import useAuthentication from 'domain/authentication/useAuthentication';
import useFavorited from 'domain/favorited/useFavorited';

const useFavoritesPage = () => {
  const { authenticated } = useAuthentication();
  const { favoritedList, favoritedApiSourceKeys, done, loading } =
    useFavorited();

  return {
    authenticated,
    favoritedList,
    favoritedApiSourceKeys,
    done,
    loading,
  };
};

export default useFavoritesPage;
