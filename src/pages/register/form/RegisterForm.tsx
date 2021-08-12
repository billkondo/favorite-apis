import { Button, Form, Input, Row } from 'antd';
import Text from 'antd/lib/typography/Text';

import useRegisterForm from './useRegisterForm';

const RegisterForm = () => {
  const { onSubmit, loading, errorMessage } = useRegisterForm();

  return (
    <Form
      name="login-form"
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 14 }}
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
        rules={[{ required: true, message: 'Password should not be empty' }]}
        hasFeedback
        style={{ marginTop: 16 }}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        style={{ marginTop: 16 }}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Passwords do not match'));
            },
          }),
        ]}
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

export default RegisterForm;
