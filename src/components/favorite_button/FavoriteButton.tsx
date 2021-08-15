import { FC } from 'react';
import { Button } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';

import useFavoriteButton from './useFavoriteButton';

type Props = {
  id: string;
  item: any;
};
const FavoriteButton: FC<Props> = ({ id, item }) => {
  const { visible, favorited, loading, favorite } = useFavoriteButton(id, item);

  if (!visible) return <></>;

  return (
    <Button
      type="text"
      shape="circle"
      icon={favorited ? <HeartFilled /> : <HeartOutlined />}
      style={{ position: 'absolute', right: 0, top: 0 }}
      loading={loading}
      onClick={favorite}
    ></Button>
  );
};

export default FavoriteButton;
