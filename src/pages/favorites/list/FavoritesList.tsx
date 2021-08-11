import { FC } from 'react';
import { Row, Spin } from 'antd';
import Title from 'antd/lib/typography/Title';

type Props = {
  favoritesList: Array<any>;

  done: boolean;
  loading: boolean;
};
const FavoritesList: FC<Props> = ({ favoritesList = [], done, loading }) => {
  const size = favoritesList.length;

  return (
    <>
      <Row style={{ marginBottom: 24 }}>
        <Title level={2}>Your favorite items</Title>
      </Row>

      {loading && (
        <Row>
          <Spin size="large"></Spin>
        </Row>
      )}

      {done && (
        <Row>
          <Title level={4}>
            You have <b>{size}</b> favorited items
          </Title>
        </Row>
      )}
    </>
  );
};

export default FavoritesList;
