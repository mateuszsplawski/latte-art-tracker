import { Field, FieldProps } from "formik";

import { useTranslations } from "lib/translations";
import { Input } from "lib/ui-kit";

export const EmailField = () => {
  const t = useTranslations();

  return (
    <Field
      name="email"
      children={(props: FieldProps) => (
        <Input
          label={t("formFields.emailLabel")}
          placeholder={t("formFields.emailPlaceholder")}
          type="email"
          {...props}
        />
      )}
    />
  );
};
