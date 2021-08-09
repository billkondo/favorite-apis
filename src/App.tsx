import { Layout, Menu } from 'antd';

import 'antd/dist/antd.css';

import APP_NAME from './config/app_name';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">APIs</Menu.Item>
          <Menu.Item key="2">Favorites</Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ padding: 24, minHeight: '100%' }}>Content</div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>{APP_NAME} ©2021</Footer>
    </Layout>
  );
};

export default App;
