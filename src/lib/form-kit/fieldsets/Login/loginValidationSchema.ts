import * as yup from "yup";

import { emailValidationSchema } from "lib/form-kit/components/EmailField/emailValidationSchema";
import { passwordValidationSchema } from "lib/form-kit/components/PasswordField/passwordValidationSchema";

export const loginValidationSchema = yup.object().shape({
  ...emailValidationSchema,
  ...passwordValidationSchema,
});
