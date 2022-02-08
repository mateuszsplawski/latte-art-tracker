import { AppRoutes } from "app";
import { Formik, FormikHelpers } from "formik";
import { useAuthentication } from "lib/authentication";

import { registerValidationSchema, RegisterFieldset } from "lib/form-kit";
import { useTranslations } from "lib/translations";
import { Button } from "lib/ui-kit";
import { useToast } from "lib/utils";
import { useNavigate } from "react-router-dom";
import { StyledRegisterForm as Form } from "./Register.styles";

type RegisterFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const initialValues: RegisterFormValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterForm = () => {
  const t = useTranslations();
  const { register } = useAuthentication();
  const { successToast, errorToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async ({ email, password }: RegisterFormValues) => {
    try {
      await register({ email, password });
      navigate(AppRoutes.LOGIN);
      successToast(t("registerPage.successToast"));
    } catch {
      errorToast(t("registerPage.errorToast"));
    }
  };
  return (
    <Formik
      validationSchema={registerValidationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, dirty }) => (
        <Form noValidate>
          <RegisterFieldset />
          <Button isLoading={isSubmitting} isDisabled={!dirty} type="submit">
            {t("registerPage.buttonText")}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
