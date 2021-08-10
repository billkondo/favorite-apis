import { useHistory } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import mockMatchMedia from 'mocks/matchMedia';

import Routes from 'config/routes';

import UseCasesProvider from 'domain/usecases/UseCasesProvider';
import AuthenticationProvider from 'domain/authentication/AuthenticationProvider';

import authenticationUseCases from 'domain/authentication/usecases/authentication_usecases';

import LoginForm from './LoginForm';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn(),
}));

jest.mock('domain/authentication/usecases/authentication_usecases', () =>
  jest.fn()
);

describe('LoginForm', () => {
  const setup = async () => {
    mockMatchMedia();

    (authenticationUseCases as jest.Mock).mockImplementation(() => ({
      loginUseCase: async () => ({ email: 'email' }),
    }));

    const push = jest.fn();
    (useHistory as jest.Mock).mockImplementation(() => ({
      push,
    }));

    render(
      <UseCasesProvider>
        <AuthenticationProvider>
          <LoginForm></LoginForm>
        </AuthenticationProvider>
      </UseCasesProvider>
    );

    const emailInput = await screen.findByLabelText('Email');
    const passwordInput = await screen.findByLabelText('Password');
    const submitButton = await screen.findByTitle('login-form-submit-button');

    userEvent.type(emailInput, 'email@gmail.com');
    userEvent.type(passwordInput, 'password');
    userEvent.click(submitButton);

    return { emailInput, passwordInput, submitButton, push };
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
    const { submitButton } = await setup();

    await waitFor(() =>
      expect(elementHasLoadingClass(submitButton)).toBe(true)
    );
  });

  test('it should redirect to home page when login is successful', async () => {
    const { push } = await setup();

    await waitFor(() => expect(push).toBeCalledWith(Routes.HOME));
  });
});
