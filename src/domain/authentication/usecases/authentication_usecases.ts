import loginUseCase from './login_usecase';
import registerUseCase from './register_usecase';
import logoutUseCase from './logout_usecase';
import readPersistedUserUseCase from './read_persisted_user_usecase';

const AuthenticationUseCases = () => ({
  loginUseCase,
  registerUseCase,
  logoutUseCase,
  readPersistedUserUseCase,
});

export type AuthenticationUseCasesType = ReturnType<
  typeof AuthenticationUseCases
>;

export default AuthenticationUseCases;
