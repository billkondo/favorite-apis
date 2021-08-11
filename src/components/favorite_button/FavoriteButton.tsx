import { Button } from 'antd';
import { HeartFilled } from '@ant-design/icons';

import useAuthentication from 'domain/authentication/useAuthentication';

const FavoriteButton = () => {
  const { authenticated } = useAuthentication();

  if (!authenticated) return <></>;

  return (
    <Button
      type="text"
      shape="circle"
      icon={<HeartFilled></HeartFilled>}
      style={{ position: 'absolute', right: 0, top: 0 }}
    ></Button>
  );
};

export default FavoriteButton;
