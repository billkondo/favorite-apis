import { Button, Form, Input } from 'antd';

import useLoginForm from './useLoginForm';

const LoginForm = () => {
  const { onSubmit, loading } = useLoginForm();

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
    </Form>
  );
};

export default LoginForm;
