import { FC, useMemo } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';

import APP_NAME from 'config/app_name';
import Routes from 'config/routes';

const { Header, Content, Footer } = Layout;

const AppLayout: FC = ({ children }) => {
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
        <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]}>
          <Menu.Item key="1" title="APIs">
            <Link to={Routes.HOME}>APIs</Link>
          </Menu.Item>

          <Menu.Item key="2" title="Favorites">
            <Link to={Routes.FAVORITES}>Favorites</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ padding: 24, minHeight: '100%' }}>{children}</div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>{APP_NAME} ©2021</Footer>
    </Layout>
  );
};

export default AppLayout;
