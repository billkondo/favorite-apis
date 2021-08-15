import useAuthentication from 'domain/authentication/useAuthentication';
import useFavorited from 'domain/favorited/useFavorited';

const useFavoritesPage = () => {
  const { authenticated } = useAuthentication();
  const {
    favoritedList,
    favoritedApiSourceKeys,

    getFavoritedList,

    done,
    loading,
    failed,
  } = useFavorited();

  return {
    authenticated,
    favoritedList,
    favoritedApiSourceKeys,

    getFavoritedList,

    done,
    loading,
    failed,
  };
};

export default useFavoritesPage;
