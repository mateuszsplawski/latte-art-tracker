import { Formik } from 'formik';

import { AppRoutes } from 'app';
import { useUser } from 'lib/api';
import { useNavigate } from 'lib/utils';
import { useAuthentication } from 'lib/authentication';
import { registerValidationSchema, RegisterFieldset } from 'lib/form-kit';
import { useTranslations } from 'lib/translations';
import { Button } from 'lib/ui-kit';
import { useToast } from 'lib/utils';
import { StyledRegisterForm as Form } from './Register.styles';

type RegisterFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const initialValues: RegisterFormValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegisterForm = () => {
  const t = useTranslations();
  const { register } = useAuthentication();
  const { setupUserEntry } = useUser();
  const { successToast, errorToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async ({ email, password }: RegisterFormValues) => {
    try {
      const { user } = await register({ email, password });
      await setupUserEntry(user.uid);
      navigate(AppRoutes.LOGIN);
      successToast(t('registerPage.successToast'));
    } catch {
      errorToast(t('registerPage.errorToast'));
    }
  };
  return (
    <Formik
      validationSchema={registerValidationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, dirty }) => (
        <Form noValidate>
          <RegisterFieldset />
          <Button isLoading={isSubmitting} isDisabled={!dirty} type="submit">
            {t('registerPage.buttonText')}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
