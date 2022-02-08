import { LoginForm } from "./Login.form";
import {
  StyledDeskImage as DeskImage,
  StyledRightColumn as RightColumn,
} from "./Login.styles";
import { deskImageSrc } from "assets";
import { useTranslations } from "lib/translations";
import { H1, Layout, Link, ParagraphSmall, Section } from "lib/ui-kit";
import { AppRoutes } from "app";

export const Login = () => {
  const t = useTranslations();
  return (
    <Layout hasFooter={false}>
      <Section shouldNotScroll>
        <DeskImage alt={t("loginPage.deskImageAlt")} src={deskImageSrc} />

        <RightColumn>
          <H1>{t("loginPage.header")}</H1>

          <LoginForm />

          <ParagraphSmall>
            {t("loginPage.signUpInfo")}&nbsp;
            <Link to={AppRoutes.REGISTER}>{t("loginPage.signUp")}</Link>
          </ParagraphSmall>

          <ParagraphSmall>
            {t("loginPage.forgotPasswordInfo")}&nbsp;
            <Link to={AppRoutes.RESET_PASSWORD}>
              {t("loginPage.forgotPassword")}
            </Link>
          </ParagraphSmall>
        </RightColumn>
      </Section>
    </Layout>
  );
};
