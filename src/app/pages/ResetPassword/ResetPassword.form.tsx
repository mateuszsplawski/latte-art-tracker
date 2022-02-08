import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { AppRoutes } from "app";
import { useAuthentication } from "lib/authentication";
import {
  resetPasswordValidationSchema,
  ResetPasswordFieldset,
} from "lib/form-kit";
import { useTranslations } from "lib/translations";
import { Button } from "lib/ui-kit";
import { useToast } from "lib/utils";
import { StyledResetPasswordForm as Form } from "./ResetPassword.styles";

type ResetPasswordFormValues = {
  email: string;
};

const initialValues: ResetPasswordFormValues = {
  email: "",
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
      successToast(t("resetPasswordPage.successToast"));
    } catch {
      errorToast(t("resetPasswordPage.errorToast"));
    }
  };
  return (
    <Formik
      validationSchema={resetPasswordValidationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, dirty }) => (
        <Form noValidate>
          <ResetPasswordFieldset />
          <Button isLoading={isSubmitting} isDisabled={!dirty} type="submit">
            {t("resetPasswordPage.buttonText")}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
