import loginUseCase from './login_usecase';

const AuthenticationUseCases = () => ({
  loginUseCase,
});

export type AuthenticationUseCasesType = ReturnType<
  typeof AuthenticationUseCases
>;

export default AuthenticationUseCases;
