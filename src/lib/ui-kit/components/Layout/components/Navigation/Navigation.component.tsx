import { ReactNode } from "react";

import { StyledNavigationWrapper as Wrapper } from "./Navigation.styles";
import { AuthenticationControl } from "./components/AuthenticationControl/AuthenticationControl.component";

interface NavigationProps {
  leftSide?: ReactNode;
  center?: ReactNode;
}

export const Navigation = ({ center, leftSide }: NavigationProps) => {
  return (
    <Wrapper>
      {leftSide}
      {center}
      <AuthenticationControl />
    </Wrapper>
  );
};
