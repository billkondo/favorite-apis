import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Routes from 'config/routes';

import {
  UserNotFound,
  WrongPassword,
} from 'domain/authentication/AuthenticationError';
import LoginFormType from 'domain/authentication/LoginFormType';
import useAuthentication from 'domain/authentication/useAuthentication';

import useSubmit from 'utils/useSubmit';

const useLoginForm = () => {
  const history = useHistory();
  const { authenticated, login } = useAuthentication();

  const [submittedForm, setSubmittedForm] = useState<LoginFormType>({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const { submit, loading } = useSubmit(
    async () => {
      await login(submittedForm);
    },
    () => {},
    (error) => {
      switch (error.constructor) {
        case WrongPassword:
          setErrorMessage('Wrong Password');
          break;

        case UserNotFound:
          setErrorMessage('There is no account with this email');
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

  const onSubmit = (form: LoginFormType) => {
    setSubmittedForm(form);
    setErrorMessage('');
    submit();
  };

  return { onSubmit, loading, errorMessage };
};

export default useLoginForm;
