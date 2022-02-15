import { LoginForm } from './Login.form';
import { useTranslations } from 'lib/translations';
import {
  ShadowWrapper,
  H1,
  Layout,
  Link,
  ParagraphSmall,
  Section,
  BackButton,
} from 'lib/ui-kit';
import { AppRoutes } from 'app';
import { StyledLoginImage as LoginImage } from './Login.styles';
import { coffeeStandImage } from 'assets';

export const Login = () => {
  const t = useTranslations();
  return (
    <Layout hasNavigation={false}>
      <Section isCentered shouldNotScroll>
        <ShadowWrapper>
          <BackButton />

          <H1>{t('loginPage.header')}</H1>

          <LoginImage alt="" src={coffeeStandImage} />

          <LoginForm />

          <ParagraphSmall>
            {t('loginPage.signUpInfo')}&nbsp;
            <Link to={AppRoutes.REGISTER}>{t('loginPage.signUp')}</Link>
          </ParagraphSmall>

          <ParagraphSmall>
            {t('loginPage.forgotPasswordInfo')}&nbsp;
            <Link to={AppRoutes.RESET_PASSWORD}>
              {t('loginPage.forgotPassword')}
            </Link>
          </ParagraphSmall>
        </ShadowWrapper>
      </Section>
    </Layout>
  );
};
