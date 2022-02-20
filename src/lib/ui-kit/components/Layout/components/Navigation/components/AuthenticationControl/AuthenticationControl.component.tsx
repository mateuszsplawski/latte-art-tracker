import { HStack, ButtonGroup, Skeleton } from "@chakra-ui/react";

import { Button } from "lib/ui-kit";
import { useToast, useNavigate } from "lib/utils";
import { AppRoutes } from "app";
import { useAuthentication } from "lib/authentication";
import { StyledAuthenticationControlAvatar as Avatar } from "./AuthenticationControl.styles";
import { useTranslations } from "lib/translations";
import { useUser } from "lib/api";

export const AuthenticationControl = () => {
  const navigate = useNavigate();
  const { logout } = useAuthentication();
  const { userData, isLoadingUserData, isAuthenticated } = useUser()
  const { successToast, errorToast } = useToast();
  const t = useTranslations();

  const handleClick = async () => {
    try {
      await logout();
      successToast(t("components.authenticationControl.successToast"));
      navigate(AppRoutes.HOME)
    } catch {
      errorToast(t("components.authenticationControl.errorToast"));
    }
  };

  if (isAuthenticated)
    return (
      <HStack>
        <Button onClick={handleClick}>
          {t("components.authenticationControl.logout")}
        </Button>
        <Avatar
          onClick={() => navigate(AppRoutes.USER_SETTINGS)}
          src={userData?.photoURL}
        />
      </HStack>
    );

  return (
    <Skeleton isLoaded={!isLoadingUserData}>
      <ButtonGroup>
        <Button onClick={() => navigate(AppRoutes.LOGIN)}>
          {t("components.authenticationControl.login")}
        </Button>
        <Button onClick={() => navigate(AppRoutes.REGISTER)}>
          {t("components.authenticationControl.register")}
        </Button>
      </ButtonGroup>
    </Skeleton>
  );
};
