import { FC, useMemo } from 'react';
import { Button } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';

import useAuthentication from 'domain/authentication/useAuthentication';
import useFavorited from 'domain/favorited/useFavorited';

type Props = {
  id: string;
};
const FavoriteButton: FC<Props> = ({ id }) => {
  const { isFavorited } = useFavorited();
  const { authenticated } = useAuthentication();

  const favorited = useMemo(() => isFavorited(id), [id, isFavorited]);

  if (!authenticated) return <></>;

  return (
    <Button
      type="text"
      shape="circle"
      icon={favorited ? <HeartFilled /> : <HeartOutlined />}
      style={{ position: 'absolute', right: 0, top: 0 }}
    ></Button>
  );
};

export default FavoriteButton;
