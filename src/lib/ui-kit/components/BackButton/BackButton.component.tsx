import { ArrowBackIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

import { useTranslations } from 'lib/translations';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();
  const t = useTranslations();
  return (
    <IconButton
      onClick={() => navigate(-1)}
      aria-label="Go to previous site"
      icon={<ArrowBackIcon />}
    >
      {t('components.backButton.goBack')}
    </IconButton>
  );
};
