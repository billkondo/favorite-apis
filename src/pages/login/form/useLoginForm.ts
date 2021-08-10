import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Routes from 'config/routes';

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

  const { submit, loading } = useSubmit(async () => {
    await login(submittedForm);
  });

  useEffect(() => {
    if (authenticated) history.push(Routes.HOME);
  }, [authenticated, history]);

  const onSubmit = (form: LoginFormType) => {
    setSubmittedForm(form);
    submit();
  };

  return { onSubmit, loading };
};

export default useLoginForm;
