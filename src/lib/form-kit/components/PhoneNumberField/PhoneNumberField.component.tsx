import { Field, FieldProps } from "formik";

import { useTranslations } from "lib/translations";
import { Input } from "lib/ui-kit";

export const PhoneNumberField = () => {
  const t = useTranslations();

  return (
    <Field
      name="phoneNumber"
      children={(props: FieldProps) => (
        <Input
          label={t("formFields.phoneNumberLabel")}
          placeholder={t("formFields.phoneNumberPlaceholder")}
          {...props}
        />
      )}
    />
  );
};
