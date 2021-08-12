import loginUseCase from './login_usecase';
import registerUseCase from './register_usecase';
import logoutUseCase from './logout_usecase';
import readPersistedUserUseCase from './read_persisted_user_usecase';
import persistUserUseCase from './persist_user_usecase';

const AuthenticationUseCases = () => ({
  loginUseCase,
  registerUseCase,
  logoutUseCase,
  readPersistedUserUseCase,
  persistUserUseCase,
});

export type AuthenticationUseCasesType = ReturnType<
  typeof AuthenticationUseCases
>;

export default AuthenticationUseCases;
