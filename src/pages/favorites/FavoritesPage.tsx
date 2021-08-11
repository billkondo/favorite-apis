import { Row } from 'antd';
import Title from 'antd/lib/typography/Title';

import FavoritesList from './list/FavoritesList';

import useFavoritesPage from './useFavoritesPage';

const FavoritesPage = () => {
  const { authenticated, favoritedList, done, loading } = useFavoritesPage();

  return (
    <>
      {!authenticated && (
        <Row justify="center">
          <Title level={2}>You are not authenticated</Title>
        </Row>
      )}

      {authenticated && (
        <FavoritesList
          favoritesList={favoritedList}
          done={done}
          loading={loading}
        ></FavoritesList>
      )}
    </>
  );
};

export default FavoritesPage;
