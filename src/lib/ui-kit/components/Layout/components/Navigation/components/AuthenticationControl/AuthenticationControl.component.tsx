import { HStack, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { Button } from "lib/ui-kit";
import { useToast } from "lib/utils";
import { AppRoutes } from "app";
import { useAuthentication } from "lib/authentication";
import { StyledAuthenticationControlAvatar as Avatar } from "./AuthenticationControl.styles";
import { useTranslations } from "lib/translations";

export const AuthenticationControl = () => {
  const navigate = useNavigate();
  const { isUserAuthenticated, userData, logout } = useAuthentication();
  const { successToast, errorToast } = useToast();
  const t = useTranslations();

  const handleClick = async () => {
    try {
      await logout();
      successToast(t("components.authenticationControl.successToast"));
    } catch {
      errorToast(t("components.authenticationControl.errorToast"));
    }
  };

  if (isUserAuthenticated)
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
    <ButtonGroup>
      <Button onClick={() => navigate(AppRoutes.LOGIN)}>
        {t("components.authenticationControl.login")}
      </Button>
      <Button onClick={() => navigate(AppRoutes.REGISTER)}>
        {t("components.authenticationControl.register")}
      </Button>
    </ButtonGroup>
  );
};
