import { Row } from 'antd';
import Title from 'antd/lib/typography/Title';

import useFavoritesPage from './useFavoritesPage';

const FavoritesPage = () => {
  const { authenticated } = useFavoritesPage();

  return (
    <>
      {!authenticated && (
        <Row justify="center">
          <Title level={2}>You are not authenticated</Title>
        </Row>
      )}
    </>
  );
};

export default FavoritesPage;
