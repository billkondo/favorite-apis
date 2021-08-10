import loginUseCase from './login_usecase';
import logoutUseCase from './logout_usecase';
import readPersistedUserUseCase from './read_persisted_user_usecase';

const AuthenticationUseCases = () => ({
  loginUseCase,
  logoutUseCase,
  readPersistedUserUseCase,
});

export type AuthenticationUseCasesType = ReturnType<
  typeof AuthenticationUseCases
>;

export default AuthenticationUseCases;
