import AuthenticationService from 'services/authentication/AuthenticationService';

const logoutUseCase =
  (authenticationServices: AuthenticationService) => async () => {
    await authenticationServices.logout();
  };

export default logoutUseCase;
