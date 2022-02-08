import { useIntl } from "react-intl";

export const useTranslations = () => {
  const { formatMessage } = useIntl();
  return (id: string, values?: Record<string, string>) =>
    formatMessage({ id }, values) as string;
};
