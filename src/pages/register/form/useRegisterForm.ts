import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Routes from 'config/routes';

import { EmailAlreadyPicked } from 'domain/authentication/AuthenticationError';
import RegisterFormType from 'domain/authentication/RegisterFormType';
import useAuthentication from 'domain/authentication/useAuthentication';

import useSubmit from 'utils/useSubmit';

const useRegisterForm = () => {
  const history = useHistory();
  const { authenticated, register } = useAuthentication();

  const [form, setForm] = useState<RegisterFormType>({
    email: '',
    password: '',
    confirmation: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const { loading, submit } = useSubmit(
    async () => {
      await register(form);
    },
    () => {},
    (error) => {
      switch (error.constructor) {
        case EmailAlreadyPicked:
          setErrorMessage('This email is already being used');
          break;

        default:
          setErrorMessage('Something went wrong. Try again');
          throw error;
      }
    }
  );

  useEffect(() => {
    if (authenticated) history.push(Routes.HOME);
  }, [authenticated, history]);

  const onSubmit = (form: RegisterFormType) => {
    setForm(form);
    submit();
  };

  return {
    loading,
    onSubmit,
    errorMessage,
  };
};

export default useRegisterForm;
