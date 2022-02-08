import { ConfirmPasswordField } from "lib/form-kit/components/ConfirmPasswordField/ConfirmPasswordField.component";
import { EmailField } from "lib/form-kit/components/EmailField/EmailField.component";
import { PasswordField } from "lib/form-kit/components/PasswordField/PasswordField.component";

export const RegisterFieldset = () => {
  return (
    <>
      <EmailField />
      <PasswordField />
      <ConfirmPasswordField />
    </>
  );
};
