import {
  StyledLeftColumn as LeftColumn,
  StyledDeskWithMacbookImage as DeskWithMacbookImage,
} from "./Register.styles";
import { useTranslations } from "lib/translations";
import { H1, Layout, Link, ParagraphSmall, Section } from "lib/ui-kit";
import { AppRoutes } from "app";
import { deskWithMacbook } from "assets";
import { RegisterForm } from "./Register.form";

export const Register = () => {
  const t = useTranslations();
  return (
    <Layout hasFooter={false}>
      <Section shouldNotScroll>
        <LeftColumn>
          <H1>{t("registerPage.header")}</H1>

          <RegisterForm />

          <ParagraphSmall>
            {t("registerPage.loginInfo")}&nbsp;
            <Link to={AppRoutes.LOGIN}>{t("registerPage.login")}</Link>
          </ParagraphSmall>
        </LeftColumn>

        <DeskWithMacbookImage
          src={deskWithMacbook}
          alt={t("registerPage.deskWithMacbookImageAlt")}
        />
      </Section>
    </Layout>
  );
};
