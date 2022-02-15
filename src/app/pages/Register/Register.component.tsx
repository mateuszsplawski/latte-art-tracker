import { useTranslations } from 'lib/translations';
import {
  H1,
  Layout,
  Link,
  ParagraphSmall,
  Section,
  ShadowWrapper,
  BackButton,
} from 'lib/ui-kit';
import { AppRoutes } from 'app';
import { RegisterForm } from './Register.form';
import { StyledRegisterImage as RegisterImage } from './Register.styles';
import { gingerbreadLatteImage } from 'assets';

export const Register = () => {
  const t = useTranslations();
  return (
    <Layout hasNavigation={false}>
      <Section isCentered shouldNotScroll>
        <ShadowWrapper>
          <BackButton />

          <H1>{t('registerPage.header')}</H1>

          <RegisterImage alt="" src={gingerbreadLatteImage} />

          <RegisterForm />

          <ParagraphSmall>
            {t('registerPage.loginInfo')}&nbsp;
            <Link to={AppRoutes.LOGIN}>{t('registerPage.login')}</Link>
          </ParagraphSmall>
        </ShadowWrapper>
      </Section>
    </Layout>
  );
};
