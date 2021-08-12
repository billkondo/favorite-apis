import { Button, Form, Input, Row } from 'antd';
import Text from 'antd/lib/typography/Text';

import useLoginForm from './useLoginForm';

const LoginForm = () => {
  const { onSubmit, loading, errorMessage } = useLoginForm();

  return (
    <Form
      name="login-form"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onSubmit}
    >
      <Form.Item
        label="Email"
        name="email"
        hasFeedback
        rules={[
          { required: true, message: 'Email should not be empty' },
          { type: 'email', message: 'Email is invalid' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        hasFeedback
        rules={[{ required: true, message: 'Password should not be empty' }]}
        style={{ marginTop: 16 }}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{ offset: 8 }}
        style={{ marginTop: 16, alignSelf: 'flex-end' }}
      >
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          title="login-form-submit-button"
        >
          Submit
        </Button>
      </Form.Item>

      <Row justify="center">
        <Text type="danger">{errorMessage}</Text>
      </Row>
    </Form>
  );
};

export default LoginForm;
