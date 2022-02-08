import { EmailField } from "lib/form-kit/components/EmailField/EmailField.component";
import { PhoneNumberField } from "lib/form-kit/components/PhoneNumberField/PhoneNumberField.component";
import { UsernameField } from "lib/form-kit/components/UsernameField/UsernameField.component";

export const UserSettingsFieldset = () => {
  return (
    <>
      <UsernameField />
      <EmailField />
      <PhoneNumberField />
    </>
  );
};
