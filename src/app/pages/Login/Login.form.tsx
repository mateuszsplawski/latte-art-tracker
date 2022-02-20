import { Formik } from 'formik';

import { useAuthentication } from 'lib/authentication';
import { LoginFieldset, loginValidationSchema } from 'lib/form-kit';
import { useTranslations } from 'lib/translations';
import { Button } from 'lib/ui-kit';
import { useToast, useNavigate } from 'lib/utils';
import { StyledLoginForm as Form } from './Login.styles';
import { AppRoutes } from 'app';

type LoginFormValues = {
  email: string;
  password: string;
};

const initialValues: LoginFormValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const t = useTranslations();
  const { login } = useAuthentication();
  const { successToast, errorToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async ({ email, password }: LoginFormValues) => {
    try {
      await login({ email, password });
      navigate(AppRoutes.HOME);
      successToast(t('loginPage.successToast'));
    } catch {
      errorToast(t('loginPage.errorToast'));
    }
  };
  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, dirty }) => (
        <Form noValidate>
          <LoginFieldset />
          <Button isLoading={isSubmitting} isDisabled={!dirty} type="submit">
            {t('loginPage.buttonText')}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
