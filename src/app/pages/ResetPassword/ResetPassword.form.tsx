import { Formik } from 'formik';

import { AppRoutes } from 'app';
import { useAuthentication } from 'lib/authentication';
import {
  resetPasswordValidationSchema,
  ResetPasswordFieldset,
} from 'lib/form-kit';
import { useTranslations } from 'lib/translations';
import { Button } from 'lib/ui-kit';
import { useToast, useNavigate } from 'lib/utils';
import { StyledResetPasswordForm as Form } from './ResetPassword.styles';

type ResetPasswordFormValues = {
  email: string;
};

const initialValues: ResetPasswordFormValues = {
  email: '',
};

export const ResetPasswordForm = () => {
  const t = useTranslations();
  const { successToast, errorToast } = useToast();
  const { resetPassword } = useAuthentication();
  const navigate = useNavigate();

  const handleSubmit = async ({ email }: ResetPasswordFormValues) => {
    try {
      await resetPassword({ email });
      navigate(AppRoutes.LOGIN);
      successToast(t('resetPasswordPage.successToast'));
    } catch {
      errorToast(t('resetPasswordPage.errorToast'));
    }
  };
  return (
    <Formik
      validationSchema={resetPasswordValidationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, dirty }) => (
        <Form noValidate>
          <ResetPasswordFieldset />
          <Button isLoading={isSubmitting} isDisabled={!dirty} type="submit">
            {t('resetPasswordPage.buttonText')}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
