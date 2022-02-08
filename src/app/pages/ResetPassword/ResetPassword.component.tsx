import {
  StyledRightColumn as RightColumn,
  StyledDeskWithDeveloperImage as DeskWithDeveloperImage,
} from "./ResetPassword.styles";
import { useTranslations } from "lib/translations";
import { H1, Layout, ParagraphSmall, Section } from "lib/ui-kit";
import { ResetPasswordForm } from "./ResetPassword.form";
import { deskWithDeveloper } from "assets";

export const ResetPassword = () => {
  const t = useTranslations();
  return (
    <Layout hasFooter={false}>
      <Section shouldNotScroll>
        <DeskWithDeveloperImage
          src={deskWithDeveloper}
          alt={t("resetPasswordPage.deskWithDeveloperImageAlt")}
        />

        <RightColumn>
          <H1>{t("resetPasswordPage.header")}</H1>

          <ResetPasswordForm />

          <ParagraphSmall>{t("resetPasswordPage.infoText")}</ParagraphSmall>
        </RightColumn>
      </Section>
    </Layout>
  );
};
