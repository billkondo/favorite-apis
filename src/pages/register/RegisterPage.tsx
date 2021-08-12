import { Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import { red } from '@ant-design/colors';

import APP_NAME from 'config/app_name';

import RegisterForm from './form/RegisterForm';

const RegisterPage = () => {
  return (
    <>
      <Row justify="center">
        <Title level={4}>
          Create account in <span style={{ color: red[8] }}>{APP_NAME}</span>
        </Title>
      </Row>

      <Row justify="center" style={{ marginTop: 16 }}>
        <RegisterForm></RegisterForm>
      </Row>
    </>
  );
};

export default RegisterPage;
