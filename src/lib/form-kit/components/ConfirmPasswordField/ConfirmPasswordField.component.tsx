import { Field, FieldProps } from "formik";
import { useTranslations } from "lib/translations";
import { Input } from "lib/ui-kit";

export const ConfirmPasswordField = () => {
  const t = useTranslations();

  return (
    <Field
      name="confirmPassword"
      children={(props: FieldProps) => (
        <Input
          label={t("formFields.confirmPasswordLabel")}
          placeholder={t("formFields.confirmPasswordPlaceholder")}
          type="password"
          {...props}
        />
      )}
    />
  );
};
