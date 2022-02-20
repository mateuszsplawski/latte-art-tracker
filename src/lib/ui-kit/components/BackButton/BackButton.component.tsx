import { ArrowBackIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { useTranslations } from 'lib/translations';

export const BackButton = () => {
  const { goBack } = useHistory()
  const t = useTranslations();
  return (
    <IconButton
      onClick={() => goBack()}
      aria-label="Go to previous site"
      icon={<ArrowBackIcon />}
    >
      {t('components.backButton.goBack')}
    </IconButton>
  );
};
