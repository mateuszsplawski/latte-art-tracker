import { FormattedMessage } from "react-intl";
import * as yup from "yup";

const minimumCharactersCount = 6;

export const confirmPasswordValidationSchema = {
  confirmPassword: yup
    .string()
    .trim()
    .min(minimumCharactersCount, () => (
      <FormattedMessage
        id="validationMessages.notEnoughCharacters"
        values={{ characterCount: minimumCharactersCount }}
      />
    ))
    .oneOf([yup.ref("password"), null], () => (
      <FormattedMessage id="validationMessages.passwordsMustBeEqual" />
    ))
    .required(() => (
      <FormattedMessage id="validationMessages.fieldIsRequired" />
    )),
};
