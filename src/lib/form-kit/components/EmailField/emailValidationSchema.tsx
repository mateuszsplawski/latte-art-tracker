import { FormattedMessage } from "react-intl";
import * as yup from "yup";

export const emailValidationSchema = {
  email: yup
    .string()
    .trim()
    .email(() => <FormattedMessage id="validationMessages.invalidTypeEmail" />)
    .required(() => (
      <FormattedMessage id="validationMessages.fieldIsRequired" />
    )),
};
