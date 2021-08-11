import { FC } from 'react';
import { Row, Spin } from 'antd';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

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
        <Row style={{ padding: 4 }}>
          <Spin size="large"></Spin>
        </Row>
      )}

      {done && (
        <Row style={{ padding: 4 }}>
          <Text>
            You have <b>{size}</b> favorited items
          </Text>
        </Row>
      )}
    </>
  );
};

export default FavoritesList;
