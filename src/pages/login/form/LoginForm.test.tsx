import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import mockMatchMedia from 'mocks/matchMedia';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const setup = () => {
    mockMatchMedia();

    render(<LoginForm></LoginForm>);
  };

  // In React Ant Design, when a button is loading,
  // it has the class 'ant-btn-loading'
  const elementHasLoadingClass = (element: HTMLElement) => {
    const classes = element.className.split(' ');

    const loadingClass = classes.find(
      (className) => className === 'ant-btn-loading'
    );

    return !!loadingClass;
  };

  test('it should disable submit button when form is submitting', async () => {
    setup();

    const usernameInput = await screen.findByLabelText('Username');
    const passwordInput = await screen.findByLabelText('Password');
    const submitButton = await screen.findByTitle('login-form-submit-button');

    userEvent.type(usernameInput, 'username');
    userEvent.type(passwordInput, 'password');
    userEvent.click(submitButton);

    await waitFor(() =>
      expect(elementHasLoadingClass(submitButton)).toBe(true)
    );
  });
});
