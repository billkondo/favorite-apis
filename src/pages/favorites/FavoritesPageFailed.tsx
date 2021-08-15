import { FC } from 'react';
import { Button, Row } from 'antd';
import Title from 'antd/lib/typography/Title';

type Props = {
  retry: () => void;
};
const FavoritesPageFailed: FC<Props> = ({ retry }) => {
  return (
    <>
      <Row>
        <Title type="danger" level={4}>
          Favorites load failed
        </Title>
      </Row>
      <Row>
        <Button type="primary" danger onClick={retry}>
          Try Again
        </Button>
      </Row>
    </>
  );
};

export default FavoritesPageFailed;
