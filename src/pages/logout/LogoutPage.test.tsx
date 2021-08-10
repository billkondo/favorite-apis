import { render, screen, waitFor } from '@testing-library/react';
import AuthenticationProvider from 'domain/authentication/AuthenticationProvider';

import mockMatchMedia from 'mocks/matchMedia';

import AuthenticationUseCases from 'domain/authentication/usecases/authentication_usecases';

import LogoutPage from './LogoutPage';
import UseCasesProvider from 'domain/usecases/UseCasesProvider';

jest.mock('domain/authentication/usecases/authentication_usecases', () =>
  jest.fn()
);

type TestParams = {
  authenticated?: boolean;
};

describe('LogoutPage', () => {
  const MOCKED_EMAIL = 'mocked-email@gmail.com';

  const setup = (params: TestParams = { authenticated: false }) => {
    const { authenticated = false } = params;

    mockMatchMedia();

    const logoutUseCase = jest.fn();
    (AuthenticationUseCases as jest.Mock).mockImplementation(() => ({
      logoutUseCase: logoutUseCase,
      readPersistedUserUseCase: () => {
        if (!authenticated) return null;

        return { email: MOCKED_EMAIL };
      },
    }));

    render(
      <UseCasesProvider>
        <AuthenticationProvider>
          <LogoutPage></LogoutPage>
        </AuthenticationProvider>
      </UseCasesProvider>
    );

    return { logoutUseCase };
  };

  test('it should logout user when user goes to logout page', async () => {
    const { logoutUseCase } = setup({ authenticated: true });

    const loggingOutWarning = await screen.findByTitle('Logging out warning');
    expect(loggingOutWarning).toBeVisible();

    const loggedOutWarning = await screen.findByTitle('Logged out warning');
    expect(loggedOutWarning).toBeVisible();

    expect(logoutUseCase).toBeCalledTimes(1);
  });

  test('user should remain logged out when user goes to logout page', async () => {
    const { logoutUseCase } = setup({ authenticated: false });

    const loggedOutWarning = await screen.findByTitle('Logged out warning');
    expect(loggedOutWarning).toBeVisible();

    await waitFor(() => expect(logoutUseCase).toBeCalledTimes(1));

    expect(loggedOutWarning).toBeVisible();
  });
});
