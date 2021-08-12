import UserType from 'domain/user/UserType';

import RegisterFormType from 'domain/authentication/RegisterFormType';

const registerUseCase = async (form: RegisterFormType): Promise<UserType> => {
  const { email } = form;

  return {
    email,
    id: '1',
  };
};

export default registerUseCase;
