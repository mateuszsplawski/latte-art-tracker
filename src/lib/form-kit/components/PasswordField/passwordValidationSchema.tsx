import { FormattedMessage } from "react-intl";
import * as yup from "yup";

const minimumCharactersCount = 6;

export const passwordValidationSchema = {
  password: yup
    .string()
    .trim()
    .min(minimumCharactersCount, () => (
      <FormattedMessage
        id="validationMessages.notEnoughCharacters"
        values={{ characterCount: minimumCharactersCount }}
      />
    ))
    .required(() => (
      <FormattedMessage id="validationMessages.fieldIsRequired" />
    )),
};
