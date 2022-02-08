import { H1, Layout } from "lib/ui-kit";
import { AvatarPicker } from "lib/ui-kit/components/AvatarPicker/AvatarPicker.component";
import { UserSettingsForm } from "./UserSettings.form";
import { StyledUserSettingsSection as Section } from "./UserSettings.styles";

export const UserSettings = () => {
  return (
    <Layout>
      <Section>
        <H1>User settings</H1>
        <AvatarPicker />
        <UserSettingsForm />
      </Section>
    </Layout>
  );
};
