import { Row } from 'antd';
import Title from 'antd/lib/typography/Title';

import APP_NAME from 'config/app_name';

import useLogoutPage from './useLogoutPage';

const LogoutPage = () => {
  const { authenticated } = useLogoutPage();

  return (
    <>
      <Row justify="center">
        {authenticated ? (
          <Title title="Logging out warning">Loggint out</Title>
        ) : (
          <Title title="Logged out warning">You are logged out</Title>
        )}
      </Row>

      <Row justify="center">
        <Title level={4}>Thanks for using {APP_NAME}</Title>
      </Row>
    </>
  );
};

export default LogoutPage;
