import { FC } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';
import { Link } from 'react-router-dom';

import Routes from 'config/routes';

type Props = {
  email: string;
};
const ProfileButton: FC<Props> = ({ email }) => {
  const ProfileMenu = (
    <Menu selectable={false} style={{ minWidth: 160 }}>
      <Menu.Item key="Email" title="User Email">
        <Text>
          <b>{email}</b>
        </Text>
      </Menu.Item>

      <Menu.Item key="Logout">
        <Link to={Routes.LOGOUT} title="Logout Link">
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={ProfileMenu} placement="bottomLeft">
        <Button
          type="primary"
          shape="circle"
          icon={<UserOutlined></UserOutlined>}
          title="Profile Button"
        ></Button>
      </Dropdown>
    </>
  );
};

export default ProfileButton;
