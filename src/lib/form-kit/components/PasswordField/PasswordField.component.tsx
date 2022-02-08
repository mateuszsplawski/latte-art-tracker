import { Field, FieldProps } from "formik";
import { useTranslations } from "lib/translations";
import { Input } from "lib/ui-kit";

export const PasswordField = () => {
  const t = useTranslations();

  return (
    <Field
      name="password"
      children={(props: FieldProps) => (
        <Input
          label={t("formFields.passwordLabel")}
          placeholder={t("formFields.passwordPlaceholder")}
          type="password"
          {...props}
        />
      )}
    />
  );
};
