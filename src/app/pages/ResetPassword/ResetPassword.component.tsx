import { forgotPasswordImage } from 'assets';
import { useTranslations } from 'lib/translations';
import {
  H1,
  Layout,
  ParagraphSmall,
  Section,
  ShadowWrapper,
  BackButton,
} from 'lib/ui-kit';
import { ResetPasswordForm } from './ResetPassword.form';
import { StyledResetPasswordImage as ResetPasswordImage } from './ResetPassword.styles';

export const ResetPassword = () => {
  const t = useTranslations();
  return (
    <Layout hasNavigation={false}>
      <Section shouldNotScroll isCentered>
        <ShadowWrapper>
          <BackButton />

          <H1>{t('resetPasswordPage.header')}</H1>

          <ResetPasswordImage alt="" src={forgotPasswordImage} />

          <ResetPasswordForm />

          <ParagraphSmall>{t('resetPasswordPage.infoText')}</ParagraphSmall>
        </ShadowWrapper>
      </Section>
    </Layout>
  );
};
