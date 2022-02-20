import { UserData } from 'lib/api';

export const mapUserDataToUserSettingsFormData = (
  userData: UserData | null
) => ({
  username: userData?.displayName,
  email: userData?.email,
  phoneNumber: userData?.phoneNumber,
});
