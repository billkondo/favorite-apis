import { Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import { red } from '@ant-design/colors';

import APP_NAME from 'config/app_name';

const RegisterPage = () => {
  return (
    <>
      <Row justify="center">
        <Title>
          Create account in <span style={{ color: red[8] }}>{APP_NAME}</span>
        </Title>
      </Row>
    </>
  );
};

export default RegisterPage;
