import { Field, FieldProps } from "formik";

import { useTranslations } from "lib/translations";
import { Input } from "lib/ui-kit";

export const UsernameField = () => {
  const t = useTranslations();

  return (
    <Field
      name="username"
      children={(props: FieldProps) => (
        <Input
          label={t("formFields.usernameLabel")}
          placeholder={t("formFields.usernamePlaceholder")}
          {...props}
        />
      )}
    />
  );
};
