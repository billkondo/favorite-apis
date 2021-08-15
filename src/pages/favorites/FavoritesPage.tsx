import { Row } from 'antd';
import Title from 'antd/lib/typography/Title';

import FavoritesList from './list/FavoritesList';
import FavoritesPageFailed from './FavoritesPageFailed';
import FavoritesPageLoading from './FavoritesPageLoading';

import useFavoritesPage from './useFavoritesPage';

const FavoritesPage = () => {
  const {
    authenticated,
    favoritedList,
    favoritedApiSourceKeys,

    getFavoritedList,

    done,
    loading,
    failed,
  } = useFavoritesPage();

  return (
    <>
      {!authenticated && (
        <Row justify="center">
          <Title level={2}>You are not authenticated</Title>
        </Row>
      )}

      {authenticated && (
        <>
          <Row style={{ marginBottom: 24 }}>
            <Title level={2}>Your favorite items</Title>
          </Row>

          <div style={{ padding: 4 }}>
            {loading && <FavoritesPageLoading />}
            {failed && <FavoritesPageFailed retry={getFavoritedList} />}
            {done && (
              <FavoritesList
                favoritesList={favoritedList}
                favoriteApiSourceKeys={favoritedApiSourceKeys}
              ></FavoritesList>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default FavoritesPage;
