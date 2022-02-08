import { ReactNode } from "react";
import { IntlProvider } from "react-intl";

import messages from "lib/translations/translations.json";
import { flattenMessages } from "lib/translations/utils/flattenMessages";

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  // @todo: Add language toggle feature
  return (
    <IntlProvider locale="en" messages={flattenMessages(messages.en)}>
      {children}
    </IntlProvider>
  );
};
