import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Routes from 'config/routes';

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

  const { loading, submit } = useSubmit(async () => {
    await register(form);
  });

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
  };
};

export default useRegisterForm;
