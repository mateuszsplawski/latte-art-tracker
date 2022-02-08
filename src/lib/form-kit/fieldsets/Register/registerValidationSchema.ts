import * as yup from "yup";

import { confirmPasswordValidationSchema } from "lib/form-kit/components/ConfirmPasswordField/confirmPasswordFieldSchema";
import { emailValidationSchema } from "lib/form-kit/components/EmailField/emailValidationSchema";
import { passwordValidationSchema } from "lib/form-kit/components/PasswordField/passwordValidationSchema";

export const registerValidationSchema = yup.object().shape({
  ...emailValidationSchema,
  ...passwordValidationSchema,
  ...confirmPasswordValidationSchema,
});
