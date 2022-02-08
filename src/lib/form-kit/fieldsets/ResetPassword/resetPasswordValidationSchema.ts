import * as yup from "yup";

import { emailValidationSchema } from "lib/form-kit/components/EmailField/emailValidationSchema";

export const resetPasswordValidationSchema = yup.object().shape({
  ...emailValidationSchema,
});
