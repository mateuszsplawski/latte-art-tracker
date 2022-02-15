import { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

import messages from 'lib/translations/translations.json';
import { flattenMessages } from 'lib/translations/utils/flattenMessages';

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  return (
    <IntlProvider locale="pl" messages={flattenMessages(messages.pl)}>
      {children}
    </IntlProvider>
  );
};
