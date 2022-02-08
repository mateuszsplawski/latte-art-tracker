import { User } from "firebase/auth";

export const mapUserDataToUserSettingsFormData = (userData: User | null) => ({
  username: userData?.displayName,
  email: userData?.email,
  phoneNumber: userData?.phoneNumber,
});
