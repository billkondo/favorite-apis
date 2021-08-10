import { useState } from 'react';

import LoginFormType from 'domain/authentication/LoginFormType';

const useLoginForm = () => {
  const [submittedForm, setSubmittedForm] = useState<LoginFormType | null>(
    null
  );

  const onSubmit = (form: LoginFormType) => setSubmittedForm(form);

  return { onSubmit, submitting: !!submittedForm };
};

export default useLoginForm;
