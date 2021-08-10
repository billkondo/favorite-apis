import { FC, useMemo } from 'react';
import { Button, Col, Layout, Menu, Row } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';

import APP_NAME from 'config/app_name';
import Routes from 'config/routes';

import ProfileButton from 'components/ProfileButton';

import useAuthentication from 'domain/authentication/useAuthentication';

const { Header, Content, Footer } = Layout;

const AppLayout: FC = ({ children }) => {
  const { authenticated, currentUser } = useAuthentication();
  const email = currentUser ? currentUser.email : '';

  const inApiRoute = !!useRouteMatch({ path: Routes.HOME, exact: true });
  const inFavoritesRoute = !!useRouteMatch({
    path: Routes.FAVORITES,
    exact: true,
  });

  const selectedKey = useMemo(() => {
    if (inApiRoute) return '1';
    if (inFavoritesRoute) return '2';
    return '-1';
  }, [inApiRoute, inFavoritesRoute]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Row justify="space-between">
          <Col>
            <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]}>
              <Menu.Item key="1" title="APIs">
                <Link to={Routes.HOME}>APIs</Link>
              </Menu.Item>

              <Menu.Item key="2" title="Favorites">
                <Link to={Routes.FAVORITES}>Favorites</Link>
              </Menu.Item>
            </Menu>
          </Col>

          <Col>
            {!authenticated && <AuthenticationButtons></AuthenticationButtons>}
            {authenticated && <ProfileButton email={email}></ProfileButton>}
          </Col>
        </Row>
      </Header>

      <Content style={{ padding: '0 50px', marginTop: 64, width: '100%' }}>
        <div style={{ padding: 24, minHeight: '100%' }}>{children}</div>
      </Content>

      <Footer style={{ textAlign: 'center', width: '100%' }}>
        {APP_NAME} ©2021
      </Footer>
    </Layout>
  );
};

const AuthenticationButtons = () => {
  return (
    <>
      <Link to={Routes.LOGIN}>
        <Button ghost title="Login Button">
          Login
        </Button>
      </Link>

      <Link to={Routes.REGISTER}>
        <Button title="Register Button" style={{ marginLeft: 16 }}>
          Register
        </Button>
      </Link>
    </>
  );
};

export default AppLayout;
