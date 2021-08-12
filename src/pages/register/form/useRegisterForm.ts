import { useState } from 'react';

import RegisterFormType from 'domain/authentication/RegisterFormType';
import useAuthentication from 'domain/authentication/useAuthentication';

import useSubmit from 'utils/useSubmit';

const useRegisterForm = () => {
  const { register } = useAuthentication();

  const [form, setForm] = useState<RegisterFormType>({
    email: '',
    password: '',
    confirmation: '',
  });

  const { loading, submit } = useSubmit(async () => {
    await register(form);
  });

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
