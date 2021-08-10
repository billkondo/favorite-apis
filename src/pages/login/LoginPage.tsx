import { Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import { red } from '@ant-design/colors';

import APP_NAME from 'config/app_name';

import LoginForm from './form/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Row justify="center">
        <Title level={4}>
          Enter in <span style={{ color: red[8] }}>{APP_NAME}</span>
        </Title>
      </Row>

      <Row justify="center" style={{ marginTop: 16 }}>
        <LoginForm></LoginForm>
      </Row>
    </>
  );
};

export default LoginPage;
